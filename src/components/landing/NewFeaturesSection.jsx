import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Award, RotateCcw, Settings2, Shield, CheckSquare, Pause, Maximize2, ListChecks } from 'lucide-react';

const NewFeaturesSection = () => {
  const newFeatures = [
    {
      icon: <CheckSquare className="h-8 w-8 text-green-400" />,
      title: "Questions à Choix Multiples (QCM)",
      description: "Le bot supporte désormais les QCM avec jusqu'à 25 options. Les utilisateurs peuvent répondre par lettre (A, B, C...) ou par texte.",
      badge: "Nouveau"
    },
    {
      icon: <ListChecks className="h-8 w-8 text-blue-400" />,
      title: "Multiples Réponses Possibles",
      description: "Les questions texte peuvent accepter plusieurs réponses correctes (synonymes) séparées par un point-virgule.",
      badge: "Nouveau"
    },
    {
      icon: <Pause className="h-8 w-8 text-orange-400" />,
      title: "Mise en Pause du Bot",
      description: "Une nouvelle option dans /config permet de mettre le bot en pause pour stopper l'envoi automatique des questions.",
      badge: "Nouveau"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-purple-400" />,
      title: "Réinitialisation des Questions Perso",
      description: "Via /questions_perso, vous pouvez maintenant réinitialiser le cycle pour reposer les questions déjà vues.",
      badge: "Nouveau"
    },
    {
      icon: <ListChecks className="h-8 w-8 text-indigo-400" />,
      title: "Suivi des Questions Perso",
      description: "La commande /questions_perso affiche le nombre de questions posées et lesquelles sont encore disponibles.",
      badge: "Nouveau"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Arrêt de la Question de Test",
      description: "La question lancée avec /test_question peut être annulée à tout moment par un administrateur via un bouton.",
      badge: "Nouveau"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-yellow-400" />,
      title: "Masquer les Réponses aux Résultats",
      description: "Une option de configuration permet de masquer la liste complète des réponses des utilisateurs lors de l'annonce des résultats.",
      badge: "Nouveau"
    },
    {
      icon: <Maximize2 className="h-8 w-8 text-teal-400" />,
      title: "Test et Question Normale Simultanés",
      description: "Il est possible de lancer une question de test (/test_question) en même temps que la question officielle du jour.",
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
