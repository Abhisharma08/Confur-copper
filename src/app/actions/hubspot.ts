'use server';

/**
 * HubSpot UPSERT Contact
 * - Searches contact by email
 * - Updates contact if email already exists
 * - Creates contact if email does not exist
 * - Gracefully handles missing custom properties in HubSpot portal
 */

export type HubSpotPayload = {
  name?: string;
  email: string;
  phone?: string;
  company_name?: string;
  budget?: string;
  custom_requirement?: string;
  designation?: string;
  furnace_requirement?: string;
  production_capacity?: string;
  lead_source?: string;
};

async function sendHubSpotRequest(
  url: string,
  method: string,
  properties: Record<string, string>,
  accessToken: string
) {
  let response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ properties }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || '';

    // If HubSpot rejects a custom property that doesn't exist in the portal schema
    if (
      response.status === 400 &&
      errorMessage.toLowerCase().includes('does not exist')
    ) {
      console.warn(
        'HubSpot rejected property, retrying with core properties:',
        errorMessage
      );

      const safeProperties = { ...properties };
      delete safeProperties.budget;
      delete safeProperties.custom_requirement;
      delete safeProperties.production_capacity;

      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ properties: safeProperties }),
      });

      if (!response.ok) {
        const retryError = await response.json();
        return {
          ok: false,
          error: retryError.message || 'Failed to sync with HubSpot CRM.',
        };
      }

      return { ok: true, data: await response.json() };
    }

    return {
      ok: false,
      error: errorMessage || 'Failed to sync with HubSpot CRM.',
    };
  }

  return { ok: true, data: await response.json() };
}

export async function submitToHubSpot(data: HubSpotPayload) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured.');
    return {
      success: false,
      error: 'Server configuration error.',
    };
  }

  if (!data.email) {
    return {
      success: false,
      error: 'Email is required for CRM synchronization.',
    };
  }

  try {
    const properties: Record<string, string> = {
      email: data.email.trim(),
    };

    if (data.name && data.name.trim()) {
      const [firstname, ...lastnameParts] = data.name.trim().split(/\s+/);
      properties.firstname = firstname;
      if (lastnameParts.length > 0) {
        properties.lastname = lastnameParts.join(' ');
      }
    }

    if (data.phone && data.phone.trim()) {
      properties.phone = data.phone.trim();
    }

    if (data.company_name && data.company_name.trim()) {
      properties.company = data.company_name.trim();
    }

    if (data.designation && data.designation.trim()) {
      properties.jobtitle = data.designation.trim();
    }

    if (data.lead_source && data.lead_source.trim()) {
      properties.lead_source = data.lead_source.trim();
    }

    // Consolidated requirement details for standard note/text field
    const requirementDetails = [
      data.custom_requirement
        ? `Custom Requirement: ${data.custom_requirement.trim()}`
        : null,
      data.budget ? `Budget: ${data.budget.trim()}` : null,
      data.furnace_requirement
        ? `Details: ${data.furnace_requirement.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join(' | ');

    if (requirementDetails) {
      properties.furnace_requirement = requirementDetails;
    }

    // Direct properties in case they exist in portal schema
    if (data.budget && data.budget.trim()) {
      properties.budget = data.budget.trim();
    }

    if (data.custom_requirement && data.custom_requirement.trim()) {
      properties.custom_requirement = data.custom_requirement.trim();
    }

    if (data.production_capacity && data.production_capacity.trim()) {
      properties.production_capacity = data.production_capacity.trim();
    }

    /**
     * STEP 1 — SEARCH CONTACT BY EMAIL
     */
    const searchResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email.trim(),
                },
              ],
            },
          ],
          properties: ['email'],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      console.error('HubSpot Search Error:', errorData);
      return {
        success: false,
        error: errorData.message || 'Failed to search HubSpot contact.',
      };
    }

    const searchData = await searchResponse.json();
    const existingContact = searchData.results?.[0];

    /**
     * STEP 2 — UPDATE CONTACT IF EXISTS
     */
    if (existingContact) {
      const updateResult = await sendHubSpotRequest(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`,
        'PATCH',
        properties,
        accessToken
      );

      if (!updateResult.ok) {
        console.error('HubSpot Update Error:', updateResult.error);
        return {
          success: false,
          error: updateResult.error,
        };
      }

      return {
        success: true,
        action: 'updated',
      };
    }

    /**
     * STEP 3 — CREATE CONTACT IF NEW
     */
    const createResult = await sendHubSpotRequest(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      'POST',
      properties,
      accessToken
    );

    if (!createResult.ok) {
      console.error('HubSpot Create Error:', createResult.error);
      return {
        success: false,
        error: createResult.error,
      };
    }

    return {
      success: true,
      action: 'created',
    };
  } catch (error) {
    console.error('HubSpot Submission Exception:', error);
    return {
      success: false,
      error: 'Internal server error during CRM sync.',
    };
  }
}