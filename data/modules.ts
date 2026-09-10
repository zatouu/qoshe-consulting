import { Shield, Award, Leaf, GraduationCap, Search, CheckSquare } from "lucide-react";

type LucideIcon = typeof Shield;

export interface RegulatoryRef {
  summary: string;
  references: string[];
}

export interface QosheModule {
  id: string;
  legacyId: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  border: string;
  ref: string;
  description: string;
  items: string[];
  longDescription: string;
  benefits: string[];
  deliverables: string[];
  methodology: string[];
  regulatory: RegulatoryRef;
}

export const modules: QosheModule[] = [
  {
    id: "sst",
    legacyId: "01",
    icon: Shield,
    title: "Sécurité & Santé au Travail",
    subtitle: "Module SST",
    color: "text-red-400",
    border: "border-red-400/20",
    ref: "ISO 45001",
    description:
      "Document Unique, PPSPS, Coordination SPS, permis de travail, audits sécurité chantier et investigation accidents.",
    items: [
      "Document Unique (DU) par poste et par chantier",
      "Rédaction PPSPS, PGC et DIUO",
      "Coordination SPS OP1 / OP2 / OP3",
      "Mise à disposition d'agent(s) HSE terrain",
      "Audit sécurité chantier (grille personnalisée)",
      "Analyse des accidents et quasi-accidents",
      "Permis de travail (hauteur, confiné, chaud, électrique)",
    ],
    longDescription:
      "Nous sécurisons vos chantiers et postes de travail en construisant un système de prévention adapté à vos risques réels. De l'évaluation des dangers à l'investigation des accidents, chaque action vise à réduire la fréquence et la gravité des accidents du travail.",
    benefits: [
      "Réduction du taux de fréquence et de gravité des accidents",
      "Conformité réglementaire et responsabilité maîtrisée",
      "Culture sécurité ancrée dans les équipes",
      "Moins d'arrêts imprévus et de retards chantier",
    ],
    deliverables: [
      "Document Unique d'Évaluation des Risques Professionnels (DUERP)",
      "Plans de Prévention et PPSPS chantier",
      "Registre des accidents et quasi-accidents",
      "Permis de travail sécurisés",
      "Rapports d'audits et plans d'action",
    ],
    methodology: [
      "Diagnostic terrain et cartographie des risques",
      "Rédaction des documents réglementaires",
      "Formation et sensibilisation des équipes",
      "Suivi des indicateurs et retour d'expérience",
    ],
    regulatory: {
      summary:
        "Au Sénégal, la prévention des risques professionnels et la sécurité des travailleurs s'appuient sur le Code du travail (Loi n°97-17 du 1er décembre 1997), le Décret n°2006-1256 du 15 novembre 2006 fixant les obligations des employeurs en matière de sécurité au travail, ainsi que les Décrets n°2006-1249 à 1252 du 15 novembre 2006 qui détaillent les obligations en BTP (coordination SPS, équipements de travail, circulation des engins, prescriptions minimales d'ambiance).",
      references: [
        "Code du travail du Sénégal — Titre 11 Hygiène et sécurité",
        "Décret n° 2006-1256 du 15 novembre 2006 — obligations de l'employeur en SST",
        "Décret n° 2006-1249 du 15 novembre 2006 — coordination SPS sur les chantiers",
        "Décret n° 2006-1251 du 15 novembre 2006 — équipements de travail",
        "Décret n° 2006-1252 du 15 novembre 2006 — facteurs physiques d'ambiance",
        "Norme ISO 45001 — système de management SST",
      ],
    },
  },
  {
    id: "qualite",
    legacyId: "02",
    icon: Award,
    title: "Management Qualité",
    subtitle: "Module Qualité",
    color: "text-blue-400",
    border: "border-blue-400/20",
    ref: "ISO 9001",
    description:
      "Système de Management Qualité, gestion des non-conformités, revues de direction et audits internes.",
    items: [
      "Diagnostic qualité & cartographie des processus",
      "Mise en place du SMQ",
      "Gestion des non-conformités",
      "Revue de direction avec tableaux de bord",
      "Audit interne & formation auditeurs",
    ],
    longDescription:
      "Nous structurons votre démarche qualité pour améliorer la satisfaction client, fiabiliser vos processus et préparer sereinement une certification ISO 9001. Le tout avec des outils simples et actionnables au quotidien.",
    benefits: [
      "Processus clairs et maîtrisés",
      "Moins de non-conformités et de retours clients",
      "Préparation efficace à la certification ISO 9001",
      "Données de pilotage fiables pour la direction",
    ],
    deliverables: [
      "Cartographie des processus",
      "Procédures qualité et modes opératoires",
      "Plan de maîtrise documentaire",
      "Tableaux de bord et indicateurs",
      "Rapports d'audit interne",
    ],
    methodology: [
      "Analyse des processus existants",
      "Identification des exigences et écarts",
      "Rédaction et validation des documents",
      "Accompagnement au déploiement et audits",
    ],
    regulatory: {
      summary:
        "Le management qualité au Sénégal n'est pas imposé par la loi, mais constitue un levier pour l'accès aux marchés publics, les appels d'offres et la compétitivité. Le Code du travail et le Code de l'environnement renvoient à une gestion documentée des activités. La certification ISO 9001 est la référence internationale reconnue pour démontrer la maîtrise des processus et la satisfaction client.",
      references: [
        "Norme ISO 9001:2015 — exigences pour un système de management de la qualité",
        "Code du travail — obligations de transparence et de loyauté envers les travailleurs",
        "Code des marchés publics du Sénégal — critères qualité et traçabilité",
        "Guide ARMP — contrôle qualité dans les marchés publics",
      ],
    },
  },
  {
    id: "environnement",
    legacyId: "03",
    icon: Leaf,
    title: "Environnement",
    subtitle: "Module Environnemental",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    ref: "ISO 14001",
    description:
      "Études d'impact, plan de gestion environnementale, traçabilité des déchets et mise en place du SMIE.",
    items: [
      "Étude d'impact environnemental (EIES)",
      "Plan de gestion environnementale (PGE)",
      "Traçabilité des déchets",
      "Mise en place du SMIE",
    ],
    longDescription:
      "Nous vous aidons à intégrer l'environnement dans votre stratégie opérationnelle : conformité réglementaire, réduction des impacts, maîtrise des déchets et préparation ISO 14001, tout en valorisant votre démarche auprès de vos parties prenantes.",
    benefits: [
      "Maîtrise des impacts environnementaux",
      "Réduction des coûts liés aux déchets et aux consommations",
      "Image responsable et différenciante",
      "Préparation à la certification ISO 14001",
    ],
    deliverables: [
      "Étude d'impact environnemental et social (EIES)",
      "Plan de gestion environnementale",
      "Registre des déchets et traçabilité",
      "Procédures environnementales",
      "Rapports de suivi",
    ],
    methodology: [
      "Identification des aspects environnementaux",
      "Évaluation des impacts et des exigences légales",
      "Définition des objectifs et programmes",
      "Déploiement, formation et audits",
    ],
    regulatory: {
      summary:
        "Le Sénégal dispose d'un cadre règlementaire environnemental solide, à commencer par l'Ordonnance n°96-005 du 12 janvier 1996 portant Code de l'environnement et la Loi n°2013-10 du 28 février 2013 relative au renforcement des mesures de protection de l'environnement. Les projets soumis à étude d'impact doivent respecter les arrêtés du Ministère de l'Environnement et du Développement durable.",
      references: [
        "Ordonnance n° 96-005 du 12 janvier 1996 — Code de l'environnement",
        "Loi n° 2013-10 du 28 février 2013 — renforcement des mesures de protection de l'environnement",
        "Décret n° 2001-234 du 10 mai 2001 — procédures d'étude d'impact environnemental",
        "Norme ISO 14001:2015 — système de management environnemental",
        "Arrêtés ministériels — classement des établissements et installations classées",
      ],
    },
  },
  {
    id: "formation",
    legacyId: "04",
    icon: GraduationCap,
    title: "Formation & Compétences",
    subtitle: "Module Formation",
    color: "text-amber-400",
    border: "border-amber-400/20",
    ref: "Sur mesure",
    description:
      "Formations SST, habilitations électriques, travail en hauteur, conduite d'engins, référents QHSE.",
    items: [
      "Sensibilisation SST & premiers secours",
      "Habilitations électriques (B0-B2 / BC-BR)",
      "Travail en hauteur & EPI antichute",
      "Conduite d'engins (appui CACES)",
      "Formations référents QHSE",
      "Sauvetage secourisme (SST)",
    ],
    longDescription:
      "Nous montons des programmes de formation conçus pour le terrain, avec des mises en situation réelles et un suivi des compétences. L'objectif : rendre vos équipes autonomes et conscientes des risques.",
    benefits: [
      "Équipes formées et compétentes",
      "Réduction des comportements à risque",
      "Conformité aux habilitations réglementaires",
      "Référents QHSE identifiés et opérationnels",
    ],
    deliverables: [
      "Plan de formation annuel",
      "Supports de formation personnalisés",
      "Attestations et registres de compétences",
      "Évaluations et exercices pratiques",
      "Bilan pédagogique",
    ],
    methodology: [
      "Analyse des besoins et des publics",
      "Conception de modules pédagogiques",
      "Animation en présentiel ou sur site",
      "Évaluation des acquis et suivi",
    ],
    regulatory: {
      summary:
        "La formation professionnelle au Sénégal est encadrée par le Code du travail, notamment les articles relatifs à l'adaptation des travailleurs à leur poste et à la sécurité. Les habilitations électriques, travail en hauteur, conduite d'engins et premiers secours doivent être prouvées par des certificats conformes aux référentiels professionnels et aux arrêtés en vigueur.",
      references: [
        "Code du travail — Titre 7 Formation professionnelle",
        "Décret n° 2006-1256 du 15 novembre 2006 — information et formation des travailleurs",
        "Référentiels professionnels B0-B2 / BC-BR — habilitations électriques",
        "CACES et attestations de conduite d'engins",
        "Arrêtés ministériels — formations obligatoires SST",
      ],
    },
  },
  {
    id: "diagnostic-audit",
    legacyId: "05",
    icon: Search,
    title: "Diagnostic & Audit",
    subtitle: "Module Audit",
    color: "text-purple-400",
    border: "border-purple-400/20",
    ref: "Évaluation",
    description:
      "Audit flash, audit approfondi, évaluation fournisseurs, due diligence QHSE pour acquisitions et financements.",
    items: [
      "Audit flash (1-2 jours)",
      "Audit approfondi (3-5 jours)",
      "Audit fournisseurs / sous-traitants",
      "Due diligence QHSE",
    ],
    longDescription:
      "Nous réalisons des diagnostics objectifs et factuels pour mesurer votre maturité QHSE, identifier vos priorités et préparer vos décisions. De l'audit flash à la due diligence, chaque mission livre des recommandations concrètes et chiffrées.",
    benefits: [
      "Vision claire de la situation QHSE",
      "Identification des priorités et des économies possibles",
      "Réduction des risques fournisseurs et partenaires",
      "Appui factuel aux décisions stratégiques",
    ],
    deliverables: [
      "Rapport d'audit avec score et écarts",
      "Plan d'action priorisé",
      "Fiche d'évaluation fournisseur",
      "Rapport de due diligence",
      "Synthèse direction",
    ],
    methodology: [
      "Définition du périmètre et des critères",
      "Collecte de données sur documents et terrain",
      "Analyse des écarts et des risques",
      "Restitution et plan d'action",
    ],
    regulatory: {
      summary:
        "L'audit et le diagnostic QHSE au Sénégal s'appuient sur les exigences du Code du travail, du Code de l'environnement et des normes ISO. Ils permettent d'évaluer la conformité, d'identifier les écarts et de prioriser les actions. La due diligence QHSE est de plus en plus demandée dans les financements, fusions et appels d'offres.",
      references: [
        "Code du travail — Titre 11 Hygiène et sécurité",
        "Ordonnance n° 96-005 — Code de l'environnement",
        "Décret n° 2006-1256 du 15 novembre 2006 — obligations des employeurs",
        "Normes ISO 19011 — lignes directrices pour l'audit de management",
        "Standards sectoriels — audit fournisseurs et sous-traitants",
      ],
    },
  },
  {
    id: "certification",
    legacyId: "06",
    icon: CheckSquare,
    title: "Accompagnement Certification",
    subtitle: "Module Certification",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    ref: "Certification",
    description:
      "Accompagnement complet vers la certification ISO 9001, 14001, 45001 ou système intégré QSE.",
    items: [
      "ISO 9001 — Qualité",
      "ISO 14001 — Environnement",
      "ISO 45001 — Sécurité",
      "Management intégré QSE (3 référentiels)",
    ],
    longDescription:
      "Nous vous accompagnons de la décision à l'obtention de la certification, en structurant votre système, formant vos équipes et préparant les audits organismes. Un objectif : la certification en 1ère intention.",
    benefits: [
      "Accompagnement structuré et rassurant",
      "Gain de temps et d'efficacité",
      "Système intégré cohérent et durable",
      "Valorisation auprès des clients et appels d'offres",
    ],
    deliverables: [
      "Diagnostic écart et plan de route",
      "Manuel et procédures certifiables",
      "Formation des équipes et auditeurs internes",
      "Préparation aux audits de certification",
      "Suivi post-certification",
    ],
    methodology: [
      "Diagnostic initial et plan de projet",
      "Conception du système de management",
      "Déploiement et sensibilisation",
      "Audit interne et audit de préparation",
    ],
    regulatory: {
      summary:
        "Au Sénégal, la certification ISO 9001, 14001 et 45001 est reconnue par l'ANOR (Agence nationale d'organisme de règlementation) et les organismes certificateurs agréés. Elle constitue un atout majeur pour les appels d'offres publics et privés. Notre accompagnement intègre les exigences ISO, le Code du travail et les arrêtés sectoriels applicables.",
      references: [
        "Normes ISO 9001, 14001 et 45001:2015",
        "Loi n° 97-17 du 1er décembre 1997 — Code du travail",
        "Ordonnance n° 96-005 du 12 janvier 1996 — Code de l'environnement",
        "Décret n° 2006-1256 du 15 novembre 2006 — SST",
        "Arrêtés ministériels et référentiels sectoriels (BTP, agro, hôtellerie)",
      ],
    },
  },
];

export function getModuleById(id: string): QosheModule | undefined {
  return modules.find((m) => m.id === id);
}
