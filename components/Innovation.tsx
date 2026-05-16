import { BarChart3, Video, HardHat, Leaf, CalendarClock, Zap, Building2, Calculator } from "lucide-react";

const innovations = [
  {
    icon: BarChart3,
    title: "QHSE Data Driven",
    badge: "Nouveau",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    desc: "Pilotage par la donnée",
    items: ["Tableaux de bord Power BI", "Analyse prédictive des accidents", "Score QHSE par chantier", "Indicateurs temps réel mobile"],
    color: "text-blue-400",
    border: "border-blue-400/20",
  },
  {
    icon: Video,
    title: "Sensibilisation immersive",
    badge: "Impact fort",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    desc: "VR · Vidéos terrain",
    items: ["Vidéos sur vos propres chantiers", "Simulations en réalité virtuelle", "Formation choc cas réels"],
    color: "text-purple-400",
    border: "border-purple-400/20",
  },
  {
    icon: HardHat,
    title: "Chantiers à risques élevés",
    badge: "Premium",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    desc: "Positionnement expert",
    items: ["Démolition & excavation profonde", "Travaux en hauteur & milieu urbain", "Plans de prévention ultra détaillés", "Gestion des zones critiques"],
    color: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    icon: Leaf,
    title: "QHSE + ESG / RSE",
    badge: "Tendance",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    desc: "Développement durable",
    items: ["Accompagnement ESG", "Bilan carbone simplifié", "Reporting extra-financier", "Stratégie développement durable"],
    color: "text-emerald-400",
    border: "border-emerald-400/20",
  },
  {
    icon: CalendarClock,
    title: "Abonnement mensuel",
    badge: "Populaire",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    desc: "Modèle récurrent",
    items: ["Visites chantier mensuelles", "Reporting & suivi", "Support WhatsApp QHSE", "Mise à jour PGC / PPSPS"],
    color: "text-cyan-400",
    border: "border-cyan-400/20",
  },
  {
    icon: Zap,
    title: "QHSE Express",
    badge: "7-14 jours",
    badgeColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    desc: "Mise en conformité rapide",
    items: ["Documents obligatoires", "Analyse des risques", "Sensibilisation rapide", "Pack clé en main"],
    color: "text-yellow-400",
    border: "border-yellow-400/20",
  },
  {
    icon: Building2,
    title: "Externalisation complète",
    badge: "Service full",
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    desc: "Votre service QHSE dédié",
    items: ["Présence partielle ou totale", "Gestion complète Sécurité / Qualité", "Environnement & conformité", "Reporting direction"],
    color: "text-orange-400",
    border: "border-orange-400/20",
  },
  {
    icon: Calculator,
    title: "Diagnostic coût des accidents",
    badge: "ROI",
    badgeColor: "text-red-400 bg-red-400/10 border-red-400/20",
    desc: "Analyse financière",
    items: ["Calcul du coût réel des accidents", "Arrêts de travail & retards chantier", "Impact sur l'image", "Rapport financier détaillé"],
    color: "text-red-400",
    border: "border-red-400/20",
  },
];

export default function Innovation() {
  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-purple-400 text-sm font-semibold">Solutions innovantes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Au-delà des standards :{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              l&apos;innovation QHSE
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Des solutions modernes et différenciantes pour une performance QHSE durable,
            adaptées au contexte africain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {innovations.map((item) => (
            <div
              key={item.title}
              className={`surface-card rounded-2xl border ${item.border} p-5 hover:scale-[1.03] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`icon-surface flex items-center justify-center w-10 h-10 rounded-xl border ${item.border}`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              <p className={`text-xs font-bold uppercase tracking-wider ${item.color} opacity-55 mb-1`}>
                {item.desc}
              </p>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-3 leading-snug">{item.title}</h3>

              <ul className="space-y-1.5">
                {item.items.map((point) => (
                  <li key={point} className="flex items-start gap-1.5 text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    <span className={`mt-1 w-1 h-1 rounded-full bg-current ${item.color} shrink-0`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
