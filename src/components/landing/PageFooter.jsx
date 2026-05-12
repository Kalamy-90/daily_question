import React from 'react';
import kalamyLogo from '@/assets/kalamy-team-logo.png';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const PageFooter = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/30 py-14 text-center text-slate-400 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 flex w-fit items-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-4 shadow-2xl shadow-black/20">
          <img src={kalamyLogo} alt="Kalamy Team" className="h-16 w-16 shrink-0 rounded-2xl border border-amber-200/40 bg-slate-950 object-cover shadow-xl shadow-amber-950/25 sm:h-20 sm:w-20" />
          <span className="font-display text-left text-xl font-bold leading-tight text-amber-100 sm:text-2xl">Construit par Kalamy Team</span>
        </div>
        <p className="mb-2 text-sm">© {currentYear} Daily Question. All rights reserved.</p>
        <p className="mb-8 text-sm">{t.footer.developedBy} <span className="font-semibold text-amber-100">@kalamy</span>.</p>
        <nav className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
          <a href="https://discord.com/oauth2/authorize?client_id=1181626669795119105" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-amber-100">{t.nav.invite}</a>
          <a href="https://discord.gg/wE6vjjCXW3" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-amber-100">{t.nav.support}</a>
          <a href="https://top.gg/bot/1181626669795119105" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-amber-100">{t.nav.vote}</a>
          <a href="/conditions-utilisation" className="text-slate-300 transition-colors hover:text-amber-100">{t.nav.terms}</a>
          <a href="/politique-confidentialite" className="text-slate-300 transition-colors hover:text-amber-100">{t.nav.privacy}</a>
        </nav>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.footer.technology}</p>
      </div>
    </footer>
  );
};

export default PageFooter;
