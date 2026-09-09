import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { modules } from "@/data/modules";

export default function Services() {
  return (
    <section id="prestations" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-semibold">Nos modules</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {modules.length} modules{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              complémentaires
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Choisissez à la carte ou optez pour un contrat global. Chaque module
            s&apos;adapte à votre taille et votre maturité QHSE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`surface-card group rounded-2xl border ${mod.border} p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`icon-surface flex items-center justify-center w-12 h-12 rounded-xl border ${mod.border}`}
                >
                  <mod.icon className={`w-6 h-6 ${mod.color}`} />
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold uppercase tracking-widest ${mod.color} opacity-50`}>
                    {mod.ref}
                  </span>
                  <p className={`text-3xl font-black ${mod.color} opacity-10 leading-none`}>{mod.legacyId}</p>
                </div>
              </div>

              <p className={`text-xs font-bold uppercase tracking-widest ${mod.color} opacity-60 mb-1`}>
                {mod.subtitle}
              </p>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-3">{mod.title}</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm mb-4 leading-relaxed">{mod.description}</p>

              <ul className="space-y-1.5 mb-5">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mod.color} bg-current shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={`/modules/${mod.id}`}
                className={`inline-flex items-center gap-1.5 ${mod.color} text-sm font-bold hover:gap-2.5 transition-all duration-200`}
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
