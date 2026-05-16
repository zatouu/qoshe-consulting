import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import QosheLogo from "@/components/QosheLogo";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Prestations", href: "#prestations" },
  { label: "Solutions innovantes", href: "#solutions" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Sécurité & Santé au Travail",
  "Management Qualité",
  "Environnement",
  "Formation & Compétences",
  "Diagnostic & Audit",
  "Accompagnement Certification",
];

export default function Footer() {
  return (
    <footer className="footer-surface border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#accueil" className="inline-block mb-5 w-fit">
              <QosheLogo iconSize={44} showBar />
            </a>
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
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">Nos modules</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#prestations"
                    className="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                Sénégal — Dakar &amp; régions
              </li>
              <li>
                <a
                  href="mailto:contact@qoshe-consulting.com"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  contact@qoshe-consulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+221000000000"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  +221 XX XXX XX XX
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50 rounded-lg flex items-center justify-center hover:border-amber-400/40 hover:text-amber-500 dark:hover:text-amber-400 text-slate-400 dark:text-slate-500 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50 rounded-lg flex items-center justify-center hover:border-amber-400/40 hover:text-amber-500 dark:hover:text-amber-400 text-slate-400 dark:text-slate-500 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} QOSHE Consulting. Tous droits réservés.
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
