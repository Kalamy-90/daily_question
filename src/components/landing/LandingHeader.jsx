import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Star, Menu as MenuIcon, X, ListChecks, HelpCircle, Zap, Sparkles } from 'lucide-react';
import dailyQuestionLogo from '@/assets/daily-question-logo.png';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const NavLink = ({ href, children, onClick, className = "" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:bg-white/7 hover:text-amber-100 ${className}`}
  >
    {children}
  </a>
);

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div className="ml-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
      <button 
        onClick={() => toggleLanguage('fr')}
        className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 ${language === 'fr' ? 'bg-amber-300 text-slate-950 shadow-lg shadow-amber-900/20' : 'text-slate-400 hover:text-white'}`}
        title="Français"
      >
        FR
      </button>
      <button 
        onClick={() => toggleLanguage('en')}
        className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-200 ${language === 'en' ? 'bg-amber-300 text-slate-950 shadow-lg shadow-amber-900/20' : 'text-slate-400 hover:text-white'}`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};

const LandingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#new-features", text: t.nav.new, icon: <Sparkles className="mr-3 h-5 w-5" /> },
    { href: "#features", text: t.nav.features, icon: <ListChecks className="mr-3 h-5 w-5" /> },
    { href: "#commands", text: t.nav.commands, icon: <Zap className="mr-3 h-5 w-5" /> },
    { href: "#faq", text: t.nav.faq, icon: <HelpCircle className="mr-3 h-5 w-5" /> },
  ];


  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } }
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
      <header 
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/10 bg-[#070812]/82 shadow-2xl shadow-black/30 backdrop-blur-2xl' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1040px] items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5 md:justify-center md:gap-8 lg:gap-10 xl:gap-12">
            <motion.a 
              href="#" 
              className="flex shrink-0 items-center gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={dailyQuestionLogo}
                alt="Logo Daily Question"
                className="h-10 w-10 rounded-full border border-amber-200/40 bg-slate-950 object-cover shadow-lg shadow-amber-950/20"
              />
              <span className="font-display text-xl font-bold tracking-wide text-amber-100">
                {t.hero.title}
              </span>
            </motion.a>

            <div className="hidden items-center md:flex">
              <nav className="flex items-center gap-1 md:gap-2">
                {navLinks.map(link => (
                  <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
                ))}
              </nav>
              <LanguageSelector />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => toggleLanguage('fr')} className={`rounded-full px-2 py-1 text-xs font-bold ${language === 'fr' ? 'bg-amber-300 text-slate-950' : 'text-slate-400'}`}>
                FR
              </button>
              <button onClick={() => toggleLanguage('en')} className={`rounded-full px-2 py-1 text-xs font-bold ${language === 'en' ? 'bg-amber-300 text-slate-950' : 'text-slate-400'}`}>
                EN
              </button>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="rounded-full text-amber-100 hover:bg-white/10 hover:text-white">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-md md:hidden"
              onClick={toggleMobileMenu}
            />
            <motion.div 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 right-0 top-0 z-[60] flex w-4/5 max-w-sm flex-col border-l border-white/10 bg-[#080914]/95 p-6 shadow-2xl shadow-black md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-amber-100">{t.nav.menu}</span>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="rounded-full text-amber-100 hover:bg-white/10">
                  <X className="h-7 w-7" />
                </Button>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-lg font-semibold text-slate-200 transition-colors duration-300 hover:border-amber-200/30 hover:text-amber-100"
                  >
                    {link.icon} {link.text}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden px-4 pb-20 pt-32 text-center sm:pb-28 sm:pt-36">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-2 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mx-auto max-w-5xl"
          >
            <motion.img
              src={dailyQuestionLogo}
              alt="Logo Daily Question"
              className="mx-auto mb-8 h-28 w-28 rounded-full border border-amber-200/40 bg-slate-950 object-cover p-1 shadow-2xl shadow-amber-950/30 sm:h-36 sm:w-36"
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            />
            <h1 className="font-display mx-auto mb-4 max-w-4xl pb-3 text-5xl font-extrabold leading-[1.12] tracking-tight text-transparent bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl" style={{ backgroundImage: 'linear-gradient(135deg, #fff8df 0%, #f4c974 42%, #a78bfa 78%, #ffffff 100%)' }}>
              {t.hero.title}
            </h1>
            <p className="mx-auto mb-5 max-w-3xl text-xl font-semibold text-amber-100/90 sm:text-2xl md:text-3xl">{t.hero.subtitle}</p>
            <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button 
                size="lg" 
                className="premium-button w-full max-w-md justify-center px-10 py-7 text-sm sm:w-auto sm:min-w-[360px]"
                onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1181626669795119105', '_blank')}
              >
                <MessageSquare className="mr-2 h-5 w-5" /> {t.nav.invite}
              </Button>

              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="premium-button-secondary w-full sm:w-auto"
                  onClick={() => window.open('https://discord.gg/wE6vjjCXW3', '_blank')}
                >
                  <Users className="mr-2 h-5 w-5" /> {t.nav.support}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="premium-button-secondary w-full border-amber-200/25 text-amber-100 sm:w-auto"
                  onClick={() => window.open('https://top.gg/bot/1181626669795119105', '_blank')}
                >
                  <Star className="mr-2 h-5 w-5" /> {t.nav.vote}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LandingHeader;
