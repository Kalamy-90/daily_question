import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { commandsData, sectionAnimation, itemAnimation } from '@/data/content';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const CommandsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentCommands = commandsData[language] || commandsData.fr;

  return (
    <motion.section 
      id="commands" 
      className="relative py-24"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.sections.commands}</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {currentCommands.map((command, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="premium-card">
                <CardContent className="relative z-10 flex items-center gap-5 p-6">
                  <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 p-3 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-amber-200">
                    {command.icon}
                  </div>
                  <div>
                    <p className="command-pill mb-3 inline-flex">{command.name}</p>
                    <p className="text-sm leading-6 text-slate-300">{command.description}</p>
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

export default CommandsSection;
