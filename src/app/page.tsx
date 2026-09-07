"use client"

import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  Flame,
  Factory,
  Settings,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building2,
  Wrench,
  Cpu,
  BarChart3,
  Zap,
  Wind,
  Snowflake,
  Cable,
  Car,
  Drill,
  Recycle,
  Plane,
  Battery,

  Layers,
  Activity,
  Award,
  Globe,
  RefreshCw,
  FileCheck,
  Sliders,
  Check,
  Flame,
} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779688587/WhatsApp_Image_2026-05-24_at_2.01.46_PM_e3rdsn.jpg"
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/furnace/1200/900"
const Product_1 = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779528431/WhatsApp_Image_2026-05-23_at_12.09.18_PM_ntnyd3.jpg"
const Product_2 = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779528435/WhatsApp_Image_2026-05-23_at_12.09.18_PM_1_wcdree.jpg"

export default function LandingPage() {
  const scrollToLeadForm = () => {
    const candidates = [  
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
      document.getElementById("bottom-form"),
    ].filter(Boolean) as HTMLElement[]

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0]

    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMD92WBZ');`,
        }}
      />
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
  {/* URGENCY BAR */}
  {/* <div className="fixed top-0 z-[60] w-full bg-primary py-2 text-center text-sm font-semibold text-white">
    🔥 Limited Slots Open — Get Your Custom Furnace Quote Within 4 Working Hours
    <span className="mx-3 hidden md:inline">|</span>
    <span className="block md:inline">
      Call Now: +91 98113 04306
    </span>
  </div> */}
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-slate-900">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="container mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={LOGO_URL}
                alt="Continental Furnaces"
                width={180}
                height={55}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

