"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all text-sm";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0A0E1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-sm font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Parlons de votre{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              projet QHSE
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Premier contact gratuit. Réponse garantie sous 24h ouvrées.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6 space-y-5"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@qosheconsulting.com",
                  href: "mailto:contact@qosheconsulting.com",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+221 77 633 93 25 / +221 77 274 25 00",
                  href: "tel:+221776339325",
                },
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: "712 Nord Foire Azur, Rue 174 — Dakar / Yoff, Sénégal",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-amber-400/10 border border-amber-400/20 rounded-xl shrink-0">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 dark:text-white font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6"
            >
              <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest mb-3">
                Secteurs couverts
              </p>
              <div className="flex flex-wrap gap-2">
                {["BTP", "Hôtellerie", "Agroalimentaire", "Industrie", "Ferroviaire", "Services"].map(
                  (s) => (
                    <span
                      key={s}
                      className="bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-6"
            >
              <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-widest mb-3">
                Référentiels maîtrisés
              </p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001", "ISO 14001", "ISO 45001", "Code du Travail", "Décret 2006-1249"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className="surface-card rounded-2xl border border-slate-200 dark:border-slate-800/60 p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                    Nous vous recontactons sous 24h ouvrées. Merci de votre confiance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                        Entreprise
                      </label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="email@entreprise.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                        Téléphone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                      Prestation souhaitée
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" className="bg-white dark:bg-slate-900">
                        Sélectionner un service
                      </option>
                      <option value="audit" className="bg-white dark:bg-slate-900">
                        Audit flash gratuit
                      </option>
                      <option value="sst" className="bg-white dark:bg-slate-900">
                        Sécurité &amp; Santé au Travail
                      </option>
                      <option value="qualite" className="bg-white dark:bg-slate-900">
                        Management Qualité
                      </option>
                      <option value="environnement" className="bg-white dark:bg-slate-900">
                        Environnement
                      </option>
                      <option value="formation" className="bg-white dark:bg-slate-900">
                        Formation &amp; Compétences
                      </option>
                      <option value="certification" className="bg-white dark:bg-slate-900">
                        Accompagnement Certification
                      </option>
                      <option value="abonnement" className="bg-white dark:bg-slate-900">
                        Abonnement mensuel
                      </option>
                      <option value="autre" className="bg-white dark:bg-slate-900">
                        Autre
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 text-sm font-semibold mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Décrivez votre besoin QHSE, votre secteur d'activité et vos principaux enjeux..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-black py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/20 text-base"
                  >
                    Envoyer ma demande
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-slate-400 dark:text-slate-600 text-xs">
                    Réponse garantie sous 24h ouvrées · Diagnostic initial gratuit
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
