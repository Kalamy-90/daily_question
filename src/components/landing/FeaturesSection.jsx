import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { featuresData, sectionAnimation, itemAnimation } from '@/data/content';
import FeatureModal from '@/components/landing/FeatureModal';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowUpRight } from 'lucide-react';

const FeaturesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  const currentFeatures = featuresData[language] || featuresData.fr;

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
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
            <span className="section-eyebrow">Core Suite</span>
            <h2 className="section-title">{t.sections.mainFeatures}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemAnimation}
                initial="hidden"
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
                    <CardDescription className="mb-6 text-sm leading-7 text-slate-300">
                      {truncateText(feature.description, 118)}
                    </CardDescription>
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
