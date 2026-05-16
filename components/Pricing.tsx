import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "500 000",
    currency: "FCFA",
    period: "/mois",
    description: "Pour les TPE et PME en démarrage QHSE",
    commitment: "Engagement 6 mois minimum",
    popular: false,
    color: "text-slate-300",
    border: "border-slate-700/60",
    checkColor: "text-slate-400",
    btnClass: "bg-slate-700 hover:bg-slate-600 text-white",
    features: [
      "Audit flash initial et feuille de route",
      "Mise à jour ou élaboration du DU",
      "Rédaction PGC / PPSPS / DIUO",
      "1 visite sécurité chantier / mois",
      "Support téléphonique et rédactionnel",
      "Rapport mensuel de suivi",
      "Mise à disposition agent HSE junior 1j/2",
    ],
  },
  {
    name: "Performance",
    price: "1 500 000",
    currency: "FCFA",
    period: "/mois",
    description: "Pour les PME et ETI en structuration",
    commitment: "Engagement 12 mois",
    popular: true,
    color: "text-amber-400",
    border: "border-amber-400/40",
    checkColor: "text-amber-400",
    btnClass: "bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black",
    features: [
      "Tout le pack Essentiel",
      "Coordination SPS (OP2 ou OP3)",
      "Mise en place du SMQ ou SMSST",
      "2 visites sécurité chantier / mois",
      "Plan de formation annuel + 2 formations / an",
      "Tableaux de bord QHSE mensuels",
      "Accompagnement certification ISO (1 référentiel)",
    ],
  },
  {
    name: "Excellence",
    price: "Sur devis",
    currency: "",
    period: "",
    description: "Pour les grands groupes et projets structurants",
    commitment: "Contrat sur mesure",
    popular: false,
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    checkColor: "text-emerald-400",
    btnClass: "bg-emerald-500 hover:bg-emerald-400 text-white font-bold",
    features: [
      "Tout le pack Performance",
      "Management intégré QSE (3 référentiels)",
      "Audit fournisseurs et sous-traitants",
      "Formations illimitées (plan annuel)",
      "Présence récurrente sur le terrain",
      "Intervention due diligence et contentieux",
      "Reporting personnalisé à la direction",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-semibold">Formules & Tarifs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Une offre adaptée à{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              chaque entreprise
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Trois formules évolutives. Chaque offre peut être personnalisée après
            un diagnostic préalable gratuit.
          </p>
        </div>

        <p className="text-center text-slate-400 dark:text-slate-600 text-sm mb-12">
          Les tarifs sont indicatifs — devis sur mesure après diagnostic
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`surface-card relative rounded-2xl border ${plan.border} p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular ? "ring-2 ring-amber-400/25 md:scale-[1.04]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 bg-amber-400 text-[#0A0E1A] font-black text-xs px-4 py-1.5 rounded-full shadow-lg shadow-amber-400/30">
                    <Star className="w-3 h-3 fill-current" />
                    Le plus demandé
                  </div>
                </div>
              )}

              <div className="mb-7">
                <p className={`text-xs font-black uppercase tracking-widest ${plan.color} mb-3`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mb-2">
                  {plan.currency ? (
                    <>
                      <span className="text-4xl font-black text-slate-900 dark:text-white leading-none">{plan.price}</span>
                      <span className={`text-sm font-bold ${plan.color} mb-0.5`}>
                        {plan.currency}
                        {plan.period}
                      </span>
                    </>
                  ) : (
                    <span className={`text-4xl font-black ${plan.color}`}>{plan.price}</span>
                  )}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                    <Check className={`w-4 h-4 ${plan.checkColor} shrink-0 mt-0.5`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <a
                  href="#contact"
                  className={`block text-center font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg text-sm ${plan.btnClass}`}
                >
                  Commencer
                </a>
                <p className="text-center text-xs text-slate-400 dark:text-slate-600">{plan.commitment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
