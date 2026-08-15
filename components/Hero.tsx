import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/25 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-300 text-sm font-semibold tracking-wide">Cabinet QHSE — Sénégal</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">
          Votre partenaire{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
            QHSE expert
          </span>
          <br />
          sur le terrain
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Le cabinet QHSE{" "}
          <strong className="text-slate-900 dark:text-white font-bold">
            orienté performance et réduction des coûts
          </strong>
          , pas juste conformité.
        </p>

        <p className="text-slate-500 dark:text-slate-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Qualité · Orientation · Sécurité · Hygiène · Environnement — Nous
          accompagnons les entreprises BTP, industrie, services, hôtellerie et
          agroalimentaire au Sénégal vers l&apos;excellence opérationnelle.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {[
            "ISO 9001 / 14001 / 45001",
            "BTP · Industrie · Hôtellerie",
            "Diagnostic initial gratuit",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="/audit"
            className="group flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/30 text-base"
          >
            Demander un audit gratuit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#prestations"
            className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            Voir nos prestations
          </a>
        </div>

        <a
          href="#stats"
          className="inline-flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Découvrir</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
