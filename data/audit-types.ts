export type QuestionType = "text" | "number" | "textarea" | "radio" | "checkbox";

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  placeholder?: string;
  options?: string[];
  conditional?: { questionId: string; value: string };
  scoreWeight?: number;
  scoreType?: "positive" | "negative";
}

export interface AuditSection {
  id: string;
  title: string;
  subtitle?: string;
  questions: Question[];
  maxScore: number;
}

export interface Recommendation {
  threshold: number;
  title: string;
  text: string;
  actions: string[];
}

export interface AuditConfig {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  badge: string;
  sections: AuditSection[];
  recommendations: Recommendation[];
}

export interface AuditAnswer {
  [questionId: string]: string | string[];
}
