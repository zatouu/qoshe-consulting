"use client";

import { useState } from "react";
import { UtensilsCrossed, HardHat, ShieldCheck, ArrowRight, FileCheck, Clock, BarChart3 } from "lucide-react";
import { auditCantine } from "@/data/audit-cantine";
import { auditBtp } from "@/data/audit-btp";
import { auditSst } from "@/data/audit-sst";
import type { AuditConfig } from "@/data/audit-types";
import AuditForm from "@/components/AuditForm";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  HardHat,
  ShieldCheck,
};

const audits: AuditConfig[] = [auditCantine, auditBtp, auditSst];

const colorMap: Record<string, { text: string; bg: string; border: string; hover: string }> = {
  amber: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", hover: "hover:border-amber-400/40" },
  blue: { text: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", hover: "hover:border-blue-400/40" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", hover: "hover:border-emerald-400/40" },
};

export default function AuditPage() {
  const [selected, setSelected] = useState<AuditConfig | null>(null);

  if (selected) {
    return <AuditForm config={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Audit gratuit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Évaluez votre{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              conformité QHSE
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Réalisez un autodiagnostic gratuit de votre établissement en quelques minutes.
            Obtenez un score sur 100 et des recommandations personnalisées de nos experts.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, title: "5-10 min", desc: "Questionnaire rapide et structuré" },
            { icon: BarChart3, title: "Score sur 100", desc: "Évaluation par catégorie" },
            { icon: FileCheck, title: "Recommandations", desc: "Plan d'action personnalisé" },
          ].map((f) => (
            <div key={f.title} className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl mb-3">
                <f.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{f.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {audits.map((audit) => {
            const Icon = iconMap[audit.icon] || FileCheck;
            const c = colorMap[audit.color] || colorMap.amber;
            const totalQuestions = audit.sections.reduce((acc, s) => acc + s.questions.length, 0);
            return (
              <button
                key={audit.id}
                onClick={() => setSelected(audit)}
                className={`surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 text-left transition-all ${c.hover} hover:shadow-xl group`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${c.bg} ${c.border} border rounded-2xl mb-5`}>
                  <Icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <div className={`inline-flex items-center gap-1.5 ${c.bg} ${c.border} border rounded-full px-3 py-1 mb-3`}>
                  <span className={`${c.text} text-xs font-bold`}>{audit.badge}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                  {audit.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed">
                  {audit.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 dark:text-slate-600 text-xs font-medium">
                    {audit.sections.length} sections · {totalQuestions} questions
                  </span>
                  <span className={`flex items-center gap-1 ${c.text} text-sm font-bold group-hover:gap-2 transition-all`}>
                    Commencer
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Besoin d'un audit complet sur site par un expert QOSHE ?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black px-6 py-3 rounded-xl transition-all hover:shadow-lg text-sm"
          >
            Demander un diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
