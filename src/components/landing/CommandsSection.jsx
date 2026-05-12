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
        <div className="mx-auto grid max-w-4xl auto-rows-fr gap-4 md:grid-cols-2">
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
              <Card className="premium-card h-full min-h-[132px]">
                <CardContent className="relative z-10 grid h-full grid-cols-[3rem_1fr] items-center gap-4 p-5 sm:grid-cols-[3.15rem_1fr]">
                  <div className="grid h-10 w-10 shrink-0 place-items-center justify-self-center rounded-xl border border-sky-300/20 bg-sky-300/10 shadow-inner shadow-white/5 sm:h-11 sm:w-11">
                    <span className="grid h-full w-full place-items-center leading-[0] [&>svg]:m-auto [&_svg]:!block [&_svg]:!h-[1.15rem] [&_svg]:!w-[1.15rem] [&_svg]:shrink-0 [&_svg]:text-amber-200 sm:[&_svg]:!h-5 sm:[&_svg]:!w-5">{command.icon}</span>
                  </div>
                  <div className="min-w-0 self-center">
                    <p className="command-pill mb-2 inline-flex max-w-full items-center justify-center break-all text-center text-xs sm:text-[0.8rem]">{command.name}</p>
                    <p className="text-xs leading-5 text-slate-300 sm:text-[0.84rem]">{command.description}</p>
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
