import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/25 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div
          className="cta-inner-surface relative overflow-hidden rounded-3xl border border-amber-400/25 p-12 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold">Diagnostic 100% gratuit</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Commencez par un{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                diagnostic gratuit
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              En 1 à 2 jours, nous réalisons un audit flash complet de votre situation QHSE et
              vous remettons une feuille de route priorisée — sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/30 text-base"
              >
                Demander mon audit gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+221000000000"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 font-semibold transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Nous appeler directement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
