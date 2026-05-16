import { AlertTriangle, Clock, FileX, DollarSign, BadgeAlert, Users } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    problem: "Accidents du travail à répétition",
    impact: "Arrêts de travail, responsabilité pénale, image dégradée",
    solution: "Investigation, PPSPS sur mesure, formation sécurité terrain",
    color: "text-red-400",
    border: "border-red-400/20",
  },
  {
    icon: Clock,
    problem: "Retards et arrêts de chantier",
    impact: "Pénalités contractuelles, pertes financières",
    solution: "Coordination SPS, plans de prévention, gestion des risques",
    color: "text-orange-400",
    border: "border-orange-400/20",
  },
  {
    icon: FileX,
    problem: "Sanctions réglementaires",
    impact: "Amendes, fermeture de site, contentieux juridiques",
    solution: "Audit de conformité, Document Unique, mise en conformité express",
    color: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    icon: DollarSign,
    problem: "Coûts cachés des non-conformités",
    impact: "Reprises, malfaçons, pertes de marchés publics",
    solution: "SMQ ISO 9001, gestion des non-conformités, audits internes",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
  },
  {
    icon: BadgeAlert,
    problem: "Difficultés à obtenir des certifications",
    impact: "Exclusion des appels d'offres, perte de compétitivité",
    solution: "Accompagnement ISO 9001 / 14001 / 45001 de A à Z",
    color: "text-blue-400",
    border: "border-blue-400/20",
  },
  {
    icon: Users,
    problem: "Équipes non formées aux risques",
    impact: "Comportements à risque, culture sécurité inexistante",
    solution: "Formations sur mesure, habilitations, sensibilisation terrain",
    color: "text-purple-400",
    border: "border-purple-400/20",
  },
];

export default function Problems() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-400 text-sm font-semibold">Problèmes fréquents</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Ces risques coûtent{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              très cher
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Chaque non-conformité QHSE a un coût réel et mesurable. QOSHE transforme ces risques en leviers de performance durable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item) => (
            <div
              key={item.problem}
              className={`surface-card rounded-2xl border ${item.border} p-6 group hover:scale-[1.02] transition-all duration-300`}
            >
              <div
                className={`icon-surface inline-flex items-center justify-center w-11 h-11 rounded-xl border ${item.border} mb-4`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{item.problem}</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-4">{item.impact}</p>

              <div className={`border-t ${item.border} pt-4`}>
                <p className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-wider font-bold mb-1.5">
                  Notre réponse
                </p>
                <p className={`text-sm ${item.color} font-semibold leading-snug`}>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
