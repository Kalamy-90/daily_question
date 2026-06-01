import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Eye, UserMinus, ChevronDown, ChevronUp, CheckSquare } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const iconClass = "h-7 w-7 text-amber-200";

const labels = {
  fr: {
    showAll: 'Voir toutes les nouveautés',
    showLess: 'Réduire',
  },
  en: {
    showAll: 'View all news',
    showLess: 'Show less',
  },
};

const NewFeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const newFeatures = {
    fr: [
      { icon: <UserMinus className={iconClass} />, title: "Masquer les membres partis", description: "Cachez automatiquement du classement les membres qui ne sont plus sur le serveur via /gestion_classement." },
      { icon: <Eye className={iconClass} />, title: "Voir les réponses en cours", description: "La nouvelle commande /voir_reponses permet aux admins de consulter les réponses d'une question active." },
      { icon: <CheckSquare className={iconClass} />, title: "Questions à choix multiples (QCM)", description: "Le bot supporte désormais les QCM avec jusqu'à 25 options (réponse par lettre ou texte)." }
    ],
    en: [
      { icon: <UserMinus className={iconClass} />, title: "Hide left members", description: "Automatically hide members who are no longer in the server from the leaderboard via /manage_leaderboard." },
      { icon: <Eye className={iconClass} />, title: "View ongoing responses", description: "The new /see_responses command allows admins to view responses for an active question." },
      { icon: <CheckSquare className={iconClass} />, title: "Multiple choice questions (MCQ)", description: "The bot now supports MCQs with up to 25 options (answer by letter or text)." }
    ]
  };

  const currentNewFeatures = newFeatures[language] || newFeatures.fr;
  const visibleFeatures = showAll ? currentNewFeatures : currentNewFeatures.slice(0, 3);
  const copy = labels[language] || labels.fr;

  return (
    <motion.section 
      id="new-features"
      className="relative py-20 sm:py-24 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="section-title">{t.sections.newFeatures}</h2>
          <p className="section-subtitle">{t.sections.newFeaturesSub}</p>
        </div>
        
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleFeatures.map((feature, index) => (
              <motion.div
                layout
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: Math.min(index, 3) * 0.05, duration: 0.45 }}
                whileHover={{ y: -7, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className="premium-card h-full">
                  <CardHeader className="relative z-10 pb-4">
                    <div className="mb-5 flex items-center justify-between gap-4 pr-1">
                      <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 p-3 shadow-inner shadow-amber-950/20">{feature.icon}</div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/25 bg-amber-200/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber-100 shadow-[0_0_18px_rgba(245,197,96,0.12)]">
                        <Sparkles aria-hidden="true" className="h-3 w-3" strokeWidth={1.8} />
                        {t.sections.newBadge}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight text-slate-50">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm leading-7 text-slate-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {currentNewFeatures.length > 3 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="premium-button-secondary min-w-[280px] justify-center"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
              {showAll ? copy.showLess : copy.showAll}
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default NewFeaturesSection;
