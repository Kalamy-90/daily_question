import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, RotateCcw, Shield, CheckSquare, Pause, Maximize2, ListChecks, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const iconClass = "h-7 w-7 text-amber-200";

const labels = {
  fr: {
    showAll: 'Voir toutes les nouvelles fonctionnalités',
    showLess: 'Réduire les nouvelles fonctionnalités',
  },
  en: {
    showAll: 'View all new features',
    showLess: 'Show fewer new features',
  },
};

const NewFeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const newFeatures = {
    fr: [
      { icon: <CheckSquare className={iconClass} />, title: "Questions à Choix Multiples (QCM)", description: "Le bot supporte désormais les QCM avec jusqu'à 25 options. Les utilisateurs peuvent répondre par lettre (A, B, C...) ou par texte." },
      { icon: <ListChecks className={iconClass} />, title: "Multiples Réponses Possibles", description: "Les questions texte peuvent accepter plusieurs réponses correctes (synonymes) séparées par un point-virgule." },
      { icon: <Pause className={iconClass} />, title: "Mise en Pause du Bot", description: "Une nouvelle option dans /config permet de mettre le bot en pause pour stopper l'envoi automatique des questions." },
      { icon: <RotateCcw className={iconClass} />, title: "Réinitialisation des Questions Perso", description: "Via /questions_perso, vous pouvez maintenant réinitialiser le cycle pour reposer les questions déjà vues." },
      { icon: <ListChecks className={iconClass} />, title: "Suivi des Questions Perso", description: "La commande /questions_perso affiche le nombre de questions posées et lesquelles sont encore disponibles." },
      { icon: <Shield className={iconClass} />, title: "Arrêt de la Question de Test", description: "La question lancée avec /test_question peut être annulée à tout moment par un administrateur via un bouton." },
      { icon: <MessageSquare className={iconClass} />, title: "Masquer les Réponses aux Résultats", description: "Une option de configuration permet de masquer la liste complète des réponses des utilisateurs lors de l'annonce des résultats." },
      { icon: <Maximize2 className={iconClass} />, title: "Test et Question Normale Simultanés", description: "Il est possible de lancer une question de test (/test_question) en même temps que la question officielle du jour." }
    ],
    en: [
      { icon: <CheckSquare className={iconClass} />, title: "Multiple Choice Questions (MCQ)", description: "The bot now supports MCQs with up to 25 options. Users can answer by letter (A, B, C...) or by text." },
      { icon: <ListChecks className={iconClass} />, title: "Multiple Correct Answers", description: "Text questions can accept multiple correct answers (synonyms) separated by a semicolon." },
      { icon: <Pause className={iconClass} />, title: "Pause the Bot", description: "A new option in /config allows you to pause the bot to stop automatic question sending." },
      { icon: <RotateCcw className={iconClass} />, title: "Custom Questions Reset", description: "Via /custom_questions, you can now reset the cycle to re-ask already seen questions." },
      { icon: <ListChecks className={iconClass} />, title: "Custom Questions Tracking", description: "The /custom_questions command displays the number of questions asked and which ones are still available." },
      { icon: <Shield className={iconClass} />, title: "Stop Test Question", description: "A question launched with /test_question can be canceled at any time by an administrator via a button." },
      { icon: <MessageSquare className={iconClass} />, title: "Hide Answers in Results", description: "A configuration option allows hiding the full list of user answers during the results announcement." },
      { icon: <Maximize2 className={iconClass} />, title: "Simultaneous Test and Normal Question", description: "It is possible to launch a test question (/test_question) at the same time as the official question of the day." }
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
      </div>
    </motion.section>
  );
};

export default NewFeaturesSection;
