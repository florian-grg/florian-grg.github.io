import React, { useRef, useState } from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { sendEmail } from "../utils/email";
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    sendEmail(form)
      .then(() => {
        setSent(true);
        setLoading(false);
      })
      .catch(() => {
        setError(t('contact.error'));
        setLoading(false);
      });
  };

  const goTo = (path, hash) => {
    window.location.href = window.location.origin + path + hash;
  };

  return (
    <>
      <Seo title={t('contact.seo.title')} description={t('contact.seo.description')} />
      <section id="contact" className="w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold">{t('contact.title')}</h1>
            <p className="text-slate-700 mt-3">
              {t('contact.description')}
            </p>
            <a
              href="mailto:florian.giurgiu3@gmail.com"
              className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-95 transition"
            >
              florian.giurgiu3@gmail.com
            </a>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 shadow p-6 w-full max-w-xl"
            >
              {sent ? (
                <motion.div
                  className="flex flex-col items-center gap-4 text-slate-800 font-semibold py-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center">{t('contact.success')}</div>
                  <button
                    className="mt-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3.5 rounded-lg font-semibold shadow hover:opacity-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:to-purple-600 text-white font-semibold py-3 rounded-md shadow-md hover:scale-105 transition-all duration-200"
                    onClick={() => goTo('#/', '')}
                    aria-label={t('contact.return')}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t('contact.return')}
                    </span>
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={form}
                  onSubmit={handleSendEmail}
                  className="w-full flex flex-col gap-5"
                >
              {/* Nom */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>

              {/* Sujet (menu déroulant) */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-lg font-medium text-gray-700"
                >
                  {t('contact.form.subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  required
                >
                  <option value="">{t('contact.form.subjectPlaceholder')}</option>
                  <option value="web">{t('contact.form.subjectOptions.web')}</option>
                  <option value="application">{t('contact.form.subjectOptions.application')}</option>
                  <option value="optimisation-IA">{t('contact.form.subjectOptions.optimisation')}</option>
                  <option value="conseil-accompagnement">{t('contact.form.subjectOptions.conseil')}</option>
                  <option value="question-generale">{t('contact.form.subjectOptions.question')}</option>
                  <option value="autre">{t('contact.form.subjectOptions.autre')}</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-700"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-3 rounded-md shadow-md hover:scale-105 transition-all duration-200"
              >
                {loading ? t('contact.form.sending') : t('contact.form.send')}
              </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;