import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { featuresData, sectionAnimation, itemAnimation } from '@/data/content';
import FeatureModal from '@/components/landing/FeatureModal';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const labels = {
  fr: {
    showAll: 'Voir toutes les fonctionnalités',
    showLess: 'Réduire les fonctionnalités',
  },
  en: {
    showAll: 'View all features',
    showLess: 'Show fewer features',
  },
};

const FeaturesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const currentFeatures = featuresData[language] || featuresData.fr;
  const visibleFeatures = showAll ? currentFeatures : currentFeatures.slice(0, 3);
  const copy = labels[language] || labels.fr;

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  const renderDescription = (description, isTruncated = false) => {
    if (typeof description === 'string') {
      if (isTruncated && description.length > 118) {
        return description.substr(0, description.lastIndexOf(' ', 118)) + '...';
      }
      return description;
    }
    
    // Si c'est un objet React (JSX), on l'affiche tel quel ou on extrait le texte pour la version tronquée
    if (isTruncated) {
      // Pour l'aperçu, on prend le texte du premier <li> s'il existe
      try {
        if (description.props && description.props.children) {
          const children = React.Children.toArray(description.props.children);
          const firstLi = children.find(child => child.type === 'li');
          if (firstLi && firstLi.props && firstLi.props.children) {
            const text = Array.isArray(firstLi.props.children) 
              ? firstLi.props.children.map(c => typeof c === 'string' ? c : (c.props?.children || '')).join('')
              : firstLi.props.children;
            return typeof text === 'string' ? (text.length > 100 ? text.substring(0, 100) + '...' : text) : 'Découvrez cette fonctionnalité...';
          }
        }
      } catch (e) {
        return 'Découvrez cette fonctionnalité...';
      }
      return 'Découvrez cette fonctionnalité...';
    }
    
    return description;
  };

  return (
    <>
      <motion.section 
        id="features" 
        className="relative border-y border-white/10 bg-white/[0.025] py-24 backdrop-blur-sm"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="section-title">{t.sections.mainFeatures}</h2>
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleFeatures.map((feature, index) => (
                <motion.div
                  layout
                  key={feature.title}
                  custom={index}
                  variants={itemAnimation}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -15 }}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="h-full"
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Card className="premium-card flex h-full flex-col">
                    <CardHeader className="relative z-10 flex flex-row items-start gap-4 space-y-0 pb-5">
                      <div className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-3 text-violet-100 [&_svg]:h-7 [&_svg]:w-7 [&_svg]:text-amber-200">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight text-slate-50">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex flex-grow flex-col justify-between">
                      <div className="mb-6 text-sm leading-7 text-slate-300">
                        {renderDescription(feature.description, true)}
                      </div>
                      <Button 
                        variant="link" 
                        className="group h-auto self-start p-0 text-sm font-bold uppercase tracking-[0.18em] text-amber-200 hover:text-amber-100"
                        onClick={() => openModal(feature)}
                      >
                        {t.sections.learnMore}
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="premium-button-secondary min-w-[240px] justify-center"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
              {showAll ? copy.showLess : copy.showAll}
            </Button>
          </div>
        </div>
      </motion.section>
      {selectedFeature && (
        <FeatureModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedFeature.title}
          description={selectedFeature.description}
          icon={selectedFeature.icon}
        />
      )}
    </>
  );
};

export default FeaturesSection;
