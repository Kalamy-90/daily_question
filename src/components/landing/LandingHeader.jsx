import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { MessageSquare, Users, Star, Menu as MenuIcon, X, ListChecks, HelpCircle, Zap } from 'lucide-react';
    import dailyQuestionLogo from '@/assets/daily-question-logo.png';

    const NavLink = ({ href, children, onClick, className = "" }) => (
      <a
        href={href}
        onClick={onClick}
        className={`block text-sm sm:text-base text-purple-300 hover:text-pink-400 transition-colors duration-300 py-2 ${className}`}
      >
        {children}
      </a>
    );

    const LandingHeader = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

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
        if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isMobileMenuOpen]);

      const navLinks = [
        { href: "#features", text: "Fonctionnalités", icon: <ListChecks className="mr-3 h-5 w-5" /> },
        { href: "#commands", text: "Commandes", icon: <Zap className="mr-3 h-5 w-5" /> },
        { href: "#faq", text: "FAQ", icon: <HelpCircle className="mr-3 h-5 w-5" /> },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                        ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex justify-between items-center">
                <motion.a 
                  href="#" 
                  className="flex items-center space-x-2 sm:space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={dailyQuestionLogo}
                    alt="Logo Daily Question"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-500"
                  />
                  <span className="font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Daily Question
                  </span>
                </motion.a>

                <nav className="hidden sm:flex items-center space-x-4 md:space-x-6">
                  {navLinks.map(link => (
                    <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
                  ))}
                </nav>

                <div className="sm:hidden">
                  <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-purple-300 hover:text-pink-400">
                    {isMobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
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
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] sm:hidden"
                  onClick={toggleMobileMenu}
                />
                <motion.div 
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-slate-900 shadow-2xl z-[60] flex flex-col p-6 sm:hidden"
                >
                  <div className="flex justify-between items-center mb-8">
                     <span className="font-bold text-xl text-purple-300">Menu</span>
                    <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-purple-300 hover:text-pink-400">
                      <X className="h-7 w-7" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center text-lg text-purple-200 hover:text-pink-300 transition-colors duration-300 py-3 px-3 rounded-lg hover:bg-slate-800"
                      >
                        {link.icon} {link.text}
                      </a>
                    ))}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className="relative text-center pt-28 sm:pt-32 pb-16 sm:pb-24"> {/* Added padding top to account for fixed header */}
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.img
                  src={dailyQuestionLogo}
                  alt="Logo Daily Question"
                  className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6 rounded-full shadow-xl border-4 border-purple-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Daily Question
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-purple-300">Votre Bot de Questions Quotidiennes pour Discord !</p>
                <p className="text-md sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
                  Engagez votre communauté avec Daily Question ! Chaque jour, une nouvelle question de culture générale, un classement pour stimuler la compétition, et une personnalisation complète pour votre serveur.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-md sm:text-lg w-full sm:w-auto"
                    onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1181626669795119105', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" /> Invitez Daily Question !
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-md sm:text-lg w-full sm:w-auto"
                    onClick={() => window.open('https://discord.gg/wE6vjjCXW3', '_blank')}
                  >
                    <Users className="mr-2 h-5 w-5" /> Serveur Support
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-md sm:text-lg w-full sm:w-auto"
                    onClick={() => window.open('https://top.gg/bot/1181626669795119105', '_blank')}
                  >
                    <Star className="mr-2 h-5 w-5" /> Votez sur Top.gg
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      );
    };

    export default LandingHeader;