<!--
SYNC IMPACT REPORT
==================
Version change    : [template non versionné] → 1.0.0
Bump rationale    : MAJOR — première ratification ; établissement des cinq principes fondateurs
                    et de la gouvernance complète du projet.
Principles added  : I. Fidélité au contenu métier
                    II. Performance & Accessibilité
                    III. Mobile-First
                    IV. Orientation Conversion & CTA Clair
                    V. Maintenabilité & Autonomie client
Sections added    : Contraintes Techniques, Workflow de Développement, Governance
Sections removed  : N/A (première version)
Templates checked :
  .specify/templates/plan-template.md  ✅ aligné — Constitution Check sera peuplé lors de /speckit.plan
  .specify/templates/spec-template.md  ✅ aligné — FR/SC reflètent les contraintes de la constitution
  .specify/templates/tasks-template.md ✅ aligné — pas de nouveau type de tâche lié aux principes requis
  .specify/templates/commands/         ✅ aucun fichier command — rien à mettre à jour
Deferred TODOs    :
  TODO(STACK_FINAL)      : Framework SSG/SSR non encore confirmé (Next.js, Astro…)
  TODO(HOSTING_PLATFORM) : Hébergeur non encore confirmé (Vercel, Netlify, VPS Sénégal)
-->

# QOSHE Consulting — Site Web Constitution

## Core Principles

### I. Fidélité au contenu métier

Le site DOIT refléter avec exactitude l'identité, les prestations, la philosophie et les références
de QOSHE Consulting telles que définies dans les documents source validés par le client.

- Toute section de contenu DOIT être vérifiable dans les sources approuvées (qoshe-siteweb.txt).
- Aucune compétence, certification ou secteur non confirmé ne DOIT être affiché.
- Les tarifs et offres (Essentiel / Performance / Excellence) DOIVENT correspondre exactement
  aux montants et périmètres définis par QOSHE.
- Toute modification de contenu DOIT faire l'objet d'une validation explicite du client avant
  publication.

**Rationale** : La crédibilité d'un cabinet QHSE repose sur la précision et la vérifiabilité.
Une inexactitude sur les certifications ou les secteurs d'activité engage la responsabilité
professionnelle du cabinet.

### II. Performance & Accessibilité (NON-NÉGOCIABLE)

Le site DOIT atteindre un score Lighthouse ≥ 90 sur Performance, Accessibilité et SEO avant
toute mise en production.

- Le Largest Contentful Paint (LCP) DOIT être inférieur à 2,5 s sur connexion 4G simulée.
- Toutes les images DOIVENT utiliser des formats modernes (WebP/AVIF) avec attributs `alt` renseignés.
- Le site DOIT être entièrement fonctionnel sans JavaScript activé pour les parcours critiques
  (pages de services, formulaire de contact).
- Le contraste texte/fond DOIT respecter WCAG 2.1 niveau AA (ratio ≥ 4,5:1).

**Rationale** : Les professionnels du BTP et de l'industrie consultent souvent sur mobile en
conditions réseau dégradées (zones de chantier). La performance est une exigence métier, pas
un bonus technique. L'accessibilité DOIT être traitée comme une obligation, pas une option.

### III. Mobile-First (NON-NÉGOCIABLE)

Toute interface DOIT être conçue et validée sur mobile avant d'être adaptée au desktop.

- Les maquettes DOIVENT être livrées en version mobile (375 px) avant toute déclinaison desktop.
- Les breakpoints DOIVENT couvrir : 320 px, 375 px, 768 px, 1024 px, 1280 px.
- Les zones interactives (boutons, liens, formulaires) DOIVENT avoir une taille minimale de 44 × 44 px.
- Les formulaires DOIVENT rester entièrement utilisables avec le clavier virtuel mobile sans
  masquer les champs actifs.

**Rationale** : Les décideurs et les équipes terrain QHSE utilisent majoritairement des smartphones.
Un site non mobile-first exclut la majorité de la cible commerciale de QOSHE.

### IV. Orientation Conversion & CTA Clair

Chaque page DOIT comporter au minimum un appel à l'action (CTA) primaire explicite dirigeant
vers le diagnostic gratuit ou le formulaire de contact.

