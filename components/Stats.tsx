import { Building2, Globe2, Award, Layers } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "5+",
    label: "Années d'expérience",
    desc: "Sur le terrain, au contact des entreprises",
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
    glow: "shadow-amber-400/10",
  },
  {
    icon: Globe2,
    value: "4",
    label: "Secteurs couverts",
    desc: "BTP · Industrie · Hôtellerie · Agroalimentaire",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    glow: "shadow-emerald-400/10",
  },
  {
    icon: Award,
    value: "3",
    label: "Référentiels ISO",
    desc: "ISO 9001 · ISO 14001 · ISO 45001",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    glow: "shadow-blue-400/10",
  },
  {
    icon: Layers,
    value: "8",
    label: "Modules de service",
    desc: "Solutions à la carte ou contrat global",
    color: "text-purple-400",
    bg: "bg-purple-400/8",
    border: "border-purple-400/20",
    glow: "shadow-purple-400/10",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`surface-card relative rounded-2xl border ${stat.border} p-6 text-center group hover:scale-[1.03] transition-all duration-300 shadow-lg ${stat.glow}`}
            >
              <div
                className={`icon-surface inline-flex items-center justify-center w-12 h-12 rounded-xl border ${stat.border} mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-slate-900 dark:text-white font-bold text-sm mb-1.5">{stat.label}</div>
              <div className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
