import { Shield, Award, Leaf, GraduationCap, Search, CheckSquare, ArrowRight } from "lucide-react";

const modules = [
  {
    id: "01",
    icon: Shield,
    title: "Sécurité & Santé au Travail",
    subtitle: "Module SST",
    color: "text-red-400",
    border: "border-red-400/20",
    ref: "ISO 45001",
    description:
      "Document Unique, PPSPS, Coordination SPS, permis de travail, audits sécurité chantier et investigation accidents.",
    items: [
      "Document Unique (DU) par poste et par chantier",
      "Rédaction PPSPS, PGC et DIUO",
      "Coordination SPS OP1 / OP2 / OP3",
      "Mise à disposition d'agent(s) HSE terrain",
      "Audit sécurité chantier (grille personnalisée)",
      "Analyse des accidents et quasi-accidents",
      "Permis de travail (hauteur, confiné, chaud, électrique)",
    ],
  },
  {
    id: "02",
    icon: Award,
    title: "Management Qualité",
    subtitle: "Module Qualité",
    color: "text-blue-400",
    border: "border-blue-400/20",
    ref: "ISO 9001",
    description:
      "Système de Management Qualité, gestion des non-conformités, revues de direction et audits internes.",
    items: [
      "Diagnostic qualité & cartographie des processus",
      "Mise en place du SMQ",
      "Gestion des non-conformités",
      "Revue de direction avec tableaux de bord",
      "Audit interne & formation auditeurs",
    ],
  },
  {
    id: "03",
    icon: Leaf,
    title: "Environnement",
    subtitle: "Module Environnemental",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    ref: "ISO 14001",
    description:
      "Études d&apos;impact, plan de gestion environnementale, traçabilité des déchets et mise en place du SMIE.",
    items: [
      "Étude d'impact environnemental (EIES)",
      "Plan de gestion environnementale (PGE)",
      "Traçabilité des déchets",
      "Mise en place du SMIE",
    ],
  },
  {
    id: "04",
    icon: GraduationCap,
    title: "Formation & Compétences",
    subtitle: "Module Formation",
    color: "text-amber-400",
    border: "border-amber-400/20",
    ref: "Sur mesure",
    description:
      "Formations SST, habilitations électriques, travail en hauteur, conduite d&apos;engins, référents QHSE.",
    items: [
      "Sensibilisation SST & premiers secours",
      "Habilitations électriques (B0-B2 / BC-BR)",
      "Travail en hauteur & EPI antichute",
      "Conduite d'engins (appui CACES)",
      "Formations référents QHSE",
      "Sauvetage secourisme (SST)",
    ],
  },
  {
    id: "05",
    icon: Search,
    title: "Diagnostic & Audit",
    subtitle: "Module Audit",
    color: "text-purple-400",
    border: "border-purple-400/20",
    ref: "Évaluation",
    description:
      "Audit flash, audit approfondi, évaluation fournisseurs, due diligence QHSE pour acquisitions et financements.",
    items: [
      "Audit flash (1-2 jours)",
      "Audit approfondi (3-5 jours)",
      "Audit fournisseurs / sous-traitants",
      "Due diligence QHSE",
    ],
  },
  {
    id: "06",
    icon: CheckSquare,
    title: "Accompagnement Certification",
    subtitle: "Module Certification",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    ref: "Certification",
    description:
      "Accompagnement complet vers la certification ISO 9001, 14001, 45001 ou système intégré QSE.",
    items: [
      "ISO 9001 — Qualité",
      "ISO 14001 — Environnement",
      "ISO 45001 — Sécurité",
      "Management intégré QSE (3 référentiels)",
    ],
  },
];

export default function Services() {
  return (
    <section id="prestations" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-semibold">Nos modules</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            6 modules{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              complémentaires
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Choisissez à la carte ou optez pour un contrat global. Chaque module
            s&apos;adapte à votre taille et votre maturité QHSE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`surface-card group rounded-2xl border ${mod.border} p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`icon-surface flex items-center justify-center w-12 h-12 rounded-xl border ${mod.border}`}
                >
                  <mod.icon className={`w-6 h-6 ${mod.color}`} />
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold uppercase tracking-widest ${mod.color} opacity-50`}>
                    {mod.ref}
                  </span>
                  <p className={`text-3xl font-black ${mod.color} opacity-10 leading-none`}>{mod.id}</p>
                </div>
              </div>

              <p className={`text-xs font-bold uppercase tracking-widest ${mod.color} opacity-60 mb-1`}>
                {mod.subtitle}
              </p>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3">{mod.title}</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm mb-4 leading-relaxed">{mod.description}</p>

              <ul className="space-y-1.5 mb-5">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mod.color} bg-current shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 ${mod.color} text-sm font-bold hover:gap-2.5 transition-all duration-200`}
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