- Le tunnel de conversion DOIT suivre le chemin : Découverte → Prestation → CTA → Confirmation.
- Aucune page ne DOIT laisser le visiteur sans chemin suivant clairement identifié.
- Un visiteur DOIT pouvoir initier un contact avec QOSHE en moins de 3 clics depuis n'importe
  quelle page.
- Les formulaires DOIVENT déclencher une confirmation immédiate (message de succès ou redirection).

**Rationale** : Le site est un outil commercial dont la performance se mesure en leads générés,
pas en pages vues. Chaque fonctionnalité non reliée à la conversion DOIT justifier son existence.

### V. Maintenabilité & Autonomie client

Le client DOIT pouvoir mettre à jour les contenus (textes, tarifs, références sectorielles) sans
intervention de développeur après livraison.

- Le contenu DOIT être géré via un CMS headless ou des fichiers Markdown/JSON versionés,
  accessibles depuis une interface non-technique.
- Le code DOIT être documenté pour qu'un développeur sans connaissance préalable de l'architecture
  puisse intervenir en moins d'une demi-journée de prise en main.
- Les dépendances tierces DOIVENT être minimisées : toute dépendance DOIT apporter une valeur
  mesurable et documentée ; les bibliothèques abandonnées DOIVENT être remplacées.

**Rationale** : QOSHE est une structure indépendante. La dépendance technologique créerait
un coût opérationnel incompatible avec leur modèle. Ce principe reflète directement la philosophie
du cabinet : "Autonomie avant dépendance".

## Contraintes Techniques

- **Stack cible** : Framework SSG/SSR (Next.js, Astro ou équivalent) —
  TODO(STACK_FINAL): confirmation requise avant /speckit.plan
- **Hébergement** : TODO(HOSTING_PLATFORM): Vercel / Netlify / VPS Sénégal —
  à confirmer selon contraintes de budget et de latence locale
- **Langue** : Français uniquement en v1. L'architecture DOIT permettre l'ajout
  de l'anglais sans refonte de la structure.
- **Conformité données** : Tout formulaire collectant des données personnelles DOIT respecter
  la loi sénégalaise n°2008-12 sur la protection des données personnelles (CDP).
- **SEO local** : Les métadonnées DOIVENT cibler les mots-clés sectoriels :
  QHSE Sénégal, BTP Dakar, sécurité chantier, ISO 45001 Afrique de l'Ouest.
- **Analytique** : Un outil d'analyse respectueux de la vie privée DOIT être intégré
  (Plausible, Umami ou équivalent sans cookie de tracking tiers).

## Workflow de Développement

- Toute fonctionnalité DOIT passer par une spécification `/speckit.specify` avant tout développement.
- Les livrables visuels (wireframes, maquettes) DOIVENT être validés par le client AVANT
  le développement front-end correspondant.
- Les revues de contenu DOIVENT impliquer QOSHE Consulting pour validation explicite avant
  toute publication.
- Les tests Lighthouse et d'accessibilité DOIVENT être exécutés et archivés avant chaque
  déploiement en production.
- Le déploiement DOIT transiter par un environnement de recette (staging) accessible au client
  pour validation finale.
- Toute dette technique introduite DOIT être documentée et planifiée pour résolution.

## Governance

Cette constitution DOIT primer sur tout autre document de cadrage technique ou éditorial du projet.

Tout amendement DOIT être documenté avec : motif, périmètre d'impact, date d'effet, et validation
du responsable projet. Les spécifications et plans DOIVENT référencer les principes de cette
constitution dans leurs sections Constitution Check.

Politique de versionnage :

- **MAJOR** : suppression ou redéfinition incompatible d'un principe existant.
- **MINOR** : ajout d'un nouveau principe ou d'une section avec impact sur les gabarits.
- **PATCH** : clarification, correction orthographique ou reformulation sans impact sémantique.

Toute non-conformité détectée en revue DOIT être documentée et traitée dans l'itération suivante.
La complexité introduite au-delà des principes DOIT être justifiée explicitement dans le plan
d'implémentation correspondant.

**Version** : 1.0.0 | **Ratifiée** : 2026-05-10 | **Dernier amendement** : 2026-05-10
