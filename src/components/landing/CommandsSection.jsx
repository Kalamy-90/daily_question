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
        <div className="mx-auto grid max-w-5xl auto-rows-fr gap-5 md:grid-cols-2">
          {currentCommands.map((command, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="premium-card h-full min-h-[178px]">
                <CardContent className="relative z-10 grid h-full grid-cols-[4.5rem_1fr] items-center gap-6 p-7 sm:grid-cols-[5rem_1fr]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 shadow-inner shadow-white/5 sm:h-[4.5rem] sm:w-[4.5rem] [&>svg]:block [&>svg]:h-7 [&>svg]:w-7 [&>svg]:shrink-0 [&>svg]:text-amber-200">
                    {command.icon}
                  </div>
                  <div className="min-w-0 self-center">
                    <p className="command-pill mb-4 inline-flex max-w-full items-center justify-center break-all text-center">{command.name}</p>
                    <p className="text-sm leading-6 text-slate-300 sm:text-[0.95rem]">{command.description}</p>
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
