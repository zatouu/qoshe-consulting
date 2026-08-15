"use client";

import { useMemo } from "react";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Share2,
  Mail,
  TrendingUp,
  Award,
} from "lucide-react";
import type { AuditConfig, AuditAnswer } from "@/data/audit-types";

interface AuditResultsProps {
  config: AuditConfig;
  answers: AuditAnswer;
  onBack: () => void;
}

export default function AuditResults({ config, answers, onBack }: AuditResultsProps) {
  const { totalScore, maxScore, sectionScores } = useMemo(() => {
    let total = 0;
    let max = 0;
    const sScores: { title: string; score: number; max: number }[] = [];

    for (const section of config.sections) {
      let sScore = 0;
      let sMax = section.maxScore;

      for (const q of section.questions) {
        if (q.scoreWeight === undefined) continue;
        const answer = answers[q.id];
        if (answer === undefined || answer === "") continue;

        if (q.type === "radio") {
          if (q.scoreType === "positive") {
            const positiveAnswers = ["Oui", "Oui, systématiquement", "Oui, à temps plein", "Oui, hebdomadaires", "Certifié", "Oui, parfois"];
            const partialAnswers = ["Partiellement", "Oui, à temps partiel", "Oui, mensuelles", "Oui, ponctuelles", "En démarche"];
            if (positiveAnswers.includes(answer as string)) {
              sScore += q.scoreWeight;
            } else if (partialAnswers.includes(answer as string)) {
              sScore += q.scoreWeight * 0.5;
            }
          } else if (q.scoreType === "negative") {
            if (answer === "Non") {
              sScore += q.scoreWeight;
            }
          }
        } else if (q.type === "checkbox") {
          const selected = (answer as string[]) || [];
          const ratio = selected.length / (q.options?.length || 1);
          sScore += q.scoreWeight * ratio;
        }
      }

      sScore = Math.min(sScore, sMax);
      total += sScore;
      max += sMax;
      sScores.push({ title: section.title, score: sScore, max: sMax });
    }

    return { totalScore: Math.round(total), maxScore: max, sectionScores: sScores };
  }, [config, answers]);

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const recommendation = useMemo(() => {
    return config.recommendations.find((r) => percentage >= r.threshold) || config.recommendations[config.recommendations.length - 1];
  }, [config, percentage]);

  const getScoreColor = (pct: number) => {
    if (pct >= 80) return { text: "text-emerald-400", bg: "bg-emerald-400", ring: "text-emerald-400", label: "Excellent", icon: Award };
    if (pct >= 60) return { text: "text-amber-400", bg: "bg-amber-400", ring: "text-amber-400", label: "Acceptable", icon: TrendingUp };
    if (pct >= 40) return { text: "text-orange-400", bg: "bg-orange-400", ring: "text-orange-400", label: "Insuffisant", icon: AlertTriangle };
    return { text: "text-red-400", bg: "bg-red-400", ring: "text-red-400", label: "Critique", icon: XCircle };
  };

  const sc = getScoreColor(percentage);
  const ScoreIcon = sc.icon;

  const generateWhatsAppMessage = () => {
    let msg = `*Audit QOSHE - ${config.title}*\n`;
    msg += `Score: ${totalScore}/${maxScore} (${percentage}%)\n`;
    msg += `Niveau: ${sc.label}\n\n`;

    for (const section of config.sections) {
      msg += `*${section.title}*\n`;
      for (const q of section.questions) {
        const answer = answers[q.id];
        if (answer === undefined || answer === "") continue;
        if (Array.isArray(answer)) {
          if (answer.length > 0) {
            msg += `${q.label}: ${answer.join(", ")}\n`;
          }
        } else {
          msg += `${q.label}: ${answer}\n`;
        }
      }
      msg += `\n`;
    }

    msg += `*Recommandations QOSHE:*\n`;
    msg += `${recommendation.title}\n`;
    for (const action of recommendation.actions) {
      msg += `- ${action}\n`;
    }

    return encodeURIComponent(msg);
  };

  const generateEmailBody = () => {
    let body = `Audit QOSHE - ${config.title}\n`;
    body += `Score: ${totalScore}/${maxScore} (${percentage}%)\n`;
    body += `Niveau: ${sc.label}\n\n`;

    for (const section of config.sections) {
      body += `=== ${section.title} ===\n`;
      for (const q of section.questions) {
        const answer = answers[q.id];
        if (answer === undefined || answer === "") continue;
        if (Array.isArray(answer)) {
          if (answer.length > 0) {
            body += `${q.label}: ${answer.join(", ")}\n`;
          }
        } else {
          body += `${q.label}: ${answer}\n`;
        }
      }
      body += `\n`;
    }

    body += `=== Recommandations ===\n`;
    body += `${recommendation.title}\n`;
    for (const action of recommendation.actions) {
      body += `- ${action}\n`;
    }

    return encodeURIComponent(body);
  };

  const whatsappUrl = `https://wa.me/221776339325?text=${generateWhatsAppMessage()}`;
  const emailUrl = `mailto:contact@qosheconsulting.com?subject=${encodeURIComponent(`Audit ${config.title} - Score ${percentage}%`)}&body=${generateEmailBody()}`;

  const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
    amber: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    blue: { text: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  };
  const c = colorClasses[config.color] || colorClasses.amber;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 text-sm font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux audits
        </button>

        {/* Score card */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-8 mb-6 text-center">
          <div className={`inline-flex items-center gap-2 ${c.bg} ${c.border} border rounded-full px-4 py-1.5 mb-6`}>
            <span className={`${c.text} text-sm font-bold`}>{config.badge}</span>
          </div>

          <div className="relative inline-flex items-center justify-center mb-6">
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-200 dark:text-slate-800"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={`${(percentage / 100) * 327} 327`}
                strokeLinecap="round"
                className={`${sc.text} transition-all duration-1000 ease-out`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-black ${sc.text}`}>{percentage}%</span>
              <span className="text-slate-400 dark:text-slate-600 text-xs font-semibold mt-1">
                {totalScore}/{maxScore} pts
              </span>
            </div>
          </div>

          <div className={`inline-flex items-center gap-2 ${sc.bg || sc.text.replace("text", "bg") + "/10"} border ${sc.ring.replace("text", "border") + "/20"} rounded-full px-4 py-2 mb-4`}>
            <ScoreIcon className={`w-5 h-5 ${sc.text}`} />
            <span className={`${sc.text} font-bold text-sm`}>{sc.label}</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
            {recommendation.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
            {recommendation.text}
          </p>
        </div>

        {/* Section scores */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
            Détail par catégorie
          </h3>
          <div className="space-y-4">
            {sectionScores
              .filter((s) => s.max > 0)
              .map((s, i) => {
                const pct = s.max > 0 ? Math.round((s.score / s.max) * 100) : 0;
                const sColor = pct >= 80 ? "bg-emerald-400" : pct >= 60 ? "bg-amber-400" : pct >= 40 ? "bg-orange-400" : "bg-red-400";
                return (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                        {s.title}
                      </span>
                      <span className="text-slate-500 dark:text-slate-500 text-xs font-bold">
                        {s.score}/{s.max}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sColor} transition-all duration-700 ease-out`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Proposition d'intervention QOSHE
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
            À l'issue de cet audit, nous vous recommandons les actions suivantes :
          </p>
          <div className="space-y-3">
            {recommendation.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`flex items-center justify-center w-6 h-6 ${c.bg} ${c.border} border rounded-lg shrink-0 mt-0.5`}>
                  <CheckCircle className={`w-4 h-4 ${c.text}`} />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                  {action}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Share buttons */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Recevoir mes résultats
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
            Envoyez vos réponses à QOSHE Consulting pour un devis personnalisé et gratuit.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg text-sm"
            >
              <Share2 className="w-5 h-5" />
              Envoyer via WhatsApp
            </a>
            <a
              href={emailUrl}
              className="flex items-center justify-center gap-2.5 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg text-sm"
            >
              <Mail className="w-5 h-5" />
              Envoyer par email
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 text-sm font-semibold transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Refaire l'audit
          </button>
          <a
            href="/#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-bold text-sm transition-all hover:shadow-lg"
          >
            Demander un devis
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}
