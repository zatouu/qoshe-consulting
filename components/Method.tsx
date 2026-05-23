import { ClipboardCheck, Search, Route, UsersRound, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnostic terrain",
    text: "Observation des pratiques, analyse documentaire, entretiens ciblés et cartographie des risques prioritaires.",
    color: "text-amber-400",
    border: "border-amber-400/25",
  },
  {
    icon: Route,
    title: "Feuille de route",
    text: "Plan d'action réaliste, hiérarchisé par urgence, coût, impact opérationnel et obligations réglementaires.",
    color: "text-emerald-400",
    border: "border-emerald-400/25",
  },
  {
    icon: ClipboardCheck,
    title: "Mise en conformité",
    text: "Documents, procédures, affichages, registres, formations et preuves d'application préparés avec vos équipes.",
    color: "text-blue-400",
    border: "border-blue-400/25",
  },
  {
    icon: UsersRound,
    title: "Transfert de compétences",
    text: "Montée en compétence des référents internes pour installer une culture QHSE durable, pas une dépendance consultant.",
    color: "text-purple-400",
    border: "border-purple-400/25",
  },
  {
    icon: BarChart3,
    title: "Pilotage & amélioration",
    text: "Tableaux de bord, indicateurs, audits internes et revues périodiques pour mesurer les résultats dans le temps.",
    color: "text-cyan-400",
    border: "border-cyan-400/25",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-amber-400 text-sm font-semibold">Méthode QOSHE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
              Une démarche claire, du terrain au{" "}
              <span className="bg-gradient-to-r from-amber-400 to-emerald-300 bg-clip-text text-transparent">
                résultat mesurable
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Nous ne livrons pas uniquement des documents. Nous installons une organisation QHSE pratique, compréhensible et pilotable par vos équipes.
            </p>
            <div className="surface-card rounded-2xl border border-amber-400/20 p-6">
              <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">Promesse opérationnelle</p>
              <p className="text-slate-900 dark:text-white font-semibold leading-relaxed">
                Chaque mission se termine avec des preuves concrètes : documents validés, équipes formées, actions priorisées et indicateurs de suivi.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className={`surface-card rounded-2xl border ${step.border} p-6 transition-all duration-300 hover:scale-[1.01]`}>
                <div className="flex gap-5 items-start">
                  <div className={`icon-surface flex items-center justify-center w-12 h-12 rounded-xl border ${step.border} shrink-0`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-black uppercase tracking-widest ${step.color}`}>Étape {String(index + 1).padStart(2, "0")}</span>
                      <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
