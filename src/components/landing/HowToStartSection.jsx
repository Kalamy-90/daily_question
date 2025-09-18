import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { howToStartStepsData, sectionAnimation, itemAnimation } from '@/data/content';

    const HowToStartSection = () => {
      return (
        <motion.section 
          id="how-to-start" 
          className="py-20 bg-slate-800 bg-opacity-50 backdrop-blur-md"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Comment Démarrer ?</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              {howToStartStepsData.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-slate-700 bg-opacity-70 border-yellow-500 border-2 shadow-lg hover:shadow-yellow-500/40 transition-shadow duration-300">
                    <CardContent className="p-6 flex items-center">
                      {step.icon}
                      <p className="text-xl text-yellow-300">{step.text}</p>
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