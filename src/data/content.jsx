import React from 'react';
import { Settings, PlayCircle, HelpCircle, ListChecks, BarChart2, Shield, Zap, Award, LogIn, MessageCircle, Users, Edit3, Server, AlertTriangle, DatabaseZap, CalendarClock, FileText, UserCheck, BellRing, RotateCcw, Languages, Eye, UserMinus } from 'lucide-react';

export const featuresData = {
  fr: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Questions quotidiennes automatisées quand vous voulez",
      description: "Chaque jour, à une heure que vous définissez, le bot publie automatiquement une nouvelle question dans le salon de votre choix. Planification ultra flexible : par heure, jour, semaine ou mois, avec possibilité de programmer plusieurs questions dans la même journée. Une base de questions variées (culture générale, histoire, science, etc.) est incluse. Vous pouvez également ajouter vos propres questions personnalisées !",
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Configuration personnalisable dans les moindres détails",
      description: "Commande /config : Une interface intuitive avec des menus déroulants et des modales pour ajuster tous les aspects du bot : Salon des questions, Planification avancée ultra flexible, Rôle à mentionner (ping), Gestion des administrateurs du bot, Récompenses, Mode de réponse, Mode strict, Fuseau horaire du serveur, Activation/Désactivation du classement, Salon de logs, Rôles de podium dynamiques. Possibilité de mettre le bot en pause pour stopper l'envoi automatique des questions.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Mode de réponse configurable",
      description: "Choisissez comment les utilisateurs soumettent leurs réponses : via un formulaire modal privé (recommandé pour éviter le spam) ou directement par messages publics. Le mode strict peut être activé pour forcer l'utilisation du bouton de réponse. Les utilisateurs peuvent modifier leurs réponses avant la fin du temps imparti. Désormais, les questions peuvent accepter de multiples réponses possibles (synonymes).",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Annonce des résultats et récompenses",
      description: "À l'heure des résultats, le bot annonce la bonne réponse et les gagnants. Définissez des récompenses personnalisées pour les 3 premiers : rôles Discord temporaires ou messages personnalisés. Les rôles peuvent être automatiquement retirés à la prochaine question. Pour une transparence totale, un résumé interactif permet de voir les réponses et temps de réaction. Vous pouvez choisir de masquer la liste complète des réponses lors des résultats.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Système de classement compétitif",
      description: "Suivez les scores des participants grâce à la commande /classement qui affiche le Top 10 des meilleurs joueurs. Les rôles de podium dynamiques assignent des rôles prestigieux au Top 3 du classement général, mis à jour automatiquement à chaque changement de classement.",
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Gestion du classement",
      description: "La commande /gestion_classement permet aux administrateurs de modifier les points d'un joueur, de réinitialiser le classement (pour une nouvelle saison) et d'assigner des rôles prestigieux. Nouveauté : vous pouvez désormais cacher les membres qui ne sont plus sur votre serveur du classement.",
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Gestion avancée des questions personnalisées",
      description: "Commande /questions_perso : Ajoutez vos propres questions et réponses. Modifiez ou supprimez des questions existantes. Choisissez l'ordre d'apparition : séquentiel ou aléatoire. Vous pouvez suivre la progression du cycle (nombre de questions posées) et le réinitialiser pour reposer les questions déjà vues.",
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Fiabilité et sauvegarde",
      description: "Les configurations sont sauvegardées régulièrement. Le bot tente de notifier les administrateurs en cas de problème. Système de validation et synchronisation au démarrage. La commande /test_question peut être lancée en même temps qu'une question officielle et peut être annulée à tout moment.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Modération intégrée pour le jeu",
      description: "Bannissement du jeu : Les administrateurs peuvent bannir des utilisateurs (temporairement ou définitivement). Invalidation de réponse : Un administrateur peut réagir avec ⚠️ pour annuler une réponse. Visualisez les utilisateurs bannis avec /listban.",
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Journalisation (logs) des actions",
      description: "Configurez un salon de logs pour suivre les modifications de configuration importantes et les actions de modération (ban/unban). Gardez une trace de qui a fait quoi et quand pour une transparence totale.",
    }
  ],
  en: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Automated daily questions whenever you want",
      description: "Every day, at a time you define, the bot automatically publishes a new question in the channel of your choice. Ultra-flexible scheduling: by hour, day, week, or month, with the possibility of scheduling multiple questions in the same day. A base of varied questions is included. You can also add your own custom questions!",
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Customizable configuration down to the smallest details",
      description: "/config command: An intuitive interface to adjust all aspects of the bot: Question channel, Advanced scheduling, Ping role, Admin management, Rewards, Response mode, Strict mode, Timezone, Leaderboard toggle, Logs channel, Dynamic podium roles. Possibility to pause the bot to stop automatic question sending.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Configurable response mode",
      description: "Choose how users submit their answers: via a private modal form or directly via public messages. Strict mode can be enabled to force the use of the answer button. Users can edit their answers before the time is up. Questions can now accept multiple possible answers (synonyms).",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Results announcement and rewards",
      description: "At results time, the bot announces the correct answer and the winners. Set custom rewards for the top 3: temporary Discord roles or custom messages. Roles can be automatically removed at the next question. An interactive summary allows seeing answers and reaction times. You can choose to hide the full list of answers during results.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Competitive leaderboard system",
      description: "Track participant scores with the /leaderboard command which displays the Top 10 best players. Dynamic podium roles assign prestigious roles to the Top 3 of the overall leaderboard, automatically updated with each ranking change.",
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Leaderboard management",
      description: "The /manage_leaderboard command allows administrators to modify a player's points, reset the leaderboard, and assign prestigious roles. New: you can now hide members who are no longer in your server from the leaderboard.",
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Advanced custom question management",
      description: "/custom_questions command: Add your own questions and answers. Edit or delete existing questions. Choose the appearance order: sequential or random. You can track cycle progression and reset it to re-ask already seen questions.",
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Reliability and backup",
      description: "Configurations are saved regularly. The bot attempts to notify administrators in case of a problem. Validation and synchronization system at startup. The /test_question command can be launched at the same time as an official question and can be canceled at any time.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Integrated game moderation",
      description: "Game banning: Administrators can ban users (temporarily or permanently). Answer invalidation: An administrator can react with ⚠️ to cancel an answer. View banned users with /listban.",
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Action logging",
      description: "Configure a logs channel to track important configuration changes and moderation actions. Keep track of who did what and when for full transparency.",
    }
  ]
};

