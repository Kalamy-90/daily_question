import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { commandsData, sectionAnimation, itemAnimation } from '@/data/content';

    const CommandsSection = () => {
      return (
        <motion.section 
          id="commands" 
          className="py-20"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Commandes du Bot</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commandsData.map((command, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-slate-800 border-slate-700 shadow-lg hover:border-blue-500 transition-colors duration-300">
                    <CardContent className="p-6 flex items-center">
                      {command.icon}
                      <div>
                        <p className="font-mono text-lg text-blue-400">{command.name}</p>
                        <p className="text-gray-400 text-sm">{command.description}</p>
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