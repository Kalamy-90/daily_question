import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Mail, MessageCircle, Sparkles, UserPlus, Users } from 'lucide-react';
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

const AboutCard = ({ custom, icon: Icon, title, children, className = '' }) => (
  <motion.article
    custom={custom}
    variants={itemAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className={`premium-card h-full ${className}`}
  >
    <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200/25 bg-amber-300/10 p-3 text-amber-200 shadow-xl shadow-amber-950/20">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold text-amber-100 sm:text-3xl">{title}</h3>
      </div>
      {children}
    </div>
  </motion.article>
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

  const teamIntro = about.teamParagraphs.slice(0, 2);
  const servicesIntro = about.teamParagraphs.slice(2);

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

        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
          <AboutCard custom={0} icon={Users} title={about.teamTitle}>
            <div className="space-y-4 text-base leading-8 text-slate-300">
              {teamIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AboutCard>

          <AboutCard custom={1} icon={Sparkles} title={about.kalamyTitle}>
            <p className="text-base leading-8 text-slate-300">{about.kalamyDescription}</p>
            <p className="mt-5 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm font-semibold leading-7 text-amber-100/90">
              {about.closing}
            </p>
          </AboutCard>

          <AboutCard custom={2} icon={Bot} title={about.servicesTitle}>
            <div className="space-y-4 text-base leading-8 text-slate-300">
              {servicesIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold leading-6 text-slate-200">
                  <Icon className="mb-3 h-6 w-6 text-amber-200" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </AboutCard>

          <AboutCard custom={3} icon={MessageCircle} title={about.contactTitle}>
            <p className="mb-6 text-base leading-8 text-slate-300">{about.contactIntro}</p>
            <div className="grid gap-3">
              <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>{about.discordLabel}</ContactLink>
              <ContactLink href="mailto:kalamys.team@gmail.com" icon={Mail}>kalamys.team@gmail.com</ContactLink>
              <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>{about.discordContactLabel}</ContactLink>
              <ContactLink href="mailto:kalamy.pro@gmail.com" icon={Mail}>kalamy.pro@gmail.com</ContactLink>
              <ContactLink href="https://fr.fiverr.com/s/DBp51wo" icon={ExternalLink}>{about.fiverrLabel}</ContactLink>
            </div>
          </AboutCard>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
