import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageSquare, Users, Star, Menu as MenuIcon, X, ListChecks, HelpCircle, Zap, Sparkles, Server, Gamepad2, Info, Heart, CreditCard, Coins, Gift } from 'lucide-react';
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

const SocialProofBanner = ({ stats }) => {
  const items = [
    { prefix: "+", value: stats.serversValue, label: stats.serversLabel, icon: Server },
    { prefix: "+", value: stats.playersValue, label: stats.playersLabel, icon: Gamepad2 },
    { value: stats.ratingValue, label: stats.ratingLabel, icon: Star },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      className="mx-auto mb-10 grid w-full max-w-4xl grid-cols-1 gap-3 rounded-[2rem] border border-amber-200/20 bg-white/[0.055] p-3 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:grid-cols-3"
      aria-label={stats.ariaLabel}
    >
      {items.map(({ prefix, value, label, icon: Icon }) => (
        <div
          key={label}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 px-5 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-white/[0.08] sm:text-center"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent opacity-70" aria-hidden="true" />
          <div className="flex items-center gap-4 sm:flex-col sm:gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-300/10 text-amber-200 shadow-lg shadow-amber-950/20">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="flex items-center gap-2 font-display text-3xl font-extrabold tracking-tight text-amber-100 sm:justify-center sm:text-4xl">
                {prefix && (
                  <span className="inline-flex translate-y-[0.03em] items-center text-2xl leading-none sm:text-3xl" aria-hidden="true">
                    {prefix}
                  </span>
                )}
                <span className="leading-none">{value}</span>
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-slate-300">{label}</span>
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const SupportDialog = ({ support, variant = "hero" }) => {
  const isNav = variant === "nav";
  const isMobileNav = variant === "mobile";
  const cryptoOptions = [
    {
      name: 'Bitcoin',
      network: 'BTC',
      address: '39dmeg5pmHgsKFCEXe6rjr5GHMmUva2V4W',
      qrCode: '/crypto/bitcoin-qr.png',
    },
    {
      name: 'Ethereum',
      network: 'ETH',
      address: '0xac0dfE09C9292a92DB3056a286348887D81282DF',
      qrCode: '/crypto/ethereum-qr.png',
    },
    {
      name: 'USDC',
      network: 'Ethereum',
      address: '0xac0dfE09C9292a92DB3056a286348887D81282DF',
      qrCode: '/crypto/usdc-qr.png',
    },
    {
      name: 'Solana',
      network: 'SOL',
      address: '53RA6mgpcMixBuP9P9gTR9X2m8XtQZZVnw48hYbph2ru',
      qrCode: '/crypto/solana-qr.png',
    },
    {
      name: 'Tether',
      network: 'TRON / TRC20',
      address: 'TPobAx1wJxgP7sh737rPfKc6ToSZvb8Vro',
      qrCode: '/crypto/tether-tron-qr.png',
    },
  ];
  const triggerClassName = isNav
    ? "rounded-full border border-pink-300/30 bg-pink-400/10 px-4 py-2 text-sm font-extrabold text-pink-100 shadow-lg shadow-pink-950/15 transition-all duration-300 hover:border-pink-200/55 hover:bg-pink-400/18 hover:text-white"
    : isMobileNav
      ? "flex w-full items-center rounded-2xl border border-pink-300/25 bg-pink-400/10 px-4 py-4 text-lg font-semibold text-pink-100 transition-colors duration-300 hover:border-pink-200/45 hover:bg-pink-400/15 hover:text-white"
      : "w-full rounded-full border border-pink-300/30 bg-gradient-to-r from-pink-500/18 via-fuchsia-500/16 to-purple-500/18 px-7 py-6 text-sm font-extrabold uppercase tracking-[0.16em] text-pink-100 shadow-xl shadow-pink-950/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-200/55 hover:bg-pink-400/15 hover:text-white hover:shadow-pink-500/20 sm:w-auto";

  return (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        size={isNav ? "sm" : "lg"}
        className={triggerClassName}
      >
        <Heart className={`${isMobileNav ? "mr-3" : "mr-2"} h-5 w-5 fill-pink-300/30 text-pink-200`} /> {support.button}
      </Button>
    </DialogTrigger>
    <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-[2rem] border border-pink-200/20 bg-[#080914]/95 p-0 text-slate-100 shadow-2xl shadow-black/60 backdrop-blur-2xl">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pink-200/60 to-transparent" aria-hidden="true" />
      <div className="relative p-7 sm:p-9">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-200/30 bg-pink-300/10 text-pink-200 shadow-xl shadow-pink-950/25">
            <Heart className="h-7 w-7 fill-pink-300/25" aria-hidden="true" />
          </div>
          <DialogTitle className="font-display text-3xl font-bold text-pink-100 sm:text-4xl">
            {support.title}
          </DialogTitle>
          <DialogDescription className="mx-auto max-w-xl pt-3 text-base leading-8 text-slate-300">
            {support.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 grid gap-3">
          <Button
            className="justify-start rounded-2xl border border-pink-200/25 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 px-5 py-7 text-left text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-pink-950/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pink-500/20"
            onClick={() => window.open('https://ko-fi.com/dailyquestion', '_blank')}
          >
            <CreditCard className="mr-3 h-5 w-5" /> {support.cardPaypal}
          </Button>
          <Button
            variant="outline"
            className="justify-start rounded-2xl border border-amber-200/25 bg-amber-300/10 px-5 py-7 text-left text-sm font-extrabold uppercase tracking-[0.14em] text-amber-100 shadow-xl shadow-amber-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/45 hover:bg-amber-300/15 hover:text-white"
            onClick={() => window.open('https://top.gg/bot/1181626669795119105', '_blank')}
          >
            <Gift className="mr-3 h-5 w-5" /> {support.free}
          </Button>
        </div>

        <div className="mt-9 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
          <div className="mb-5 flex items-center gap-3 text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-pink-200/25 bg-pink-300/10 text-pink-200">
              <Coins className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-pink-100">{support.cryptoTitle}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">{support.cryptoDescription}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cryptoOptions.map((crypto) => (
              <div key={crypto.name} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-bold text-amber-100">{crypto.name}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{crypto.network}</p>
                  </div>
                </div>
                <img
                  src={crypto.qrCode}
                  alt={`${support.qrAlt} ${crypto.name}`}
                  className="mx-auto mb-4 h-36 w-36 rounded-2xl border border-white/10 bg-white object-contain p-2 shadow-lg shadow-black/25"
                  loading="lazy"
                />
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{support.addressLabel}</p>
                <p className="break-all rounded-xl border border-white/10 bg-black/30 p-3 font-mono text-xs leading-5 text-slate-200">{crypto.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  );
};

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
    { href: "#about", text: t.nav.about, icon: <Info className="mr-3 h-5 w-5" /> },
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
          <div className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5 md:w-fit md:max-w-[calc(100vw-2rem)] md:justify-center md:gap-5 lg:gap-6">
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

            <div className="hidden items-center md:flex md:gap-2">
              <nav className="flex items-center gap-1 md:gap-2">
                {navLinks.map(link => (
                  <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
                ))}
                <SupportDialog support={t.support} variant="nav" />
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
                <SupportDialog support={t.support} variant="mobile" />
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
            <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              {t.hero.description}
            </p>

            <SocialProofBanner stats={t.stats} />

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
                  className="premium-button-secondary w-full rounded-full sm:w-auto"
                  onClick={() => window.open('https://discord.gg/wE6vjjCXW3', '_blank')}
                >
                  <Users className="mr-2 h-5 w-5" /> {t.nav.support}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="premium-button-secondary w-full rounded-full border-amber-200/25 text-amber-100 sm:w-auto"
                  onClick={() => window.open('https://top.gg/bot/1181626669795119105', '_blank')}
                >
                  <Star className="mr-2 h-5 w-5" /> {t.nav.vote}
                </Button>
                <SupportDialog support={t.support} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LandingHeader;
