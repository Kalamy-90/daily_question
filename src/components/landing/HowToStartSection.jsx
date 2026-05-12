import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { howToStartStepsData, sectionAnimation, itemAnimation } from '@/data/content';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const HowToStartSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentSteps = howToStartStepsData[language] || howToStartStepsData.fr;

  return (
    <motion.section 
      id="how-to-start" 
      className="relative border-y border-white/10 bg-white/[0.025] py-24 backdrop-blur-sm"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.sections.howToStart}</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          {currentSteps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
            >
              <Card className="premium-card">
                <CardContent className="relative z-10 flex items-center gap-5 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/10 text-sm font-extrabold text-amber-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-center text-base font-semibold leading-7 text-slate-100 [&_svg]:text-amber-200">
                    {step.icon}
                    <span>{step.text}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowToStartSection;
