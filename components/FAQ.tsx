import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Le diagnostic gratuit engage-t-il l'entreprise ?",
    answer: "Non. Il sert à comprendre vos enjeux, identifier les urgences et vous proposer une feuille de route claire. Vous restez libre de lancer ou non une mission ensuite.",
  },
  {
    question: "Intervenez-vous hors de Dakar ?",
    answer: "Oui. QOSHE intervient à Dakar et dans les régions du Sénégal, avec une organisation adaptée au niveau d'urgence, au secteur et à la durée de mission.",
  },
  {
    question: "Pouvez-vous accompagner une certification ISO complète ?",
    answer: "Oui. Nous couvrons ISO 9001, ISO 14001, ISO 45001 et les démarches intégrées QSE, depuis le diagnostic jusqu'à la préparation à l'audit de certification.",
  },
  {
    question: "Travaillez-vous avec les petites entreprises ?",
    answer: "Oui. Les offres sont modulaires pour permettre aux TPE/PME de démarrer avec l'essentiel : conformité, sécurité terrain, documents clés et formation des équipes.",
  },
  {
    question: "Pouvez-vous former nos équipes en interne ?",
    answer: "Oui. Les formations peuvent être conçues sur mesure selon les métiers, risques, postes de travail et objectifs de performance QHSE.",
  },
  {
    question: "Comment mesurez-vous les résultats ?",
    answer: "Nous suivons des indicateurs concrets : conformité documentaire, taux de réalisation des actions, accidents/incidents, non-conformités, audits internes et maturité QHSE.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Questions{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">fréquentes</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Les réponses aux questions les plus courantes avant de lancer une mission QHSE avec QOSHE Consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map((item) => (
            <div key={item.question} className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6">
              <h3 className="text-slate-900 dark:text-white font-black mb-3 leading-snug">{item.question}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
