"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Anchor, ArrowLeft, ChevronDown, Shield, Leaf, FlaskConical, AlertTriangle, CigaretteOff, StopCircle, Lock, Gem, HeartPulse, CheckCircle2 } from "lucide-react"

const policies = [
  {
    id: "quality",
    icon: CheckCircle2,
    title: "Quality Policy",
    color: "from-primary to-accent",
    badge: "ISO 9001:2015",
    summary: "Providing quality marine & diving services by satisfying customer, statutory, and regulatory requirements.",
    content: [
      {
        type: "paragraph",
        text: "Mutawa Marine Works LLC. is engaged in the business of providing Marine & Diving services to the offshore oil & gas industry. The Company recognises its responsibilities to provide quality services by satisfying applicable requirements, such as customer, statutory and regulatory requirements.",
      },
      {
        type: "heading",
        text: "Management Commitments",
      },
      {
        type: "list",
        items: [
          "Communicate the policy to all concerned.",
          "Ensure that concerned personnel understand the policy.",
          "Comply with the requirements of its ISO 9001:2015 based Quality Management System.",
          "Continually improve the Quality Management System by reviewing Quality Policy periodically for suitability.",
          "Reviewing Quality Performance periodically.",
          "Establishing and reviewing quality objectives.",
        ],
      },
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety Policy",
    color: "from-red-500 to-orange-500",
    badge: "Core Policy",
    summary: "The health and welfare of our people are the most important considerations in any undertaking.",
    content: [
      {
        type: "heading",
        text: "AL MUTAWA MARINE SAFETY POLICY STATEMENT",
      },
      {
        type: "paragraph",
        text: "The Al Mutawa Marine safety policy is that the health and welfare of its people are the most important considerations in any undertaking. Additionally, the protection of company assets and the environment are also primary concerns. No job is so important that we cannot take the time to do it properly, and therefore complete it safely.",
      },
      {
        type: "paragraph",
        text: "It is, therefore, Al Mutawa Marine's policy to provide a place of employment which is free from recognized hazards, to provide accident prevention programs and systems, and to comply with applicable national and international regulations.",
      },
      {
        type: "paragraph",
        text: "Understanding that safety, accident prevention and environmental protection are operational responsibilities, this policy requires all employees at all levels to be responsible for the prevention of job-related injuries and illnesses, property damage and environmental accidents through the use of their good judgment and the diligent and consistent application of company guidelines and procedures.",
      },
      {
        type: "paragraph",
        text: "Employee safety performance will always be a major consideration in decisions affecting promotions, salaries and continued employment. The company's collective safety performance will be the measure of success of this policy.",
      },
      {
        type: "heading",
        text: "Summary of Safety and Environmental Policies",
      },
      {
        type: "list",
        items: [
          "People are the most important consideration in any undertaking.",
          "Provide a safe, hazard free working environment.",
          "Protect employee health and company property.",
          "Prevent pollution by adherence to applicable laws and standards.",
          "Promote safe and efficient operations.",
        ],
      },
    ],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Policy",
    color: "from-emerald-500 to-teal-500",
    badge: "ISO 14001:2015",
    summary: "Conducting all operations to minimize environmental impact and prevent pollution.",
    content: [
      {
        type: "heading",
        text: "AL MUTAWA MARINE ENVIRONMENTAL POLICY STATEMENT",
      },
      {
        type: "paragraph",
        text: "It is the intention of Al Mutawa Marine to conduct all of its operations in such a manner as to minimize any actions that will endanger or harm the environment. Al Mutawa Marine is aware of, and is sensitive to, the ecological balances necessary to be maintained between mankind's activities and nature's beauty and abundance.",
      },
      {
        type: "paragraph",
        text: "Our policy is one of responsible environmental stewardship; our objective is to prevent pollution in our operations. The company and its employees will follow all applicable regulatory and compliance standards to prevent pollution or environmental damage to the lands, waters and air in which they work.",
      },
      {
        type: "paragraph",
        text: "Furthermore, vendors, subcontractors and others who visit or work at company locations and facilities will be held accountable for ensuring that environmentally sound practices, and applicable laws and procedures are followed. Environmental pollution hazards or violations of this policy should be brought to the immediate attention of management.",
      },
    ],
  },
  {
    id: "contraband",
    icon: FlaskConical,
    title: "Contraband, Alcohol & Drug Policy",
    color: "from-purple-500 to-indigo-500",
    badge: "Zero Tolerance",
    summary: "Maintaining a safe, hazard-free workplace free from contraband, alcohol, and drugs.",
    content: [
      {
        type: "paragraph",
        text: "It is the policy of Al Mutawa Marine to provide a safe, hazard free, working environment to protect employee health and company property and to promote safe and efficient operations.",
      },
      {
        type: "paragraph",
        text: "The manufacturer, use, possession (including trace amounts in or on the person), concealment, transportation, promotion, distribution or sale of contraband on Al Mutawa Marine premises or while in transit to or from the company premises by employees is strictly prohibited.",
      },
      {
        type: "paragraph",
        text: "The use, possession or consumption of alcohol, drugs or other mood-altering substances on Al Mutawa Marine worksites by either Al Mutawa Marine employee or other personnel either utilizing or entering onto Al Mutawa Marine worksites is strictly prohibited.",
      },
      {
        type: "paragraph",
        text: "The possession of firearms, weapons, explosives and ammunition on Al Mutawa Marine premises by either Al Mutawa Marine employee or other personnel either utilizing or entering onto Al Mutawa Marine premises is strictly prohibited.",
      },
      {
        type: "paragraph",
        text: "Al Mutawa Marine has a policy of routine, random and \"with cause\" drug and alcohol testing.",
      },
    ],
  },
  {
    id: "smoking",
    icon: CigaretteOff,
    title: "Smoking Policy",
    color: "from-slate-500 to-slate-700",
    badge: "Workplace Policy",
    summary: "All Al Mutawa Marine worksites are designated smoke-free other than in specified areas.",
    content: [
      {
        type: "paragraph",
        text: "Al Mutawa Marine's objective is to provide a tobacco-free workplace for all personnel. Accordingly, all Al Mutawa Marine worksites are designated smoke-free other than in specified smoking areas.",
      },
      {
        type: "paragraph",
        text: "Smoking in exterior spaces is allowed, weather conditions permitting, with the locations and times to be at the discretion of the Master or other Officer, except under the following conditions:",
      },
      {
        type: "list",
        items: [
          "Receiving or transferring fuel, oil or other volatile liquids.",
          "Handling any type of flammable materials.",
          "During emergencies or emergency drills / exercises.",
          "When moored or mooring alongside docks, piers, or where smoking is prohibited.",
          "While in the immediate vicinity of rigs, platforms, FPSOs or any other offshore installation.",
          "In obvious fire or hazardous operations.",
        ],
      },
      {
        type: "paragraph",
        text: "The Master, as the Officer in-charge of the vessel and Al Mutawa Marine's representative, is responsible for implementing and upholding this policy, though other Officers share this responsibility.",
      },
    ],
  },
  {
    id: "stopwork",
    icon: StopCircle,
    title: "Stop Work Obligation",
    color: "from-amber-500 to-yellow-500",
    badge: "SWO",
    summary: "Every employee has the right and duty to stop any job that is unsafe or feels unsafe.",
    content: [
      {
        type: "paragraph",
        text: "Stop Work Obligation (SWO) is the right and duty of each employee to stop a job that is unsafe or that is felt to be unsafe. Any employee can shut down or suspend any job if it is thought that an unsafe working condition exists at any time or at any place.",
      },
      {
        type: "paragraph",
        text: "If you or any employee is in doubt whether any health, safety or environmental aspect of any operation is proceeding properly, it is your duty to stop the operation immediately until the condition can be improved or the doubt is resolved.",
      },
      {
        type: "paragraph",
        text: "Stopping unsafe work prevents people from being injured and helps avoid accidents. Al Mutawa Marine will fully support any good faith use of the SWO.",
      },
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "Security Policy",
    color: "from-sky-500 to-blue-600",
    badge: "ISPS",
    summary: "Maintaining required security measures including ISPS compliance for all vessels.",
    content: [
      {
        type: "paragraph",
        text: "It is the policy of Al Mutawa Marine to provide a secure working environment by establishing and maintaining required security measures, including ISPS, where applicable. Each vessel has a dedicated Ship Security Plan (SSP).",
      },
      {
        type: "paragraph",
        text: "This Security Plan contains comprehensive measures and processes to promote security of Al Mutawa Marine assets and to describe recommended processes in response to a wide range of threats. The Ship Security Officer (SSO) and the designate SSO shall be familiar with each vessel's SSP.",
      },
      {
        type: "paragraph",
        text: "All crew members shall have sufficient knowledge of, and be familiar with, relevant provisions of the ISPS Code, including requirements imposed by different security levels and the ship's security Station Bill.",
      },
      {
        type: "paragraph",
        text: "The Master and Officers are responsible to ensure that no unauthorized visitors board an Al Mutawa Marine vessel.",
      },
    ],
  },
  {
    id: "jewellery",
    icon: Gem,
    title: "Jewellery Policy",
    color: "from-rose-400 to-pink-500",
    badge: "Safety Policy",
    summary: "Wearing of jewellery on the job is discouraged to prevent snagging and injury risk.",
    content: [
      {
        type: "paragraph",
        text: "The wearing of items of jewelry, such as rings, watchbands, earrings, piercing or neck chains whilst on the job is discouraged. Whenever a risk assessment identifies a potential for snagging, jewelry shall not be worn.",
      },
      {
        type: "paragraph",
        text: "In particular, jewelry shall not be worn when working around any moving machinery (or object). Where applicable, client jewelry policies shall be complied with.",
      },
    ],
  },
  {
    id: "osh",
    icon: HeartPulse,
    title: "OSH Policy",
    color: "from-teal-500 to-cyan-500",
    badge: "OSHAD",
    summary: "Committed to occupational safety & health for all employees and visitors in the workplace.",
    content: [
      {
        type: "paragraph",
        text: "Mutawa Marine Works LLC is engaged in the business of providing Marine & Diving services to the offshore oil & gas industry. The Company recognizes its responsibilities towards its employees and other workers (including temporary workers and contractor personnel), visitors, or any other person in the workplace that could be affected by its operations.",
      },
      {
        type: "heading",
        text: "Management Commitments",
      },
      {
        type: "list",
        items: [
          "Complying with applicable OSH codes, guidelines & standards specific to Occupational Safety & Health Abu Dhabi (OSHAD) requirements.",
          "Providing appropriate resources necessary for Establishing & Implementing an OSH Management System.",
          "Providing safe working environment and safe practices ashore & onboard ships.",
          "Preventing illness and human injury or loss of life at sea or ashore.",
          "Enhancement of employee health & wellbeing.",
          "Assessing all identifiable OSH risks ashore & onboard ships and establishing appropriate safeguards to minimize risks to ALARP levels.",
          "Holding all levels of Managers, Supervisors and Employees accountable for OSH performance.",
          "Empowering employees & other workers to intervene and stop any unsafe work.",
          "Empowering employees & other workers to report Safety Observations & Near-misses without fear of blame.",
          "Investigating incidents & accidents by focusing on corrective actions to prevent recurrence.",
          "Establishing, monitoring & reviewing OSH Objectives & Targets.",
          "Continuously improve the OSH Management System.",
        ],
      },
    ],
  },
  {
    id: "alert",
    icon: AlertTriangle,
    title: "HSE Alert Policy",
    color: "from-orange-500 to-red-500",
    badge: "HSE",
    summary: "Systematic reporting and communication of safety alerts across all operations.",
    content: [
      {
        type: "paragraph",
        text: "Al Mutawa Marine maintains a robust HSE alert system to ensure that safety-critical information is communicated promptly across all operations, vessels, and worksites.",
      },
      {
        type: "paragraph",
        text: "All near-misses, incidents, and potential hazards must be reported immediately through the established HSE alert channels. This enables the company to take corrective action swiftly and prevent recurrence across the fleet.",
      },
      {
        type: "list",
        items: [
          "Immediate reporting of all incidents, near-misses and unsafe conditions.",
          "Prompt investigation and root cause analysis.",
          "Fleet-wide communication of lessons learned.",
          "Regular HSE performance reviews and updates.",
          "Continuous improvement of safety management practices.",
        ],
      },
    ],
  },
]

function PolicyCard({ policy, index, isActive, onClick }: {
  policy: typeof policies[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const Icon = policy.icon
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`w-full text-left group rounded-2xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? "border-primary/40 shadow-lg shadow-primary/10 bg-card"
          : "border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
      }`}
    >
      {/* Accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${policy.color} transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">{policy.badge}</span>
              </div>
              <h3 className="font-semibold text-foreground leading-snug">{policy.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2">{policy.summary}</p>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : "group-hover:text-foreground"}`}
          />
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-border space-y-4">
                {policy.content.map((block, i) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {block.text}
                      </p>
                    )
                  }
                  if (block.type === "heading") {
                    return (
                      <h4 key={i} className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        {block.text}
                      </h4>
                    )
                  }
                  if (block.type === "list" && block.items) {
                    return (
                      <ul key={i} className="space-y-2">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${policy.color} flex-shrink-0 mt-1.5`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return null
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}

export default function PoliciesPage() {
  const [activePolicy, setActivePolicy] = useState<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const toggle = (id: string) => {
    setActivePolicy(prev => prev === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground leading-none">Al Mutawa</p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5">Marine Works L.L.C.</p>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div ref={topRef} className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 bg-primary/10 px-3 py-1.5 rounded-full">
              Company Policies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
              Our Commitment to{" "}
              <span className="text-gradient-ocean">Safety & Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Al Mutawa Marine Works LLC maintains rigorous standards across all operations. 
              Our policies reflect 45+ years of commitment to safety, environmental responsibility, 
              and the highest quality of service.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { value: `${policies.length}`, label: "Active Policies" },
              { value: "ISO 9001", label: "Quality Certified" },
              { value: "ISO 14001", label: "Environmental" },
              { value: "ISO 45001", label: "Safety Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="300" cy="200" r="180" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>

      {/* Policies accordion */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Policy Documents</h2>
              <p className="text-sm text-muted-foreground mt-1">Click any policy to expand and read the full document</p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
              {policies.length} policies
            </span>
          </div>

          <div className="space-y-4">
            {policies.map((policy, i) => (
              <PolicyCard
                key={policy.id}
                policy={policy}
                index={i}
                isActive={activePolicy === policy.id}
                onClick={() => toggle(policy.id)}
              />
            ))}
          </div>

          {/* Signed by */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl border border-border bg-card"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Authorised By</p>
                <p className="text-xl font-semibold text-foreground">Khaled Al Mutawa</p>
                <p className="text-sm text-muted-foreground mt-1">General Manager, Al Mutawa Marine Works LLC</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary px-5 py-3 rounded-xl">
                <Shield className="w-4 h-4 text-primary" />
                All policies are reviewed and updated periodically
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Al Mutawa Marine Works L.L.C. All rights reserved.
          </p>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Return to main site
          </Link>
        </div>
      </div>
    </div>
  )
}
