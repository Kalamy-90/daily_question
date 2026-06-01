import React from 'react';
import { Settings, PlayCircle, HelpCircle, ListChecks, BarChart2, Shield, Zap, Award, LogIn, MessageCircle, Users, Edit3, Server, AlertTriangle, DatabaseZap, CalendarClock, FileText, UserCheck, BellRing, RotateCcw, Languages, Eye, UserMinus, Pause, CheckSquare, Maximize2 } from 'lucide-react';

export const featuresData = {
  fr: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Questions quotidiennes automatisées",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Planification ultra flexible : heure, jour, semaine ou mois.</li>
          <li>Possibilité de programmer plusieurs questions par jour.</li>
          <li>Base de questions variées incluse (culture, histoire, science).</li>
          <li>Ajout illimité de vos propres questions personnalisées.</li>
        </ul>
      ),
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Configuration personnalisable et mise en pause",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Interface intuitive via /config avec menus et modales.</li>
          <li>Gestion complète : salon, fuseau horaire, admins et logs.</li>
          <li><strong>Mise en pause du bot</strong> : stoppez l'envoi automatique à tout moment.</li>
          <li>Personnalisation du rôle à mentionner (ping) pour chaque question.</li>
        </ul>
      ),
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Mode de réponse et synonymes",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Formulaire modal privé (anti-spam) ou messages publics.</li>
          <li><strong>Multiples réponses possibles</strong> : support des synonymes via point-virgule.</li>
          <li>Mode strict pour forcer l'utilisation du bouton de réponse.</li>
          <li>Modification des réponses autorisée avant la fin du temps.</li>
        </ul>
      ),
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Résultats, récompenses et confidentialité",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Annonce automatique de la bonne réponse et des gagnants.</li>
          <li>Récompenses personnalisées (rôles temporaires ou messages).</li>
          <li><strong>Masquer les réponses</strong> : cachez la liste des participants aux résultats.</li>
          <li>Résumé interactif avec temps de réaction pour une transparence totale.</li>
        </ul>
      ),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Système de classement compétitif",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Commande /classement affichant le Top 10 des meilleurs joueurs.</li>
          <li><strong>Rôles de podium dynamiques</strong> : attribués automatiquement au Top 3.</li>
          <li>Mise à jour instantanée à chaque nouvelle question.</li>
          <li>Attribution de points : 5 pour le 1er, 3 pour le 2ème, 1 pour le 3ème.</li>
        </ul>
      ),
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Gestion du classement et membres partis",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Modification manuelle des points par les administrateurs.</li>
          <li>Réinitialisation complète pour lancer de nouvelles saisons.</li>
          <li><strong>Masquer les membres partis</strong> : épurez votre classement automatiquement.</li>
          <li>Assignation manuelle des rôles de prestige via /gestion_classement.</li>
        </ul>
      ),
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Suivi et réinitialisation des questions perso",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Suivi du cycle</strong> : visualisez le nombre de questions posées.</li>
          <li><strong>Réinitialisation</strong> : relancez le cycle pour reposer vos questions.</li>
          <li>Gestion simplifiée : ajout, modification et suppression rapide.</li>
          <li>Ordre d'apparition au choix : séquentiel ou aléatoire.</li>
        </ul>
      ),
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Fiabilité, tests et arrêt d'urgence",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Tests simultanés</strong> : lancez /test_question sans impacter l'officielle.</li>
          <li><strong>Arrêt de la question de test</strong> : annulez un test à tout moment via bouton.</li>
          <li>Sauvegardes régulières et synchronisation au démarrage.</li>
          <li>Notifications automatiques aux admins en cas de problème technique.</li>
        </ul>
      ),
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Modération intégrée pour le jeu",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Bannissement temporaire (en jours) ou définitif des tricheurs.</li>
          <li>Invalidation de réponse via réaction ⚠️ par un admin.</li>
          <li>Visualisation et gestion de la liste des bannis avec /listban.</li>
          <li>Contrôle total sur qui peut participer à la compétition.</li>
        </ul>
      ),
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Journalisation (logs) des actions",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Salon de logs dédié pour suivre chaque modification.</li>
          <li>Traçabilité des changements d'heure, de salon et de rôles.</li>
          <li>Historique des actions de modération (ban/unban).</li>
          <li>Transparence totale sur l'activité des administrateurs du bot.</li>
        </ul>
      ),
    }
  ],
  en: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Automated daily questions",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Ultra-flexible scheduling: hour, day, week, or month.</li>
          <li>Option to schedule multiple questions per day.</li>
          <li>Varied question database included (culture, history, science).</li>
          <li>Unlimited addition of your own custom questions.</li>
        </ul>
      ),
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Customizable configuration and pause",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Intuitive interface via /config with menus and modals.</li>
          <li>Full management: channel, timezone, admins, and logs.</li>
          <li><strong>Bot pause</strong>: stop automatic sending at any time.</li>
          <li>Customization of the role to mention (ping) for each question.</li>
        </ul>
      ),
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Response mode and synonyms",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Private modal form (anti-spam) or public messages.</li>
          <li><strong>Multiple possible answers</strong>: synonym support via semicolon.</li>
          <li>Strict mode to force the use of the answer button.</li>
          <li>Answer modification allowed before time runs out.</li>
        </ul>
      ),
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Results, rewards and privacy",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Automatic announcement of the correct answer and winners.</li>
          <li>Custom rewards (temporary roles or messages).</li>
          <li><strong>Hide answers</strong>: hide the participant list in results.</li>
          <li>Interactive summary with reaction times for full transparency.</li>
        </ul>
      ),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Competitive leaderboard system",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>/leaderboard command showing the Top 10 best players.</li>
          <li><strong>Dynamic podium roles</strong>: automatically assigned to Top 3.</li>
          <li>Instant update with each new question.</li>
          <li>Point system: 5 for 1st, 3 for 2nd, 1 for 3rd.</li>
        </ul>
      ),
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Leaderboard management and left members",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Manual point modification by administrators.</li>
          <li>Full reset to launch new seasons.</li>
          <li><strong>Hide left members</strong>: automatically clean your leaderboard.</li>
          <li>Manual prestige role assignment via /manage_leaderboard.</li>
        </ul>
      ),
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Tracking and custom questions reset",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Cycle tracking</strong>: view the number of questions asked.</li>
          <li><strong>Reset</strong>: restart the cycle to re-ask your questions.</li>
          <li>Simplified management: quick add, edit, and delete.</li>
          <li>Appearance order choice: sequential or random.</li>
        </ul>
      ),
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Reliability, tests and emergency stop",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Simultaneous tests</strong>: run /test_question without impacting official.</li>
          <li><strong>Stop test question</strong>: cancel a test at any time via button.</li>
          <li>Regular backups and synchronization at startup.</li>
          <li>Automatic admin notifications for technical issues.</li>
        </ul>
      ),
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Integrated game moderation",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Temporary (in days) or permanent banning of cheaters.</li>
          <li>Answer invalidation via ⚠️ reaction by an admin.</li>
          <li>Visualization and management of banned list with /listban.</li>
          <li>Full control over who can participate in the competition.</li>
        </ul>
      ),
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Action logging",
      description: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Dedicated logs channel to track every modification.</li>
          <li>Traceability of time, channel, and role changes.</li>
          <li>History of moderation actions (ban/unban).</li>
          <li>Full transparency on bot administrator activity.</li>
        </ul>
      ),
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
