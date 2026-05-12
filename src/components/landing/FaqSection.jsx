import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData, sectionAnimation } from '@/data/content';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const FaqSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentFaq = faqData[language] || faqData.fr;

  return (
    <motion.section
      id="faq"
      className="relative py-24"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.sections.faq}</h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-4">
          {currentFaq.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <AccordionItem value={item.id} className="premium-card border-b-0 px-2">
                <AccordionTrigger className="relative z-10 gap-4 px-5 text-left text-lg font-bold text-slate-100 hover:no-underline hover:text-amber-100">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-amber-200" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="relative z-10 px-5 pb-6 text-base leading-8 text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <p className="mt-12 text-center text-slate-300">
          {t.sections.faqSub}{' '}
          <a href="https://discord.gg/wE6vjjCXW3" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-200 underline-offset-4 hover:text-amber-100 hover:underline">
            {language === 'fr' ? 'serveur de support' : 'support server'}
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default FaqSection;
