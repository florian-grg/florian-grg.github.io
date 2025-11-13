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

  return (
    <>
      <Seo title={t('contact.seo.title')} description={t('contact.seo.description')} />
      <section id="contact" className="w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold">{t('contact.title')}</h1>
            <p className="text-black mt-3">
              {t('contact.description')}
            </p>
            <a
              href="mailto:florian.giurgiu3@gmail.com"
              className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
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
                  className="text-green-600 font-semibold text-center py-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {t('contact.success')}
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