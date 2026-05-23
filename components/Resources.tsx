import { FileText, Calculator, ListChecks, Download, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Checklist conformité QHSE",
    description: "Une grille simple pour vérifier les documents, registres, affichages et obligations prioritaires.",
    tag: "Audit",
    color: "text-amber-400",
    border: "border-amber-400/25",
  },
  {
    icon: Calculator,
    title: "Estimateur coût des accidents",
    description: "Identifiez les coûts visibles et cachés : arrêts, retards, reprises, image, pénalités et pertes de productivité.",
    tag: "ROI",
    color: "text-red-400",
    border: "border-red-400/25",
  },
  {
    icon: ListChecks,
    title: "Plan d'action 30 jours",
    description: "Un cadre de démarrage pour prioriser les actions rapides avant une mission complète ou une certification.",
    tag: "Action",
    color: "text-emerald-400",
    border: "border-emerald-400/25",
  },
];

export default function Resources() {
  return (
    <section id="ressources" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-sm font-semibold">Ressources & diagnostic</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
              Démarrez avec des outils{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">pratiques</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-7">
              Le premier audit gratuit permet d'identifier rapidement les urgences, mais vous pouvez déjà cadrer votre besoin avec nos supports de diagnostic.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-white font-black px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-400/20"
            >
              Demander les ressources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {resources.map((item) => (
              <div key={item.title} className={`surface-card rounded-2xl border ${item.border} p-6 flex flex-col sm:flex-col lg:flex-row gap-5 lg:items-center hover:scale-[1.01] transition-all duration-300`}>
                <div className={`icon-surface flex items-center justify-center w-12 h-12 rounded-xl border ${item.border} shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.tag}</span>
                    <span className="h-px w-8 bg-slate-200 dark:bg-slate-800" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <Download className={`w-5 h-5 ${item.color} opacity-60 shrink-0`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
