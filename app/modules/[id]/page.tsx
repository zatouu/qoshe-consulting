import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, FileText, ListChecks, Scale, Target } from "lucide-react";
import { modules, getModuleById } from "@/data/modules";
import { getModuleMailto } from "@/lib/contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return modules.map((mod) => ({ id: mod.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const mod = getModuleById(params.id);
  if (!mod) {
    return {
      title: "Module non trouvé — QOSHE Consulting",
    };
  }
  return {
    title: `${mod.title} — QOSHE Consulting`,
    description: mod.description,
  };
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const mod = getModuleById(params.id);
  if (!mod) notFound();

  const Icon = mod.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <main className="min-h-screen bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
          <Link
            href="/#prestations"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 text-sm font-medium transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux prestations
          </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border ${mod.border} bg-[var(--icon-bg)] shrink-0`}
          >
            <Icon className={`w-8 h-8 ${mod.color}`} />
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${mod.color} opacity-60 mb-1`}>
              {mod.subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2">
              {mod.title}
            </h1>
            <span
              className={`inline-flex items-center gap-1.5 ${mod.color} bg-current/5 border ${mod.border} rounded-full px-3 py-1 text-xs font-bold`}
            >
              {mod.ref}
            </span>
          </div>
        </div>

        {/* Descriptions */}
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-4">
          {mod.description}
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
          {mod.longDescription}
        </p>

        {/* Items */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <ListChecks className={`w-5 h-5 ${mod.color}`} />
            Ce que comprend ce module
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {mod.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
              >
                <CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits / Deliverables / Methodology */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Target className={`w-5 h-5 ${mod.color}`} />
              Bénéfices
            </h3>
            <ul className="space-y-3">
              {mod.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mod.color} bg-current shrink-0`} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className={`w-5 h-5 ${mod.color}`} />
              Livrables
            </h3>
            <ul className="space-y-3">
              {mod.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mod.color} bg-current shrink-0`} />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <ListChecks className={`w-5 h-5 ${mod.color}`} />
              Méthodologie
            </h3>
            <ul className="space-y-3">
              {mod.methodology.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${mod.color} bg-current/10 text-[10px] font-black shrink-0 mt-0.5`}
                  >
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Scale className={`w-5 h-5 ${mod.color}`} />
            Exigences règlementaires et référents obligatoires au Sénégal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
            {mod.regulatory.summary}
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {mod.regulatory.references.map((ref) => (
              <li
                key={ref}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
              >
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mod.color} bg-current shrink-0`} />
                {ref}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="surface-card rounded-2xl border border-amber-400/20 p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
            Besoin d&apos;un accompagnement sur ce module ?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            Faites un audit gratuit en ligne ou envoyez directement une demande à nos experts avec dave et dada en copie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-400/20"
            >
              Faire un audit gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getModuleMailto(mod.title, mod.subtitle, mod.description)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
