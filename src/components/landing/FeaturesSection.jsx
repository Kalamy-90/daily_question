import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { featuresData, sectionAnimation, itemAnimation } from '@/data/content';
    import FeatureModal from '@/components/landing/FeatureModal';

    const FeaturesSection = () => {
      const [modalOpen, setModalOpen] = useState(false);
      const [selectedFeature, setSelectedFeature] = useState(null);

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
            className="py-20 bg-slate-800 bg-opacity-50 backdrop-blur-md"
            variants={sectionAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Fonctionnalités Principales</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
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
                    <Card className="bg-slate-700 bg-opacity-70 border-purple-600 border-2 shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 h-full flex flex-col">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                        {feature.icon}
                        <CardTitle className="text-2xl font-semibold text-purple-300">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <CardDescription className="text-gray-300 text-md mb-4">
                          {truncateText(feature.description, 100)}
                        </CardDescription>
                        <Button 
                          variant="link" 
                          className="text-purple-400 hover:text-purple-300 p-0 self-start"
                          onClick={() => openModal(feature)}
                        >
                          En savoir plus
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