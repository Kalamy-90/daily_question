import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Award, RotateCcw, Settings2, Shield } from 'lucide-react';

const NewFeaturesSection = () => {
  const newFeatures = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
      title: "Mode de Réponse Configurable",
      description: "Choisissez entre des réponses privées via formulaire ou des messages publics dans le salon.",
      badge: "Nouveau"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Rôles Discord en Récompenses",
      description: "Attribuez des rôles Discord temporaires aux gagnants, avec suppression automatique optionnelle.",
      badge: "Nouveau"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-red-400" />,
      title: "Réinitialisation du Classement",
      description: "Nouvelle commande /reset_classement pour remettre à zéro tous les points.",
      badge: "Nouveau"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Bannissements Temporaires",
      description: "Possibilité de bannir des utilisateurs temporairement avec une durée en jours.",
      badge: "Nouveau"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Nouvelles Fonctionnalités
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les dernières améliorations qui rendent Daily Question encore plus puissant et facile à utiliser !
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="bg-slate-800/50 border-blue-500/30 border-2 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    {feature.icon}
                    <Badge 
                      variant={feature.badge === "Nouveau" ? "default" : "secondary"}
                      className={feature.badge === "Nouveau" ? "bg-green-600 text-white" : "bg-blue-600 text-white"}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-blue-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewFeaturesSection;

