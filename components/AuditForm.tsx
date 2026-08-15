"use client";

import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle,
  Send,
  AlertCircle,
} from "lucide-react";
import type { AuditConfig, AuditAnswer } from "@/data/audit-types";
import AuditResults from "./AuditResults";

interface AuditFormProps {
  config: AuditConfig;
  onBack: () => void;
}

export default function AuditForm({ config, onBack }: AuditFormProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<AuditAnswer>({});
  const [completed, setCompleted] = useState(false);
  const [showError, setShowError] = useState(false);

  const section = config.sections[currentSection];
  const totalSections = config.sections.length;
  const progress = ((currentSection + 1) / totalSections) * 100;

  const visibleQuestions = useMemo(() => {
    return section.questions.filter((q) => {
      if (!q.conditional) return true;
      const parentAnswer = answers[q.conditional.questionId];
      return parentAnswer === q.conditional.value;
    });
  }, [section, answers]);

  const requiredQuestions = visibleQuestions.filter(
    (q) => q.type !== "checkbox" && q.scoreWeight === undefined && q.id.startsWith("nom_") || q.id === "adresse" || q.id === "telephone" || q.id === "email"
  );

  const isSectionValid = useMemo(() => {
    return visibleQuestions.every((q) => {
      const answer = answers[q.id];
      if (q.type === "checkbox") return true;
      if (q.scoreWeight !== undefined) {
        return answer !== undefined && answer !== "";
      }
      if (q.id.startsWith("nom_") || q.id === "adresse" || q.id === "telephone" || q.id === "email") {
        return answer !== undefined && answer !== "";
      }
      return true;
    });
  }, [visibleQuestions, answers]);

  const handleChange = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowError(false);
  };

  const handleNext = () => {
    if (!isSectionValid) {
      setShowError(true);
      return;
    }
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCompleted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onBack();
    }
  };

  if (completed) {
    return <AuditResults config={config} answers={answers} onBack={onBack} />;
  }

  const inputClass =
    "w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all text-sm";

  const colorClasses: Record<string, { text: string; bg: string; border: string; btn: string }> = {
    amber: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", btn: "bg-amber-400 hover:bg-amber-300 text-[#0A0E1A]" },
    blue: { text: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", btn: "bg-blue-500 hover:bg-blue-400 text-white" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", btn: "bg-emerald-500 hover:bg-emerald-400 text-white" },
  };
  const c = colorClasses[config.color] || colorClasses.amber;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 text-sm font-medium mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour aux audits
          </button>
          <div className={`inline-flex items-center gap-2 ${c.bg} ${c.border} border rounded-full px-4 py-1.5 mb-4`}>
            <span className={`${c.text} text-sm font-bold`}>{config.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">
            {config.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">{config.description}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-600 dark:text-slate-400 text-sm font-semibold">
              Étape {currentSection + 1} / {totalSections}
            </span>
            <span className={`${c.text} text-sm font-bold`}>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${c.bg.replace("/10", "")} ${c.text.replace("text", "bg")} transition-all duration-500 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Section dots */}
          <div className="flex items-center gap-1.5 mt-4 flex-wrap">
            {config.sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => i < currentSection && setCurrentSection(i)}
                className="flex items-center gap-1"
                title={s.title}
              >
                {i < currentSection ? (
                  <CheckCircle className={`w-4 h-4 ${c.text}`} />
                ) : i === currentSection ? (
                  <Circle className={`w-4 h-4 ${c.text} fill-current`} />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Section content */}
        <div className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{section.subtitle}</p>
          )}
          <div className="space-y-5 mt-6">
            {visibleQuestions.map((q) => (
              <div key={q.id}>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                  {q.label}
                  {q.scoreWeight !== undefined && (
                    <span className={`ml-2 ${c.text} text-xs font-normal`}>
                      ({q.scoreWeight} pt{q.scoreWeight > 1 ? "s" : ""})
                    </span>
                  )}
                </label>

                {q.type === "text" && (
                  <input
                    type="text"
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    className={inputClass}
                    placeholder={q.placeholder}
                  />
                )}

                {q.type === "number" && (
                  <input
                    type="number"
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    className={inputClass}
                    placeholder={q.placeholder}
                  />
                )}

                {q.type === "textarea" && (
                  <textarea
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    className={`${inputClass} resize-none`}
                    rows={3}
                    placeholder={q.placeholder}
                  />
                )}

                {q.type === "radio" && (
                  <div className="flex flex-wrap gap-3">
                    {q.options?.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChange(q.id, opt)}
                        className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                          answers[q.id] === opt
                            ? `${c.bg} ${c.border} ${c.text} border`
                            : "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {q.type === "checkbox" && (
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {q.options?.map((opt) => {
                      const currentSelection = (answers[q.id] as string[]) || [];
                      const isSelected = currentSelection.includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => {
                            const newSelection = isSelected
                              ? currentSelection.filter((v) => v !== opt)
                              : [...currentSelection, opt];
                            handleChange(q.id, newSelection);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                            isSelected
                              ? `${c.bg} ${c.border} ${c.text} border`
                              : "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${
                            isSelected ? `${c.text} border-current` : "border-slate-300 dark:border-slate-600"
                          }`}>
                            {isSelected && <CheckCircle className="w-4 h-4" />}
                          </div>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {showError && (
            <div className="flex items-center gap-2 mt-6 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Veuillez répondre aux questions obligatoires avant de continuer.
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 text-sm font-semibold transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            {currentSection === 0 ? "Retour" : "Précédent"}
          </button>
          <button
            onClick={handleNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl ${c.btn} font-bold text-sm transition-all hover:shadow-lg`}
          >
            {currentSection === totalSections - 1 ? (
              <>
                Voir mes résultats
                <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
