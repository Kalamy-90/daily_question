import React from 'react';
    import { Settings, PlayCircle, HelpCircle, ListChecks, BarChart2, Shield, Zap, Award, LogIn, MessageCircle, Users, Edit3, Server, AlertTriangle, DatabaseZap, CalendarClock, FileText, UserCheck, BellRing, RotateCcw } from 'lucide-react';

    export const featuresData = [
      {
        icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
        title: "Mode de Réponse Configurable",
        description: "Choisissez comment les utilisateurs soumettent leurs réponses : via un formulaire modal privé (recommandé pour éviter le spam dans le salon) ou directement par messages publics dans le salon des questions. Le mode strict peut être activé pour forcer l'utilisation du bouton de réponse. Les utilisateurs peuvent modifier leurs réponses avant la fin du temps imparti. Cette flexibilité permet d'adapter le bot aux préférences de votre communauté.",
      },
      {
        icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
        title: "Questions Quotidiennes Automatisées Quand vous Voulez",
        description: "Chaque jour, à une heure que vous définissez, le bot publie automatiquement une nouvelle question dans le salon de votre choix. Planification ultra flexible : par heure, jour, semaine ou mois, avec possibilité de programmer plusieurs questions dans la même journée. Une base de questions variées (culture générale, histoire, science, etc.) est incluse. Vous pouvez également ajouter vos propres questions personnalisées !",
      },
      {
        icon: <Award className="h-10 w-10 text-yellow-400" />,
        title: "Annonce des Résultats et Récompenses",
        description: "À l'heure des résultats (également configurable), le bot annonce la bonne réponse et les gagnants. Définissez des récompenses personnalisées pour les 3 premiers : rôles Discord temporaires ou messages personnalisés. Les rôles peuvent être automatiquement retirés à la prochaine question. Par défaut, les points sont attribués : 5 pour le 1er, 3 pour le 2ème, et 1 pour le 3ème. Pour une transparence totale, un résumé interactif permet de voir toutes les réponses soumises par les participants et leurs temps de réaction. Nouveauté : Vous pouvez choisir de masquer la liste complète des réponses lors des résultats.",
      },
      {
        icon: <BarChart2 className="h-10 w-10 text-green-400" />,
        title: "Système de Classement Compétitif",
        description: "Suivez les scores des participants grâce à la commande /classement qui affiche le Top 10 des meilleurs joueurs. Nouveauté majeure : les rôles de podium dynamiques ! Assignez des rôles prestigieux au Top 3 du classement général, ces rôles sont 100% dynamiques et mis à jour automatiquement à chaque changement de classement.",
      },
      {
        icon: <Settings className="h-10 w-10 text-blue-400" />,
        title: "Configuration Personnalisable dans les moindres Détails",
        description: "Commande /config : Une interface intuitive avec des menus déroulants et des modales pour ajuster tous les aspects du bot : Salon des questions, Planification avancée ultra flexible, Rôle à mentionner (ping), Gestion des administrateurs du bot (ajout/suppression d'utilisateurs et de rôles admin), Récompenses (rôles Discord ou messages), Mode de réponse (formulaire privé ou messages publics), Mode strict, Fuseau horaire du serveur, Activation/Désactivation du classement, Salon de logs, Rôles de podium dynamiques. Nouveauté : Possibilité de mettre le bot en pause pour stopper l'envoi automatique des questions.",
      },
      {
        icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
        title: "Gestion Avancée des Questions Personnalisées",
        description: "Commande /questions_perso : Ajoutez vos propres questions et réponses. Modifiez ou supprimez des questions existantes. Choisissez l'ordre d'apparition : séquentiel ou aléatoire. Une fois la liste épuisée, le bot repasse aux questions globales. Nouveauté : Vous pouvez suivre la progression du cycle (nombre de questions posées) et le réinitialiser pour reposer les questions déjà vues.",
      },
      {
        icon: <UserCheck className="h-10 w-10 text-red-400" />,
        title: "Modération Intégrée pour le Jeu",
        description: "Bannissement du jeu : Les administrateurs peuvent bannir des utilisateurs (temporairement avec durée en jours ou définitivement) de participer aux questions. Invalidation de réponse : Un administrateur peut réagir avec ⚠️ pour annuler une réponse. Visualisez les utilisateurs bannis avec /listban.",
      },
      {
        icon: <FileText className="h-10 w-10 text-teal-400" />,
        title: "Journalisation (Logs) des Actions",
        description: "Configurez un salon de logs pour suivre les modifications de configuration importantes (changement d'heure, de salon, de rôles, etc.) et les actions de modération (ban/unban). Gardez une trace de qui a fait quoi et quand. Toutes les actions des administrateurs sont tracées pour une transparence totale.",
      },
      {
        icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
        title: "Fiabilité et Sauvegarde",
        description: "Les configurations de tous les serveurs sont sauvegardées régulièrement dans un fichier server_configs.json et lors d'un arrêt propre du bot. Le bot tente de notifier les administrateurs en cas de problème (ex: salon de log introuvable). Système de validation et synchronisation des configurations au démarrage pour assurer la compatibilité. Nouveauté : La commande /test_question peut maintenant être lancée en même temps qu'une question officielle, et peut être annulée à tout moment.",
      },
      {
        icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
        title: "Gestion du Classement",
        description: "Nouvelle commande /gestion_classement permettant aux administrateurs de modifier les points d'un joueur, de réinitialiser le classement, par exemple pour lancer une nouvelle saison, et d'assigner des rôles prestigieux au Top 3 du classement général. Une confirmation est demandée avant l'exécution pour éviter les erreurs.",
      }
    ];

    export const commandsData = [
      { name: "/config", description: "Configuration complète (Admin).", icon: <Settings className="mr-2 h-5 w-5 text-blue-500" /> },
      { name: "/test_question [délai]", description: "Tester le système (Admin). Peut être annulée à tout moment.", icon: <PlayCircle className="mr-2 h-5 w-5 text-green-500" /> },
      { name: "/help", description: "Aide et liste des commandes.", icon: <HelpCircle className="mr-2 h-5 w-5 text-yellow-500" /> },
      { name: "/questions_perso", description: "Gérer vos questions (Admin). Suivi et réinitialisation du cycle.", icon: <Edit3 className="mr-2 h-5 w-5 text-indigo-500" /> },
      { name: "/classement", description: "Afficher le classement.", icon: <BarChart2 className="mr-2 h-5 w-5 text-purple-500" /> },
      { name: "/gestion_classement", description: "Gérer les points, les rôles de podium et la réinitialisation du classement (Admin).", icon: <ListChecks className="mr-2 h-5 w-5 text-orange-500" /> },
      { name: "/ban, /unban, /listban", description: "Modération des joueurs (Admin).", icon: <UserCheck className="mr-2 h-5 w-5 text-red-500" /> },
    ];

    export const howToStartStepsData = [
      { text: "Invitez Daily Question sur votre serveur.", icon: <LogIn className="mr-3 h-6 w-6 text-green-500" /> },
      { text: "Configurez via /config (salon des questions, heures, etc.).", icon: <Settings className="mr-3 h-6 w-6 text-blue-500" /> },
      { text: "Profitez ! Le bot s'occupe du reste.", icon: <Zap className="mr-3 h-6 w-6 text-yellow-500" /> },
    ];
    
    export const faqData = [
      {
        id: "faq1",
        question: "Gratuit ?",
        answer: "Oui ! Daily Question est entièrement gratuit."
      },
      {
        id: "faq2",
        question: "Permissions requises ?",
        answer: "Le bot a besoin des permissions d'administrateur par défaut pour une configuration simplifiée, mais les permissions minimales obligatoires sont : Voir les salons, Gérer les webhooks, Envoyer des messages, Envoyer des messages dans les fils, Intégrer des liens, Joindre des fichiers, Mentionner @everyone, @here et tous les rôles, Gérer les messages, Gérer les rôles, Voir les anciens messages."
      },
      {
        id: "faq3",
        question: "Besoin d'aide ?",
        answer: "Rejoignez notre serveur de support ! Le lien est disponible en haut et en bas de la page."
      }
    ];

    export const sectionAnimation = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
    
    export const itemAnimation = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
        },
      }),
    };