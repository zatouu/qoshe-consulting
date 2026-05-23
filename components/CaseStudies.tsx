import { Building2, Hotel, Factory, TrendingDown, ShieldCheck, Clock3 } from "lucide-react";

const cases = [
  {
    sector: "BTP & chantiers",
    icon: Building2,
    title: "Structuration sécurité sur chantier à forte sous-traitance",
    context: "Entreprise confrontée à des retards, écarts documentaires et comportements à risque récurrents.",
    actions: ["PPSPS et plans de prévention", "Briefings sécurité terrain", "Registre de suivi des actions"],
    results: ["Traçabilité renforcée", "Moins d'arrêts imprévus", "Responsabilités clarifiées"],
    color: "text-amber-400",
    border: "border-amber-400/25",
  },
  {
    sector: "Hôtellerie",
    icon: Hotel,
    title: "Hygiène, sécurité et qualité de service en exploitation",
    context: "Besoin d'harmoniser les pratiques entre équipes, maintenance, cuisine et housekeeping.",
    actions: ["Audit hygiène & sécurité", "Procédures simples par poste", "Formation des superviseurs"],
    results: ["Standards homogènes", "Équipes autonomisées", "Réduction des écarts internes"],
    color: "text-emerald-400",
    border: "border-emerald-400/25",
  },
  {
    sector: "Industrie & agroalimentaire",
    icon: Factory,
    title: "Préparation certification et conformité réglementaire",
    context: "Organisation souhaitant sécuriser ses opérations et préparer une démarche ISO progressive.",
    actions: ["Gap analysis ISO", "Cartographie processus", "Tableaux de bord QHSE"],
    results: ["Feuille de route ISO", "Risques priorisés", "Management plus lisible"],
    color: "text-blue-400",
    border: "border-blue-400/25",
  },
];

const indicators = [
  { icon: TrendingDown, value: "-30%", label: "d'écarts critiques visés après plan d'action" },
  { icon: ShieldCheck, value: "100%", label: "des preuves clés centralisées" },
  { icon: Clock3, value: "24h", label: "pour un retour après première prise de contact" },
];

export default function CaseStudies() {
  return (
    <section id="references" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-semibold">Cas d'usage</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Des interventions adaptées à chaque{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">secteur</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Quelques exemples de situations dans lesquelles QOSHE intervient pour transformer la conformité en performance concrète.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cases.map((item) => (
            <article key={item.title} className={`surface-card rounded-2xl border ${item.border} p-6 hover:scale-[1.02] transition-all duration-300`}>
              <div className="flex items-center justify-between mb-5">
                <div className={`icon-surface flex items-center justify-center w-12 h-12 rounded-xl border ${item.border}`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.sector}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{item.context}</p>
              <div className="grid gap-4">
                <div>
                  <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest mb-2">Actions</p>
                  <ul className="space-y-1.5">
                    {item.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${item.color} shrink-0`} />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`border-t ${item.border} pt-4`}>
                  <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest mb-2">Résultats attendus</p>
                  <ul className="space-y-1.5">
                    {item.results.map((result) => (
                      <li key={result} className={`text-sm ${item.color} font-semibold`}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {indicators.map((item) => (
            <div key={item.label} className="surface-card-alt rounded-2xl border border-slate-200 dark:border-slate-800/60 p-5 text-center">
              <item.icon className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{item.value}</p>
              <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
