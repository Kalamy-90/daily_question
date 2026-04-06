import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      className="py-20"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">{t.sections.faq}</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {currentFaq.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <AccordionItem value={item.id} className="bg-slate-800 bg-opacity-70 border border-slate-700 rounded-lg shadow-lg px-2">
                <AccordionTrigger className="text-lg text-gray-100 hover:text-cyan-300 py-4 px-4 text-left">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0" />
                    <span className="flex-grow">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-4 pb-4 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <p className="text-center mt-12 text-gray-400">
          {t.sections.faqSub.split('!')[0]} ! <a href="https://discord.gg/wE6vjjCXW3" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{language === 'fr' ? 'serveur de support' : 'support server'}</a> !
        </p>
      </div>
    </motion.section>
  );
};

export default FaqSection;