{/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white backdrop-blur-xl overflow-x-hidden">
  <div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4">
    
    {/* LEFT */}
    <div className="flex items-center gap-3 md:gap-5">
            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-5">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-11 rounded-xl shadow-md transition-all"
                onClick={scrollToLeadForm}
              >
                REQUEST PROPOSAL →
              </Button>
            </div>
          </div>
        </nav>

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="Continental Furnaces"
          width={180}
          height={55}
          className="h-10 md:h-14 w-auto object-contain"
          priority
        />
      </Link>
    </div>
        <main className="pt-[64px] md:pt-[80px] pb-24 lg:pb-0 w-full">
          {/* SECTION 1 — HERO SECTION */}
          <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={HERO_BG_URL}
                alt="Copper Rod Manufacturing Systems"
                fill
                className="object-cover opacity-35"
                priority
              />
            </div>

    {/* RIGHT */}
    <div className="hidden lg:flex items-center gap-5">
      {/* <div className="text-right">
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75" />

        <p className="text-xs text-secondary">
          ISO 9001:2015 &
          <br />ISO 14001:2015 Certified
        </p>
      </div> */}
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-12 rounded-xl"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</nav>
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[56%_40%] xl:gap-20">
                {/* LEFT CONTENT */}
                <div className="space-y-8 text-white pt-2">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wider text-primary uppercase">
                      COPPER ROD MANUFACTURING SYSTEMS
                    </div>

  <main className="pt-[64px] md:pt-[96px] pb-24 lg:pb-0 w-full">
    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_URL}
          alt="Industrial Aluminium Furnace"
          fill
          className="object-cover"
          priority
        />
      </div>
                    <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-5xl font-headline">
                      CCR & UPCAST LINES
                    </h1>

      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300 font-medium uppercase tracking-wide">
                      ETP, FRHC AND OXYGEN-FREE COPPER ROD FROM ONE ENGINEERING PARTNER INTEGRATED MELTING, CASTING, ROLLING, COOLING AND AUTOMATION, ENGINEERED AROUND YOUR FEED AND YOUR FINISHED ROD.
                    </p>
                  </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
                  {/* 4 TRUST TILES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl pt-2">
                    {[
                      {
                        title: "ENGINEERING COPPER SYSTEMS SINCE 1987",
                        icon: <Factory className="h-6 w-6 text-primary shrink-0" />,
                      },
                      {
                        title: "ISO 9001:2015 & ISO 14001:2015 CERTIFIED",
                        icon: <ShieldCheck className="h-6 w-6 text-primary shrink-0" />,
                      },
                      {
                        title: "500+ INSTALLATIONS",
                        icon: <Award className="h-6 w-6 text-primary shrink-0" />,
                      },
                      {
                        title: "TURNKEY SCOPE — PROCESS STUDY TO COMMISSIONING",
                        icon: <FileCheck className="h-6 w-6 text-primary shrink-0" />,
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-sm shadow-sm"
                      >
                        <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-xs md:text-sm font-bold tracking-wide text-slate-200">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white pt-4">
                {/* RIGHT FORM */}
                <div className="lg:sticky lg:top-28" id="top-form-desktop">
                  <LeadForm />
                </div>
              </div>
            </div>
          </section>

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] tracking-tight text-primary md:text-4xl">
                Aluminium Recycling & Processing Furnaces 
              </h1>
          {/* SECTION 2 — ENGINEERED AROUND YOUR PRODUCT. BUILT AROUND YOUR PRODUCTION. */}
          <section className="py-20 bg-slate-50 border-b border-slate-200 w-full">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  ENGINEERED AROUND YOUR PRODUCT. BUILT AROUND YOUR PRODUCTION.
                </h2>

              {/* <h2 className="max-w-5xl text-2xl font-bold leading-[1.05] tracking-tight text-primary md:text-3xl">
                Bogie Hearth Oven · Ageing Furnace <br /> · Custom-Built
              </h2> */}
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  Continental Furnaces designs and supplies industrial furnaces and integrated metal-processing systems for ferrous and non-ferrous industries.
                </p>

              <p className="max-w-3xl text-lg leading-relaxed text-white">
                ISO-certified aluminium furnaces for annealing, ageing,
                stress relieving, and precipitation hardening. Electric
                heating with zero contamination, forced air circulation,
                and PLC/HMI precision control — custom-engineered for
                your production capacity.
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  Our copper portfolio brings together melting, casting, rolling, cooling, coiling and automation to deliver complete plant-level solutions.
                </p>

                <div className="pt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary tracking-wide">
                    TWO ROUTES. ONE ENGINEERING PARTNER.
                  </h3>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  CCR lines produce hot-rolled ETP and FRHC copper rod from 5–40 tph, while UPCAST lines produce direct-cast oxygen-free copper rod on multiple strands.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  Both begin with controlled copper melting. Your finished rod, feedstock and production strategy determine the right forming route.
                </p>
              </div>

              {/* Workflow Scope Banner */}
              <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-slate-900 text-white p-6 md:p-8 shadow-xl border border-slate-800">
                <div className="text-center font-bold tracking-wider text-sm md:text-base text-primary uppercase mb-4">
                  COMPLETE PLANT-LEVEL SCOPE
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-center font-bold text-xs sm:text-sm md:text-base tracking-wide text-slate-200">
                  <span>MELTING &amp; REFINING</span>
                  <span className="text-primary">•</span>
                  <span>CASTING</span>
                  <span className="text-primary">•</span>
                  <span>ROLLING</span>
                  <span className="text-primary">•</span>
                  <span>COOLING</span>
                  <span className="text-primary">•</span>
                  <span>COILING</span>
                  <span className="text-primary">•</span>
                  <span>PLC / DCS AUTOMATION</span>
                </div>
              </div>

              {/* Baseline note */}
              <p className="mt-6 text-center text-xs md:text-sm text-slate-500 max-w-3xl mx-auto italic">
                Final capacity, rod grade, line speed, electrical load, water circuit and civil requirements are established against approved project data and site conditions.
              </p>
            </div>
          </section>

            {/* SPEC / TRUST TILES */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
              {[
                {
                  title: "35+ Years",
                  subtitle: "Industrial Furnace Manufacturing",
                  icon: <Factory className="h-8 w-8 text-primary" />,
                },
                {
                  title: "ISO Certified",
                  subtitle: "9001:2015 & 14001:2015",
                  icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Custom Built",
                  subtitle: "Engineered Per Production Line",
                  icon: <Settings className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Pan India",
                  subtitle: "Installation & Service Support",
                  icon: <Wrench className="h-8 w-8 text-primary" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-card p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      {item.icon}
                    </div>
          {/* SECTION 3 — PAIN POINTS / PROCESS STUDY */}
          <section className="py-20 bg-slate-900 text-white relative overflow-hidden w-full">
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                  ARE YOU CHOOSING THE ROD LINE BEFORE DEFINING THE PROCESS?
                </h2>
              </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold leading-snug text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                  {
                    title: "THE WRONG ROUTE FOR THE PRODUCT",
                    desc: "CCR and UPCAST are not interchangeable. Selecting the forming route before fixing rod grade, feedstock and output can leave you with a line that cannot deliver the product your customers require.",
                  },
                  {
                    title: "METALLURGY LEFT TO CHANCE",
                    desc: "Oxygen content, surface condition, conductivity and drawability begin with melting, refining and casting control. Stable bath chemistry, temperature and metal level must be designed into the process.",
                  },
                  {
                    title: "EQUIPMENT SUPPLIED. SYSTEM NOT INTEGRATED.",
                    desc: "A furnace, caster, mill, cooling circuit and controls cannot operate as isolated packages. Interfaces, synchronisation, utilities and interlocks need one accountable engineering partner.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-2xl border border-slate-800 bg-slate-800/90 shadow-xl transition-all hover:border-primary/40 flex flex-col justify-between"
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="h-1 w-16 rounded-full bg-primary" />
                      <h3 className="text-lg md:text-xl font-bold leading-snug text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-slate-300">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

                      <p className="text-sm leading-relaxed text-white/70">
                        {item.subtitle}
                      </p>
          {/* SECTION 4 — CCR OR UPCAST? ROUTE COMPARISON */}
          <section className="py-20 bg-white w-full border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
                <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wider text-primary uppercase">
                  CCR OR UPCAST?
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  CHOOSE THE ROUTE AROUND YOUR PRODUCT STRATEGY.
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* CCR CARD */}
                <div className="rounded-3xl border-2 border-slate-200 bg-slate-50 p-7 md:p-9 shadow-md flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        CONTINUOUS CASTING &amp; ROLLING
                      </h3>
                      <Badge className="bg-primary text-white font-bold px-3 py-1">
                        CCR
                      </Badge>
                    </div>

                    <div className="space-y-4 text-sm md:text-base">
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          PRIMARY OUTPUT
                        </span>
                        <span className="font-semibold text-slate-900">
                          Hot-rolled copper rod
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          TYPICAL FEED
                        </span>
                        <span className="font-semibold text-slate-900">
                          Copper cathode for ETP; prepared scrap or cathode for FRHC
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          FORMING ROUTE
                        </span>
                        <span className="font-semibold text-slate-900">
                          Cast bar → Hot rolling → Cooling → Coiling
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          REFERENCE RANGE
                        </span>
                        <span className="font-semibold text-slate-900">
                          5–40 tph | 8–23 mm rod
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          BEST SUITED FOR
                        </span>
                        <span className="font-semibold text-slate-900">
                          High-volume wire-rod production and integrated cable plants
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          KEY METALLURGY
                        </span>
                        <span className="font-semibold text-slate-900">
                          ETP / FRHC chemistry, oxygen and surface control
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 mt-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                      CHOOSE CCR WHEN:
                    </span>
                    <p className="text-sm md:text-base font-semibold text-slate-800">
                      High line output is the priority and ETP or FRHC rod will be rolled inline for large wire and cable demand.
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>

          {/* RIGHT FORM */}
          <div
            className="lg:sticky lg:top-32"
            id="top-form-desktop"
          >
            <LeadForm            />
          </div>
        </div>
      </div>
    </section>
       {/* V2 changes SECTION start*/}
        
         
{/* SECTION 1 — PAIN POINTS */}
<section className="relative overflow-hidden py-24 w-full">
  {/* Background Image */}
<div className="absolute inset-0">
  <Image
    src={Product_1}
    alt="Industrial aluminium furnace problems"
    fill
    className="object-cover"
  />
</div>
                {/* UPCAST CARD */}
                <div className="rounded-3xl border-2 border-slate-200 bg-slate-50 p-7 md:p-9 shadow-md flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        UPWARD CONTINUOUS CASTING
                      </h3>
                      <Badge className="bg-slate-900 text-white font-bold px-3 py-1">
                        UPCAST
                      </Badge>
                    </div>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/65" />
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="space-y-4 text-sm md:text-base">
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          PRIMARY OUTPUT
                        </span>
                        <span className="font-semibold text-slate-900">
                          Direct-cast oxygen-free copper rod
                        </span>
                      </div>

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      The Real Cost of Getting It Wrong
    </div> */}
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          TYPICAL FEED
                        </span>
                        <span className="font-semibold text-slate-900">
                          Clean high-purity copper cathode; selected clean scrap by process design
                        </span>
                      </div>

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Is Your Current Aluminium Furnace Causing These Costly Problems?
    </h2>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          FORMING ROUTE
                        </span>
                        <span className="font-semibold text-slate-900">
                          Molten copper → Water-cooled crystallizer → Upward withdrawal → Coiling
                        </span>
                      </div>

    {/* Cards */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
      {[
        {
          title: "Metal Contamination & Oxidation",
          desc: "Gas-fired furnaces without proper atmosphere control cause oxidation, discolouration, and surface contamination in aluminium products — leading to rejection, rework, and loss of high-value material.",
        },
        {
          title: "Non-Uniform Heat = Inconsistent Strength",
          desc: "Uneven temperature distribution across the aluminium load causes variation in hardness and strength after ageing or annealing — creating quality failures that only show up during final testing.",
        },
        {
          title: "No Process Records — No Quality Compliance",
          desc: "Without PLC data logging, you cannot prove cycle temperatures, times, or repeatability to OEM customers, quality auditors, or export buyers — creating a major compliance gap in your operations.",
        },
        {
          title: "Air Pollution & Regulatory Violations",
          desc: "Rotary furnaces for aluminium recycling generate dust 8,000–15,000 mg/Nm³ with NOx and SO traces. Without proper APCD systems, you face factory closure risk, fines, and worker health hazards.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          REFERENCE RANGE
                        </span>
                        <span className="font-semibold text-slate-900">
                          3,000 TPA | 8 strands | 8–20 mm rod
                        </span>
                      </div>

            <h3 className="text-xl font-bold leading-snug text-white">
              {item.title}
            </h3>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          BEST SUITED FOR
                        </span>
                        <span className="font-semibold text-slate-900">
                          Flexible oxygen-free rod production and compact modular layouts
                        </span>
                      </div>

            <p className="leading-relaxed text-white/70 italics text-lg italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>       
        
{/* SECTION 2 — PRODUCTS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto px-4 max-w-7xl">
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          KEY METALLURGY
                        </span>
                        <span className="font-semibold text-slate-900">
                          Oxidation protection, stable melt and crystallizer control
                        </span>
                      </div>
                    </div>
                  </div>

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Industrial Aluminium Furnaces Built for Every Critical Process
    </h2>
                  <div className="rounded-xl border border-slate-300 bg-slate-100 p-4 mt-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      CHOOSE UPCAST WHEN:
                    </span>
                    <p className="text-sm md:text-base font-semibold text-slate-800">
                      Oxygen-free rod is the target, multiple direct-cast strands are preferred and compact expansion matters.
                    </p>
                  </div>
                </div>
              </div>

    {/* PRODUCT GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {/* Action Button */}
              <div className="mt-12 flex justify-center">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded-xl text-sm md:text-base shadow-lg"
                  onClick={scrollToLeadForm}
                >
                  DISCUSS YOUR FORMING ROUTE →
                </Button>
              </div>
            </div>
          </section>

      {[
      {
        number: "01",
        title: "Rotary Aluminum Melting Furnace",
        subtitle: "Efficient Scrap Melting & Uniform Heat Distribution",
        desc: "Dual-fuel burners — Oil & Gas compatible. Rotary action ensures uniform heat distribution with high thermal efficiency and low emissions compliant with environmental standards.",
      },
      {
        number: "02",
        title: "Stationary Type Aluminium Melting Furnace",
        subtitle: "Heavy-Duty Continuous Production Furnace",
        desc: "Fixed design for stable high-volume operations. Available from 500 kg to 30+ Tons with multiple discharge configurations and low maintenance requirements.",
      },
      {
        number: "03",
        title: "Tilting Type Melting Furnace",
        subtitle: "Controlled Hydraulic Pouring System",
        desc: "Hydraulic tilting enables precise pouring with 6000 kg bath capacity and 1500 kg/hr melting rate. LPG fired with operating temperatures up to 1000°C.",
      },
      {
        number: "04",
        title: "Aluminium Melting / Holding Furnace",
        subtitle: "Integrated Continuous Production System",
        desc: "Integrated melting + holding furnace for continuous operations. Supports LDO, FO, Producer Gas, and Natural Gas with optimised temperature management.",
      },
      {
        number: "05",
        title: "Tower Type Aluminium Melting Furnace",
        subtitle: "Vertical High-Efficiency Melting Design",
        desc: "Vertical configuration minimises floor space while enabling faster melting through vertical heat flow. Reduced oxidation lowers operating cost significantly.",
      },
      {
        number: "06",
        title: "Crucible Type Holding Furnace",
        subtitle: "Precision Electric Temperature Control",
        desc: "Electric heating system with ±5°C precision control. Minimises dross formation and integrates seamlessly with die casting machines.",
      },
          {/* SECTION 5 — SIX ADVANTAGES */}
          <section className="py-20 bg-slate-900 text-white w-full">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                  SIX ADVANTAGES THAT SET CONTINENTAL COPPER LINES APART
                </h2>
              </div>

      {
        number: "07",
        title: "Skelner Furnace",
        subtitle: "Continuous Die Casting & Holding Operations",
        desc: "Luminous flame burners + electric heaters in holding furnace. 50°C holding buffer eliminates hard oxidation. Available from 300 kg to 30 Tons.",
      },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-700 shadow-xl"
        >
          <CardContent className="p-8 space-y-6">

            {/* PRODUCT NUMBER */}
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              Product {item.number}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[
                  {
                    icon: <Layers className="h-6 w-6 text-primary" />,
                    title: "SINGLE-POINT INTEGRATION",
                    desc: "Furnace, casting, rolling, coiling, utilities and automation engineered as one coordinated system, with clear accountability for every interface.",
                  },
                  {
                    icon: <RefreshCw className="h-6 w-6 text-primary" />,
                    title: "BOTH ROUTES UNDER ONE ROOF",
                    desc: "CCR for ETP & FRHC. UPCAST for oxygen-free rod. The process route is selected around your product strategy.",
                  },
                  {
                    icon: <Flame className="h-6 w-6 text-primary" />,
                    title: "METALLURGY DESIGNED IN",
                    desc: "Bath temperature, chemistry, oxygen and metal level are stabilised before casting, with oxidation and reduction stages for FRHC routes.",
                  },
                  {
                    icon: <Cpu className="h-6 w-6 text-primary" />,
                    title: "CENTRALISED AUTOMATION",
                    desc: "PLC / DCS and SCADA architecture with line synchronisation, trends, alarms, interlocks, data logging and remote-ready diagnostics.",
                  },
                  {
                    icon: <Sliders className="h-6 w-6 text-primary" />,
                    title: "CUSTOM ENGINEERING",
                    desc: "Plant layout, furnace duty, line configuration and controls developed around your feed, output, utilities and site constraints.",
                  },
                  {
                    icon: <Wrench className="h-6 w-6 text-primary" />,
                    title: "LIFECYCLE SUPPORT",
                    desc: "From installation and commissioning to operator training, documentation, spares and long-term performance support.",
                  },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-800/80 shadow-lg hover:border-primary/50 transition-all flex flex-col justify-between"
                  >
                    <CardContent className="p-7 space-y-4">
                      <div className="rounded-xl bg-primary/10 p-3 w-fit">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-slate-300">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

            {/* TITLE */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold leading-tight text-primary">
                {item.title}
              </h3>
          {/* SECTION 6 — PROCESS BREAKDOWN (CCR & UPCAST) */}
          <section className="py-20 bg-slate-50 w-full border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
              {/* Part A: CCR */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="text-center space-y-3 mb-12">
                  <Badge className="bg-primary text-white font-bold px-4 py-1 text-xs md:text-sm uppercase">
                    Continuous Casting &amp; Rolling
                  </Badge>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    CCR — FROM CATHODE TO COILED ROD
                  </h2>
                </div>

              <p className="text-secondary font-semibold text-lg">
                {item.subtitle}
              </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "01 — CHARGING & MELTING",
                      desc: "Rail-guided or bucket-and-winch charging feeds the shaft or reverberatory furnace. Gas-fired melting is configured for the selected throughput.",
                    },
                    {
                      step: "02 — HOLDING & REFINING",
                      desc: "Bath temperature, chemistry and oxygen are stabilised before casting, with oxidation and reduction stages on FRHC routes.",
                    },
                    {
                      step: "03 — CONTINUOUS BAR CASTING",
                      desc: "A refractory-lined launder and tundish feed a twin-belt or wheel caster, producing continuous trapezoidal cast bar.",
                    },
                    {
                      step: "04 — BAR PREPARATION & HOT ROLLING",
                      desc: "Straightening, edge notching and high-pressure descaling prepare the bar for the rolling train, with caster and mill synchronised by closed-loop drive control.",
                    },
                    {
                      step: "05 — COOLING, WAXING & COILING",
                      desc: "Closed-loop water quenching, non-acidic surface treatment and wax application are followed by concentric or orbital coiling, hydraulic compaction and strapping.",
                    },
                  ].map((stepItem, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                    >
                      <div className="md:w-1/3 shrink-0">
                        <span className="text-base md:text-lg font-black text-primary tracking-wide">
                          {stepItem.step}
                        </span>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part B: UPCAST */}
              <div className="max-w-5xl mx-auto pt-8 border-t border-slate-200">
                <div className="text-center space-y-3 mb-12">
                  <Badge className="bg-slate-900 text-white font-bold px-4 py-1 text-xs md:text-sm uppercase">
                    Upward Continuous Casting
                  </Badge>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    UPCAST — PROTECTED UPWARD CASTING
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 font-medium italic">
                    Reference configuration: two melting furnaces and one holding furnace.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      num: "I. CATHODE FEEDING",
                      desc: "Whole cathode charged continuously using an electric hoist.",
                    },
                    {
                      num: "II. INDUCTION MELTING",
                      desc: "Controlled melting with charcoal or natural graphite flake to protect copper against oxidation.",
                    },
                    {
                      num: "III. PROTECTED TRANSFER",
                      desc: "Molten copper moves to the holding furnace under controlled bath protection.",
                    },
                    {
                      num: "IV. HOLDING FURNACE",
                      desc: "Bath maintained around 1,150°C ± 10°C for stable casting conditions.",
                    },
                    {
                      num: "V. WATER-COOLED CRYSTALLIZERS",
                      desc: "Each strand solidifies independently, allowing individual crystallizer control and maintenance.",
                    },
                    {
                      num: "VI. SERVO WITHDRAWAL",
                      desc: "AC servo traction with high-frequency interval motion and automatic bath-level tracking.",
                    },
                    {
                      num: "VII. TENSION CONTROL",
                      desc: "Guide rollers, displacement sensors and swing links regulate strand separation and take-up speed.",
                    },
                    {
                      num: "VIII. AUTOMATIC COILING",
                      desc: "Automatic take-up adjustment builds coils to the reference envelope of 800 mm ID × 1,500 mm OD × 800 mm height.",
                    },
                  ].map((upItem, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2"
                    >
                      <h4 className="text-base font-bold text-slate-900">
                        {upItem.num}
                      </h4>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {upItem.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

            {/* DESCRIPTION */}
            <p className="text-white leading-relaxed italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
          {/* SECTION 7 — REFERENCE PARAMETERS */}
          <section className="py-20 bg-slate-900 text-white w-full">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
                <div className="inline-flex rounded-full bg-primary/20 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wider text-primary uppercase">
                  TECHNICAL SPECIFICATIONS
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                  REFERENCE PARAMETERS
                </h2>
              </div>

    {/* BOTTOM CTA */}
    <div className="mt-16 flex justify-center">
      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 rounded-xl text-base"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* CCR CAPACITY */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      CCR CAPACITY
                    </h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="space-y-1">
                      <div className="font-bold text-white text-base">SMALL</div>
                      <div className="text-slate-200 font-semibold">5–10 tph | 25,000–58,000 TPA</div>
                      <div className="text-slate-400 text-xs">Specialty and secondary producers</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-white text-base">MEDIUM</div>
                      <div className="text-slate-200 font-semibold">12.5–20 tph | 61,000–115,000 TPA</div>
                      <div className="text-slate-400 text-xs">Mid-sized cable and wire plants</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-white text-base">LARGE</div>
                      <div className="text-slate-200 font-semibold">25–40 tph | 125,000–250,000 TPA</div>
                      <div className="text-slate-400 text-xs">Integrated copper and cable facilities</div>
                    </div>
                  </div>
                </div>

{/* SECTION 3 — KEY FEATURES */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
                {/* CCR MELTING & CASTING */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      CCR MELTING &amp; CASTING
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>UP TO 35 MT/HR shaft furnace melting capacity</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>UP TO 1,250°C operating temperature</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Tilting or refining holding configuration</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Approx. 6,300 mm² trapezoidal cast bar</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Automatic metal-level control through tundish sensor and stopper-pin regulation</span>
                    </li>
                  </ul>
                </div>

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      Why These Furnaces Perform Better
    </div> */}
                {/* CCR ROLLING */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      CCR ROLLING
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>12 stands, project-specific</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>2-roll roughing + 3-roll finishing</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>8–23 mm rod as specified</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>ASTM B49 dimensional and quality targets</span>
                    </li>
                  </ul>
                </div>

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      6 Engineering Features That Deliver Superior Aluminium Processing Results
    </h2>
                {/* ETP ROD — REFERENCE */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      ETP ROD — REFERENCE
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper + silver &gt;99.95%</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Oxygen 150–250 ppm</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Conductivity 101.0–102.0% IACS</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Elongation A200 42–46%</span>
                    </li>
                  </ul>
                </div>

    {/* FEATURES GRID */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: Zap,
          title: "Electric Heating — Zero Contamination",
          desc: "Electric heating eliminates combustion gases from the chamber — no oxidation, no carbon deposition, no sulphur contamination. Critical for high-purity aluminium grades used in cable and automotive sectors.",
        },
        {
          icon: Wind,
          title: "Forced Air Circulation System",
          desc: "Internal forced air fans maintain uniform temperature distribution throughout the chamber — eliminating hotspots and cold zones. Every batch exits with consistent properties from edge to centre.",
        },
        {
          icon: BarChart3,
          title: "PLC/HMI Control + Data Logging",
          desc: "Full PLC/HMI automation with thermocouple-based temperature control and complete cycle data logging. Generate quality reports for OEM audits, export certifications, and process traceability requirements.",
        },
        {
          icon: Snowflake,
          title: "Controlled Cooling Options",
          desc: "Ageing furnace includes forced air cooling and optional water quenching — both critical for achieving target mechanical properties. Cooling rate directly determines final hardness of precipitation-hardened alloys.",
        },
        {
          icon: Wrench,
          title: "Custom Capacity — Every Plant Size",
          desc: "From hundreds of kilograms to several tonnes per batch — Continental builds every furnace to your exact production volume, floor layout, and load dimensions. No compromises on fit.",
        },
        {
          icon: ShieldCheck,
          title: "ISO 9001 Certified Manufacturing",
          desc: "Every furnace manufactured under ISO 9001:2015 quality system. Consistent build quality, documented processes, and full post-installation commissioning and AMC support across India.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
            </div>
                {/* FRHC ROD — REFERENCE */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      FRHC ROD — REFERENCE
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper + silver &gt;99.90%</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Oxygen 150–250 ppm</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Conductivity 100.5–101.3% IACS</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Elongation A200 38–43%</span>
                    </li>
                  </ul>
                </div>

            <h3 className="text-2xl font-bold leading-snug text-white">
              {item.title}
            </h3>
                {/* UPCAST WGA/8-20 — REFERENCE */}
                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 space-y-5">
                  <div className="border-b border-slate-700 pb-3">
                    <h3 className="text-lg font-bold text-primary">
                      UPCAST WGA/8-20 — REFERENCE
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>3,000 TPA annual capacity</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>8 casting strands</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>8–20 mm rod</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Melting rate up to 850 kg/hr</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-primary mt-1">•</span>
                      <span>Coil weight up to 2.5 tonnes</span>
                    </li>
                  </ul>
                </div>
              </div>

            <p className="leading-relaxed text-white/70 italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
        
        
{/* SECTION 7 — INDUSTRIES SERVED */}
<section className="relative overflow-hidden bg-white py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
              {/* Disclaimer */}
              <div className="mt-14 max-w-4xl mx-auto text-center border-t border-slate-800 pt-8">
                <p className="text-xs md:text-sm text-slate-400 tracking-wide uppercase font-medium">
                  REFERENCE VALUES ARE INDICATIVE AND NOT COMMERCIAL OR PERFORMANCE GUARANTEES. FINAL GUARANTEED VALUES FOLLOW AN APPROVED PROCESS AND PRODUCT DATA SHEET.
                </p>
              </div>
            </div>
          </section>

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/20 px-5 py-2 text-sm font-semibold text-primary">
      Industries We Serve
    </div> */}
          {/* SECTION 8 — WHY COPPER ROD PRODUCERS CHOOSE CONTINENTAL */}
          <section className="py-20 bg-white w-full border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  WHY COPPER ROD PRODUCERS CHOOSE CONTINENTAL
                </h2>
              </div>

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Built for Your Industry
    </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                  {
                    title: "38+ YEARS OF THERMAL ENGINEERING",
                    desc: "Engineering copper processing systems since 1987, supported by in-house fabrication capability.",
                  },
                  {
                    title: "500+ INSTALLATIONS",
                    desc: "An established installed base across furnace and metal-processing projects, backed by ISO 9001:2015 & ISO 14001:2015 certified systems.",
                  },
                  {
                    title: "FOUR-STAGE ENGAGEMENT",
                    subtitle: "Process study → Custom engineering → Execution → Commissioning",
                    desc: "One accountable partner from concept through stable production.",
                  },
                  {
                    title: "SIX-STAGE PROJECT DELIVERY",
                    subtitle: "Feasibility → Engineering → Manufacture → Installation → Commissioning → Lifecycle support",
                    desc: "Including documentation, operator training and long-term spares.",
                  },
                  {
                    title: "ENVIRONMENTAL ENGINEERING BUILT IN",
                    desc: "Closed-loop cooling, efficient combustion, controlled stack design and project-specific air-pollution-control provisions.",
                  },
                  {
                    title: "INDIAN ENGINEERING. INTERNATIONAL ORIENTATION.",
                    desc: "Faridabad-based engineering and service presence with an international project outlook, providing accessible technical support.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="h-1 w-12 rounded-full bg-primary" />
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <div className="text-xs md:text-sm font-semibold text-primary">
                          {item.subtitle}
                        </div>
                      )}
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

    {/* GRID */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
  {[
    {
      icon: Cable,
      title: "Cable Manufacturing",
      desc: "Aluminium conductor annealing for ACSR, AAC, and other cable grades",
    },
    {
      icon: Car,
      title: "Automotive & Electrical",
      desc: "T6/T5 heat treatment for die castings, connectors, electrical components",
    },
    {
      icon: Drill,
      title: "Non-Ferrous Wire",
      desc: "Aluminium wire and rod coil annealing for downstream processing",
    },
    {
      icon: Recycle,
      title: "Aluminium Recycling",
      desc: "Homogenising recycled aluminium + APCD for rotary furnace compliance",
    },
    {
      icon: Factory,
      title: "Metal Processing",
      desc: "Stress relieving before surface treatment, plating, and coating",
    },
    {
      icon: Plane,
      title: "Aerospace & Defence",
      desc: "Controlled atmosphere solution treatment for aerospace alloys",
    },
    {
      icon: Battery,
      title: "Battery Recycling",
      desc: "Rotary furnace + APCD for lead battery recycling operations",
    },
    {
      icon: Building2,
      title: "Heat Treatment Units",
      desc: "Batch ageing and annealing for contract heat treatment shops",
    },
  ].map((item, i) => (
    <Card
      key={i}
      className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
    >
      <CardContent className="p-8 space-y-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
        </div>
          {/* SECTION 9 — BUILT FOR COPPER PRODUCERS */}
          <section className="py-20 bg-slate-50 w-full border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  BUILT FOR COPPER PRODUCERS
                </h2>
              </div>

        <h3 className="text-2xl font-bold leading-snug text-white">
          {item.title}
        </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[
                  {
                    icon: <Cable className="h-6 w-6 text-primary" />,
                    title: "WIRE & CABLE",
                    desc: "High-volume ETP and FRHC rod for integrated wire and cable plants.",
                  },
                  {
                    icon: <Recycle className="h-6 w-6 text-primary" />,
                    title: "COPPER RECYCLING",
                    desc: "FRHC routes configured around prepared copper scrap and refining control.",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-primary" />,
                    title: "ELECTRICAL CONDUCTORS",
                    desc: "Rod engineered to required conductivity and drawability targets.",
                  },
                  {
                    icon: <Activity className="h-6 w-6 text-primary" />,
                    title: "TRANSFORMER & MAGNET WIRE",
                    desc: "Oxygen-free and high-conductivity rod for winding and magnet-wire applications.",
                  },
                  {
                    icon: <Building2 className="h-6 w-6 text-primary" />,
                    title: "INTEGRATED METAL PLANTS",
                    desc: "Furnace, casting, rolling and finishing supplied as one coordinated system.",
                  },
                  {
                    icon: <Sliders className="h-6 w-6 text-primary" />,
                    title: "SPECIALTY & SECONDARY PRODUCERS",
                    desc: "Compact CCR capacity classes and modular UPCAST strands for flexible production.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-3"
                  >
                    <div className="rounded-xl bg-primary/10 p-3 w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        <p className="leading-relaxed text-white/90 italic">
          {item.desc}
        </p>
      </CardContent>
    </Card>
  ))}
</div>
  </div>
</section>       
        
{/*         {/* V2 changes SECTION */}
          {/* SECTION 10 — FINAL CTA SECTION */}
          <section
            id="bottom-form"
            className="py-20 bg-slate-900 text-white relative overflow-hidden w-full"
          >
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 items-start">
                {/* LEFT CONTENT */}
                <div className="space-y-8 pt-4">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    TELL US YOUR FEED, YOUR GRADE AND YOUR OUTPUT
                  </h2>

{/* FINAL CTA */}
<section className="py-24 bg-slate-200 relative overflow-hidden w-full">
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    
    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div className="space-y-9 pt-6">
        {/* <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div> */}
                  <div className="space-y-3">
                    <p className="text-sm md:text-base text-slate-300 font-medium">
                      Our engineering team will develop the process basis for your copper rod project, including:
                    </p>
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm font-bold text-primary tracking-wide">
                      ROUTE SELECTION • FURNACE DUTY • LINE CONFIGURATION • PLANT LAYOUT • UTILITY ENVELOPE • CONTROLS ARCHITECTURE
                    </div>
                  </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          Get Your Aluminium Furnace Quote Today.
        </h2>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    Send us your copper cathode or scrap feed, target rod grade, annual output, product diameter and site utility conditions.
                  </p>

        <p className="text-lg text-black max-w-2xl leading-relaxed">
          Tell us your capacity, product, and process.
          Our furnace engineers will prepare a complete technical proposal —
          specifications, drawings, and indicative pricing.
          <br />
          <br />
          <br />
          <span className="font-bold text-xl md:text-2xl text-primary">
          Within 24 hours. Zero obligation.
          </span>
        </p>
      </div>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <p className="text-lg md:text-xl font-bold text-white uppercase">
                      WE’LL TELL YOU WHICH ROUTE FITS AND WHAT THE LINE NEEDS TO LOOK LIKE.
                    </p>
                  </div>

      {/* RIGHT FORM */}
      <div className="w-full">
        <LeadForm />
      </div>
    </div>
  </div>
</section>
                  <p className="text-xs md:text-sm font-bold tracking-wider text-slate-400 uppercase">
                    NO OBLIGATION. STRAIGHT ANSWERS FROM ENGINEERS.
                  </p>
                </div>

      </main>
                {/* RIGHT FORM */}
                <div className="w-full" id="top-form-mobile">
                  <LeadForm />
                </div>
              </div>
            </div>
          </section>
        </main>

      {/* FOOTER */}
      <footer className="bg-background text-white pt-8 pb-28 lg:py-8 w-full border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.
          </p>
        </div>
      </footer>
        {/* FOOTER */}
        <footer className="bg-slate-950 text-white py-8 w-full border-t border-slate-800">
          <div className="container mx-auto px-4 max-w-7xl text-center text-xs md:text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.
            </p>
          </div>
        </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
        <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            REQUEST FREE QUOTE NOW
          </Button>
        {/* MOBILE STICKY CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-white border-t border-slate-200 shadow-2xl">
          <div className="w-full max-w-7xl mx-auto px-2">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-sm"
              onClick={scrollToLeadForm}
            >
              REQUEST TECHNICAL PROPOSAL →
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}