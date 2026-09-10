export const CONTACT_EMAIL = "contact@qosheconsulting.com";

// Adresses email à mettre en copie (CC) pour les demandes de devis.
// À vérifier avec l'équipe QOSHE si le domaine est différent.
export const CC_EMAILS = ["daouda.diagne@qosheconsulting.com", "ladara.diagne@qosheconsulting.com"];

export function getModuleMailto(
  moduleTitle: string,
  moduleSubtitle: string,
  message = ""
): string {
  const subject = encodeURIComponent(`Demande d'information — ${moduleTitle}`);
  const body = encodeURIComponent(
    `Bonjour QOSHE Consulting,\n\n` +
      `Je souhaite obtenir plus d'informations sur le module suivant :\n` +
      `• ${moduleTitle} (${moduleSubtitle})\n\n` +
      (message ? `${message}\n\n` : "") +
      `Merci de me recontacter pour préciser mes besoins.\n\n` +
      `Cordialement,`
  );
  const cc = CC_EMAILS.join(",");
  return `mailto:${CONTACT_EMAIL}?cc=${encodeURIComponent(cc)}&subject=${subject}&body=${body}`;
}
