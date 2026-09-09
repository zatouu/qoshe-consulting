import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import QosheLogo from "@/components/QosheLogo";
import { modules } from "@/data/modules";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Prestations", href: "#prestations" },
  { label: "Méthode", href: "#methode" },
  { label: "Solutions innovantes", href: "#solutions" },
  { label: "Cas d'usage", href: "#references" },
  { label: "Ressources", href: "#ressources" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer-surface border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/#accueil" className="inline-block mb-5 w-fit">
              <QosheLogo iconSize={44} showBar />
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed mb-5">
              Cabinet QHSE spécialisé au Sénégal. Qualité, Orientation, Sécurité, Hygiène, Environnement.
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs italic border-l-2 border-amber-400/30 pl-3 leading-relaxed">
              &ldquo;Le cabinet QHSE orienté performance et réduction des coûts, pas juste conformité&rdquo;
            </p>
          </div>

          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">Nos modules</p>
            <ul className="space-y-3">
              {modules.map((mod) => (
                <li key={mod.id}>
                  <Link
                    href={`/modules/${mod.id}`}
                    className="text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {mod.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                12 Nord Foire Azur, Rue 174 — Dakar / Yoff, Sénégal
              </li>
              <li>
                <a
                  href="mailto:contact@qosheconsulting.com"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  contact@qosheconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+221776339325"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  +221 77 633 93 25 / +221 77 274 25 00
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <button
                aria-label="LinkedIn (bientôt disponible)"
                disabled
                className="w-9 h-9 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 cursor-not-allowed"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                aria-label="Twitter (bientôt disponible)"
                disabled
                className="w-9 h-9 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 cursor-not-allowed"
              >
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-slate-600 text-xs">
            &copy; {currentYear} QOSHE Consulting. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            {["ISO 9001", "ISO 14001", "ISO 45001"].map((iso, i) => (
              <span key={iso} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300 dark:text-slate-800">·</span>}
                <span className="text-slate-500 dark:text-slate-700 text-xs">{iso}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
