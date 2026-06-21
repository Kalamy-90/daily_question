import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Mail, MessageCircle, Sparkles, TrendingUp, UserPlus, Users } from 'lucide-react';
import { sectionAnimation, itemAnimation } from '@/data/content';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const ContactLink = ({ href, children, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-100 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/35 hover:bg-white/[0.08] hover:text-amber-100"
  >
    <span className="inline-flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-200/20 bg-amber-300/10 text-amber-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      {children}
    </span>
    <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-amber-200" aria-hidden="true" />
  </a>
);

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const about = t.about;

  const highlights = [
    { icon: Bot, text: about.highlights.customBots },
    { icon: Sparkles, text: about.highlights.dailyQuestion },
    { icon: UserPlus, text: about.highlights.joinTeam },
  ];

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden py-24"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-16 left-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-subtitle">{about.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Colonne gauche : La Kalamy's Team + LexiBourse */}
          <div className="flex flex-col gap-6 h-full">
            <motion.article
              custom={0}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="premium-card"
            >
              <div className="relative z-10 flex flex-col p-7 sm:p-9">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200/25 bg-amber-300/10 text-amber-200 shadow-xl shadow-amber-950/20">
                    <Users className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-amber-100">{about.teamTitle}</h3>
                </div>

                <div className="space-y-7 text-base leading-8 text-slate-300 sm:space-y-8">
                  {about.teamParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 py-8 sm:mt-5 sm:grid-cols-3 sm:py-9">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold leading-6 text-slate-200">
                      <Icon className="mb-3 h-6 w-6 text-amber-200" aria-hidden="true" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Bloc LexiBourse */}
            <motion.article
              custom={1}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="premium-card"
            >
              <div className="relative z-10 p-7 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-green-400/25 bg-green-400/10 text-green-300 shadow-xl shadow-green-950/20">
                    <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-amber-100">LexiBourse</h3>
                </div>
                <p className="mb-6 text-sm leading-7 text-slate-300">
                  {language === 'fr'
                    ? "LexiBourse est l'autre projet phare de la Kalamy's Team. Ce bot Discord transforme les conversations de votre serveur en un véritable marché boursier dynamique : chaque mot devient une action à acheter, vendre et spéculer."
                    : "LexiBourse is another flagship project from Kalamy's Team. This Discord bot turns your server's conversations into a real dynamic stock market: every word becomes a stock to buy, sell, and speculate on."}
                </p>
                <ContactLink href="https://lexibourse.netlify.app/" icon={TrendingUp}>
                  {language === 'fr' ? 'Découvrir LexiBourse' : 'Discover LexiBourse'}
                </ContactLink>
              </div>
            </motion.article>
          </div>

          {/* Colonne droite : Nous contacter + À propos de Kalamy */}
          <div className="flex flex-col gap-6">
            <motion.aside
              custom={2}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="premium-card"
            >
              <div className="relative z-10 p-7 sm:p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-amber-100">{about.contactTitle}</h3>
                <p className="mb-6 text-sm leading-7 text-slate-300">{about.contactIntro}</p>
                <div className="grid gap-3">
                  <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>{about.discordLabel}</ContactLink>
                  <ContactLink href="mailto:kalamys.team@gmail.com" icon={Mail}>kalamys.team@gmail.com</ContactLink>
                </div>
              </div>
            </motion.aside>

            <motion.aside
              custom={3}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="premium-card"
            >
              <div className="relative z-10 p-7 sm:p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-amber-100">{about.kalamyTitle}</h3>
                <p className="mb-6 text-sm leading-7 text-slate-300">{about.kalamyDescription}</p>
                <div className="grid gap-3">
                  <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>{about.discordContactLabel}</ContactLink>
                  <ContactLink href="mailto:kalamy.pro@gmail.com" icon={Mail}>kalamy.pro@gmail.com</ContactLink>
                  <ContactLink href="https://fr.fiverr.com/s/DBp51wo" icon={ExternalLink}>{about.fiverrLabel}</ContactLink>
                </div>
                <p className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm font-semibold leading-7 text-amber-100/90">
                  {about.closing}
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
