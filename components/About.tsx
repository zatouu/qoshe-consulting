import { Target, Eye, TrendingUp, Quote } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Proximité avant la théorie",
    description:
      "Nous commençons par écouter et observer. Avant de proposer des procédures, nous passons du temps sur le terrain pour comprendre les contraintes réelles : délais serrés, sous-traitance, équipements disponibles. Nos recommandations sont réalistes et applicables immédiatement.",
    icon: Target,
    color: "text-amber-400",
    border: "border-amber-400/25",
  },
  {
    number: "02",
    title: "Autonomie avant dépendance",
    description:
      "Notre objectif n&apos;est pas de créer un client captif. C&apos;est de transférer les compétences et de structurer l&apos;entreprise pour qu&apos;elle puisse, à terme, gérer seule sa démarche QHSE. Nous formons les référents internes et documentons les processus.",
    icon: Eye,
    color: "text-emerald-400",
    border: "border-emerald-400/25",
  },
  {
    number: "03",
    title: "Résultats mesurables",
    description:
      "Nous nous engageons sur des indicateurs concrets : baisse du taux de fréquence des accidents, réduction des non-conformités, taux de conformité réglementaire. Chaque mission débute et se termine par un bilan chiffré — pas de discours vague.",
    icon: TrendingUp,
    color: "text-blue-400",
    border: "border-blue-400/25",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/25 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-amber-400 text-sm font-semibold">À propos de QOSHE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Qui sommes-{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                nous ?
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-5">
              Fort de plusieurs années d&apos;expérience dans le Management QHSE,{" "}
              <strong className="text-slate-900 dark:text-white">QOSHE CONSULTING</strong> accompagne les entreprises des
              secteurs hôtelier, BTP, agroalimentaire et ferroviaire dans
              l&apos;amélioration continue de leurs performances.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Notre nom incarne les cinq piliers de notre métier :{" "}
              <strong className="text-slate-900 dark:text-white">
                Qualité, Orientation, Sécurité, Hygiène, Environnement
              </strong>
              . Nous croyons que la prévention est un investissement, pas une dépense.
            </p>

            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 mb-6"
            >
              <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">
                Notre mission
              </p>
              <p className="text-slate-900 dark:text-white font-medium leading-relaxed">
                Mettre notre expertise au service de l&apos;entreprise pour l&apos;aider à
                atteindre ses objectifs de rentabilité et de qualité de service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "BTP & Construction",
                "Hôtellerie & Tourisme",
                "Agroalimentaire",
                "Industrie & Ferroviaire",
              ].map((sector) => (
                <div
                  key={sector}
                  className="surface-card-alt flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800/60 px-4 py-3"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <div className="quote-surface relative rounded-2xl border border-amber-400/20 p-8 mb-6">
              <Quote className="w-10 h-10 text-amber-400/25 mb-4" />
              <blockquote className="text-slate-900 dark:text-white text-lg font-semibold leading-relaxed mb-6">
                &ldquo;Le QHSE n&apos;est pas une question de taille d&apos;entreprise. C&apos;est une question de
                volonté. Une PME bien structurée est plus sûre qu&apos;un grand groupe négligent. Notre
                rôle est de transformer cette volonté en système, et ce système en culture.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400/15 border border-amber-400/30 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-black text-sm">Q</span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">QOSHE Consulting</p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs">Cabinet QHSE — Sénégal</p>
                </div>
              </div>
            </div>

            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6"
            >
              <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest font-bold mb-4">
                Objectifs généraux
              </p>
              <ul className="space-y-3">
                {[
                  "Renforcement des capacités des entreprises",
                  "Accompagnement à la mise en place d'un système QHSE",
                  "Formation et conseil en techniques de management",
                  "Perfectionnement aux techniques d'hygiène et nettoyage",
                ].map((obj) => (
                  <li key={obj} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Notre philosophie{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                d&apos;accompagnement
              </span>
            </h3>
            <p className="text-slate-500 dark:text-slate-500 mt-3">Trois principes qui guident chacune de nos interventions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className={`surface-card rounded-2xl border ${p.border} p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`icon-surface inline-flex items-center justify-center w-12 h-12 rounded-xl border ${p.border}`}
                  >
                    <p.icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <span className={`text-5xl font-black ${p.color} opacity-15`}>{p.number}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{p.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
