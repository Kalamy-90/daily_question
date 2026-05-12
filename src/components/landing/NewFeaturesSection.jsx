import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, RotateCcw, Shield, CheckSquare, Pause, Maximize2, ListChecks, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const iconClass = "h-7 w-7 text-amber-200";

const labels = {
  fr: {
    eyebrow: 'Release notes essentielles',
    showAll: 'Voir toutes les nouvelles fonctionnalités',
    showLess: 'Réduire les nouvelles fonctionnalités',
  },
  en: {
    eyebrow: 'Essential release notes',
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
      { icon: <CheckSquare className={iconClass} />, title: "Questions à Choix Multiples (QCM)", description: "Le bot supporte désormais les QCM avec jusqu'à 25 options. Les utilisateurs peuvent répondre par lettre (A, B, C...) ou par texte.", badge: "Nouveau" },
      { icon: <ListChecks className={iconClass} />, title: "Multiples Réponses Possibles", description: "Les questions texte peuvent accepter plusieurs réponses correctes (synonymes) séparées par un point-virgule.", badge: "Nouveau" },
      { icon: <Pause className={iconClass} />, title: "Mise en Pause du Bot", description: "Une nouvelle option dans /config permet de mettre le bot en pause pour stopper l'envoi automatique des questions.", badge: "Nouveau" },
      { icon: <RotateCcw className={iconClass} />, title: "Réinitialisation des Questions Perso", description: "Via /questions_perso, vous pouvez maintenant réinitialiser le cycle pour reposer les questions déjà vues.", badge: "Nouveau" },
      { icon: <ListChecks className={iconClass} />, title: "Suivi des Questions Perso", description: "La commande /questions_perso affiche le nombre de questions posées et lesquelles sont encore disponibles.", badge: "Nouveau" },
      { icon: <Shield className={iconClass} />, title: "Arrêt de la Question de Test", description: "La question lancée avec /test_question peut être annulée à tout moment par un administrateur via un bouton.", badge: "Nouveau" },
      { icon: <MessageSquare className={iconClass} />, title: "Masquer les Réponses aux Résultats", description: "Une option de configuration permet de masquer la liste complète des réponses des utilisateurs lors de l'annonce des résultats.", badge: "Nouveau" },
      { icon: <Maximize2 className={iconClass} />, title: "Test et Question Normale Simultanés", description: "Il est possible de lancer une question de test (/test_question) en même temps que la question officielle du jour.", badge: "Nouveau" }
    ],
    en: [
      { icon: <CheckSquare className={iconClass} />, title: "Multiple Choice Questions (MCQ)", description: "The bot now supports MCQs with up to 25 options. Users can answer by letter (A, B, C...) or by text.", badge: "New" },
      { icon: <ListChecks className={iconClass} />, title: "Multiple Correct Answers", description: "Text questions can accept multiple correct answers (synonyms) separated by a semicolon.", badge: "New" },
      { icon: <Pause className={iconClass} />, title: "Pause the Bot", description: "A new option in /config allows you to pause the bot to stop automatic question sending.", badge: "New" },
      { icon: <RotateCcw className={iconClass} />, title: "Custom Questions Reset", description: "Via /custom_questions, you can now reset the cycle to re-ask already seen questions.", badge: "New" },
      { icon: <ListChecks className={iconClass} />, title: "Custom Questions Tracking", description: "The /custom_questions command displays the number of questions asked and which ones are still available.", badge: "New" },
      { icon: <Shield className={iconClass} />, title: "Stop Test Question", description: "A question launched with /test_question can be canceled at any time by an administrator via a button.", badge: "New" },
      { icon: <MessageSquare className={iconClass} />, title: "Hide Answers in Results", description: "A configuration option allows hiding the full list of user answers during the results announcement.", badge: "New" },
      { icon: <Maximize2 className={iconClass} />, title: "Simultaneous Test and Normal Question", description: "It is possible to launch a test question (/test_question) at the same time as the official question of the day.", badge: "New" }
    ]
  };

  const currentNewFeatures = newFeatures[language] || newFeatures.fr;
  const visibleFeatures = showAll ? currentNewFeatures : currentNewFeatures.slice(0, 3);
  const copy = labels[language] || labels.fr;

  return (
    <motion.section 
      className="relative py-20 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="section-eyebrow"><Sparkles className="mr-2 h-4 w-4" /> {copy.eyebrow}</span>
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
                    <div className="mb-5 flex items-center justify-between">
                      <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 p-3 shadow-inner shadow-amber-950/20">{feature.icon}</div>
                      <Badge className="border border-emerald-300/20 bg-emerald-300/10 text-emerald-100 shadow-none">
                        {feature.badge}
                      </Badge>
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