export const commandsData = {
  fr: [
    { name: "/config", description: "Configuration complète (Admin).", icon: <Settings className="h-5 w-5 text-blue-500" /> },
    { name: "/test_question [délai]", description: "Tester le système (Admin). Peut être annulée à tout moment.", icon: <PlayCircle className="h-5 w-5 text-green-500" /> },
    { name: "/voir_reponses", description: "Permet aux administrateurs de voir les réponses d'une question en cours.", icon: <Eye className="h-5 w-5 text-amber-500" /> },
    { name: "/help", description: "Aide et liste des commandes.", icon: <HelpCircle className="h-5 w-5 text-yellow-500" /> },
    { name: "/questions_perso", description: "Gérer vos questions (Admin). Suivi et réinitialisation du cycle.", icon: <Edit3 className="h-5 w-5 text-indigo-500" /> },
    { name: "/classement", description: "Afficher le classement.", icon: <BarChart2 className="h-5 w-5 text-purple-500" /> },
    { name: "/gestion_classement", description: "Gérer les points, les rôles de podium, la réinitialisation et masquer les membres partis (Admin).", icon: <ListChecks className="h-5 w-5 text-orange-500" /> },
    { name: "/ban, /unban, /listban", description: "Modération des joueurs (Admin).", icon: <UserCheck className="h-5 w-5 text-red-500" /> },
    { name: "/langue", description: "Changer la langue du bot (Français par défaut, option Anglais).", icon: <Languages className="h-5 w-5 text-teal-500" /> },
  ],
  en: [
    { name: "/config", description: "Complete configuration (Admin).", icon: <Settings className="h-5 w-5 text-blue-500" /> },
    { name: "/test_question [delay]", description: "Test the system (Admin). Can be canceled at any time.", icon: <PlayCircle className="h-5 w-5 text-green-500" /> },
    { name: "/see_responses", description: "Allows administrators to see the responses of an ongoing question.", icon: <Eye className="h-5 w-5 text-amber-500" /> },
    { name: "/help", description: "Help and command list.", icon: <HelpCircle className="h-5 w-5 text-yellow-500" /> },
    { name: "/custom_questions", description: "Manage your questions (Admin). Cycle tracking and reset.", icon: <Edit3 className="h-5 w-5 text-indigo-500" /> },
    { name: "/leaderboard", description: "Display the leaderboard.", icon: <BarChart2 className="h-5 w-5 text-purple-500" /> },
    { name: "/manage_leaderboard", description: "Manage points, podium roles, reset, and hide left members (Admin).", icon: <ListChecks className="h-5 w-5 text-orange-500" /> },
    { name: "/ban, /unban, /listban", description: "Player moderation (Admin).", icon: <UserCheck className="h-5 w-5 text-red-500" /> },
    { name: "/language", description: "Change the bot's language (French by default, English option).", icon: <Languages className="h-5 w-5 text-teal-500" /> },
  ]
};

export const howToStartStepsData = {
  fr: [
    { text: "Invitez Daily Question sur votre serveur.", icon: <LogIn className="mr-3 h-6 w-6 text-green-500" /> },
    { text: "Configurez via /config (salon des questions, heures, etc.).", icon: <Settings className="mr-3 h-6 w-6 text-blue-500" /> },
    { text: "Profitez ! Le bot s'occupe du reste.", icon: <Zap className="mr-3 h-6 w-6 text-yellow-500" /> },
  ],
  en: [
    { text: "Invite Daily Question to your server.", icon: <LogIn className="mr-3 h-6 w-6 text-green-500" /> },
    { text: "Configure via /config (question channel, times, etc.).", icon: <Settings className="mr-3 h-6 w-6 text-blue-500" /> },
    { text: "Enjoy! The bot takes care of the rest.", icon: <Zap className="mr-3 h-6 w-6 text-yellow-500" /> },
  ]
};

export const faqData = {
  fr: [
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
  ],
  en: [
    {
      id: "faq1",
      question: "Free?",
      answer: "Yes! Daily Question is completely free."
    },
    {
      id: "faq2",
      question: "Required permissions?",
      answer: "The bot needs administrator permissions by default for simplified configuration, but the minimum mandatory permissions are: View channels, Manage webhooks, Send messages, Send messages in threads, Embed links, Attach files, Mention @everyone, @here and all roles, Manage messages, Manage roles, View old messages."
    },
    {
      id: "faq3",
      question: "Need help?",
      answer: "Join our support server! The link is available at the top and bottom of the page."
    }
  ]
};

export const sectionAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }
};

export const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }
  }
};
