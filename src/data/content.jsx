import React from 'react';
import { Settings, PlayCircle, HelpCircle, ListChecks, BarChart2, Shield, Zap, Award, LogIn, MessageCircle, Users, Edit3, Server, AlertTriangle, DatabaseZap, CalendarClock, FileText, UserCheck, BellRing, RotateCcw, Languages, Eye, UserMinus, Pause, CheckSquare, Maximize2 } from 'lucide-react';

export const featuresData = {
  fr: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Questions quotidiennes automatisées",
      description: (
        <div className="space-y-4">
          <p>Chaque jour, à une heure que vous définissez, le bot publie automatiquement une nouvelle question dans le salon de votre choix.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Planification ultra flexible</strong> : par heure, jour, semaine ou mois.</li>
            <li><strong>Multi-programmation</strong> : programmez plusieurs questions dans la même journée.</li>
            <li><strong>Base incluse</strong> : culture générale, histoire, science, etc.</li>
            <li><strong>Questions perso</strong> : ajoutez vos propres questions personnalisées sans limite.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Configuration personnalisable et mise en pause",
      description: (
        <div className="space-y-4">
          <p>La commande <strong>/config</strong> offre une interface intuitive avec des menus déroulants et des modales pour ajuster tous les aspects du bot.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Gestion complète</strong> : salon des questions, fuseau horaire, admins et logs.</li>
            <li><strong>Mise en pause</strong> : stoppez l'envoi automatique via une option dédiée.</li>
            <li><strong>Rôles et Pings</strong> : personnalisez le rôle à mentionner pour chaque question.</li>
            <li><strong>Podiums dynamiques</strong> : activez ou désactivez les rôles de classement.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Mode de réponse et synonymes",
      description: (
        <div className="space-y-4">
          <p>Choisissez comment les utilisateurs soumettent leurs réponses selon les besoins de votre communauté.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Formulaire modal privé</strong> : recommandé pour éviter le spam dans le salon.</li>
            <li><strong>Messages publics</strong> : pour une interaction directe dans le salon.</li>
            <li><strong>Multiples réponses</strong> : support des synonymes via le séparateur point-virgule.</li>
            <li><strong>Mode strict</strong> : force l'utilisation du bouton de réponse officiel.</li>
            <li><strong>Édition</strong> : modification autorisée avant la fin du temps imparti.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Résultats, récompenses et confidentialité",
      description: (
        <div className="space-y-4">
          <p>À l'heure des résultats, le bot annonce la bonne réponse et célèbre les gagnants avec précision.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Récompenses sur mesure</strong> : rôles Discord temporaires ou messages personnalisés.</li>
            <li><strong>Retrait automatique</strong> : les rôles sont retirés à la question suivante.</li>
            <li><strong>Masquer les réponses</strong> : option pour cacher la liste complète lors des résultats.</li>
            <li><strong>Résumé interactif</strong> : affiche les réponses et les temps de réaction exacts.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Système de classement compétitif",
      description: (
        <div className="space-y-4">
          <p>Suivez les scores des participants grâce à la commande <strong>/classement</strong> qui affiche le Top 10 des meilleurs joueurs.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Rôles de podium dynamiques</strong> : assignez des rôles prestigieux au Top 3.</li>
            <li><strong>Mise à jour automatique</strong> : les rôles changent en temps réel selon les scores.</li>
            <li><strong>Barème par défaut</strong> : 5 points pour le 1er, 3 pour le 2ème, et 1 pour le 3ème.</li>
            <li><strong>Transparence</strong> : classement général accessible à tous les membres.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Gestion du classement et membres partis",
      description: (
        <div className="space-y-4">
          <p>La commande <strong>/gestion_classement</strong> permet aux administrateurs de piloter le système de points avec précision.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Édition des points</strong> : modifiez manuellement le score de n'importe quel joueur.</li>
            <li><strong>Réinitialisation</strong> : lancez une nouvelle saison en remettant les compteurs à zéro.</li>
            <li><strong>Cacher les membres partis</strong> : épurez le classement des joueurs ayant quitté le serveur.</li>
            <li><strong>Sécurité</strong> : confirmation obligatoire avant toute action majeure.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Suivi et réinitialisation des questions perso",
      description: (
        <div className="space-y-4">
          <p>Gérez vos propres questions via <strong>/questions_perso</strong> pour une expérience 100% unique sur votre serveur.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Suivi du cycle</strong> : visualisez le nombre de questions posées et restantes.</li>
            <li><strong>Réinitialisation du cycle</strong> : relancez vos questions perso une fois épuisées.</li>
            <li><strong>Ordre flexible</strong> : choisissez entre un affichage séquentiel ou aléatoire.</li>
            <li><strong>Transition automatique</strong> : repasse aux questions globales si votre liste est vide.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Fiabilité, tests et arrêt d'urgence",
      description: (
        <div className="space-y-4">
          <p>Un système robuste conçu pour ne jamais perdre vos données et assurer une stabilité maximale.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Tests simultanés</strong> : lancez <strong>/test_question</strong> sans interrompre le jeu officiel.</li>
            <li><strong>Arrêt d'urgence</strong> : annulez une question de test à tout moment via bouton.</li>
            <li><strong>Sauvegardes automatiques</strong> : synchronisation régulière des configurations.</li>
            <li><strong>Alertes admins</strong> : notifications en cas de salon introuvable ou erreur de droits.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Modération intégrée pour le jeu",
      description: (
        <div className="space-y-4">
          <p>Gardez le contrôle total sur l'équité du jeu grâce à des outils de modération simples et puissants.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Bannissement du jeu</strong> : bannissez temporairement (en jours) ou définitivement.</li>
            <li><strong>Invalidation par réaction</strong> : réagissez avec ⚠️ pour annuler une réponse précise.</li>
            <li><strong>Gestion des bans</strong> : visualisez la liste complète des exclus avec <strong>/listban</strong>.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Journalisation (logs) des actions",
      description: (
        <div className="space-y-4">
          <p>Toutes les actions importantes sont tracées dans un salon de logs pour une transparence totale.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Suivi config</strong> : changements d'heure, de salon, de rôles ou de fuseau horaire.</li>
            <li><strong>Suivi modération</strong> : historique des bannissements et débannissements.</li>
            <li><strong>Traçabilité</strong> : sachez exactement quel administrateur a effectué quelle action.</li>
          </ul>
        </div>
      ),
    }
  ],
  en: [
    {
      icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
      title: "Automated daily questions",
      description: (
        <div className="space-y-4">
          <p>Every day, at a time you define, the bot automatically publishes a new question in the channel of your choice.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Ultra-flexible scheduling</strong>: by hour, day, week, or month.</li>
            <li><strong>Multi-scheduling</strong>: schedule multiple questions in the same day.</li>
            <li><strong>Included database</strong>: general knowledge, history, science, etc.</li>
            <li><strong>Custom questions</strong>: add your own questions without limits.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-400" />,
      title: "Customizable configuration and pause",
      description: (
        <div className="space-y-4">
          <p>The <strong>/config</strong> command offers an intuitive interface with dropdown menus and modals to adjust all aspects of the bot.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Full management</strong>: question channel, timezone, admins, and logs.</li>
            <li><strong>Pause feature</strong>: stop automatic sending via a dedicated option.</li>
            <li><strong>Roles and Pings</strong>: customize the role to mention for each question.</li>
            <li><strong>Dynamic podiums</strong>: enable or disable leaderboard roles.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
      title: "Response mode and synonyms",
      description: (
        <div className="space-y-4">
          <p>Choose how users submit their answers based on your community's needs.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Private modal form</strong>: recommended to avoid spam in the channel.</li>
            <li><strong>Public messages</strong>: for direct interaction in the channel.</li>
            <li><strong>Multiple answers</strong>: synonym support via semicolon separator.</li>
            <li><strong>Strict mode</strong>: forces the use of the official answer button.</li>
            <li><strong>Editing</strong>: modification allowed before the time runs out.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Results, rewards and privacy",
      description: (
        <div className="space-y-4">
          <p>At results time, the bot announces the correct answer and celebrates the winners with precision.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Custom rewards</strong>: temporary Discord roles or custom messages.</li>
            <li><strong>Auto-removal</strong>: roles are removed at the next question.</li>
            <li><strong>Hide answers</strong>: option to hide the full list during results.</li>
            <li><strong>Interactive summary</strong>: displays answers and exact reaction times.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-400" />,
      title: "Competitive leaderboard system",
      description: (
        <div className="space-y-4">
          <p>Track participant scores with the <strong>/leaderboard</strong> command which displays the Top 10 best players.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Dynamic podium roles</strong>: assign prestigious roles to the Top 3.</li>
            <li><strong>Automatic updates</strong>: roles change in real-time based on scores.</li>
            <li><strong>Default scoring</strong>: 5 points for 1st, 3 for 2nd, and 1 for 3rd.</li>
            <li><strong>Transparency</strong>: overall ranking accessible to all members.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
      title: "Leaderboard management and left members",
      description: (
        <div className="space-y-4">
          <p>The <strong>/manage_leaderboard</strong> command allows administrators to drive the point system with precision.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Point editing</strong>: manually modify the score of any player.</li>
            <li><strong>Reset</strong>: launch a new season by resetting the counters.</li>
            <li><strong>Hide left members</strong>: clean the leaderboard of players who left the server.</li>
            <li><strong>Security</strong>: mandatory confirmation before any major action.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
      title: "Tracking and custom questions reset",
      description: (
        <div className="space-y-4">
          <p>Manage your own questions via <strong>/custom_questions</strong> for a 100% unique experience on your server.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Cycle tracking</strong>: view the number of questions asked and remaining.</li>
            <li><strong>Cycle reset</strong>: restart your custom questions once exhausted.</li>
            <li><strong>Flexible order</strong>: choose between sequential or random display.</li>
            <li><strong>Auto-transition</strong>: reverts to global questions if your list is empty.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
      title: "Reliability, tests and emergency stop",
      description: (
        <div className="space-y-4">
          <p>A robust system designed to never lose your data and ensure maximum stability.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Simultaneous tests</strong>: run <strong>/test_question</strong> without interrupting the official game.</li>
            <li><strong>Emergency stop</strong>: cancel a test question at any time via button.</li>
            <li><strong>Auto-backups</strong>: regular configuration synchronization.</li>
            <li><strong>Admin alerts</strong>: notifications for missing channels or permission errors.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <UserCheck className="h-10 w-10 text-red-400" />,
      title: "Integrated game moderation",
      description: (
        <div className="space-y-4">
          <p>Keep full control over game fairness with simple and powerful moderation tools.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Game banning</strong>: ban temporarily (in days) or permanently.</li>
            <li><strong>Reaction invalidation</strong>: react with ⚠️ to cancel a specific answer.</li>
            <li><strong>Ban management</strong>: view the full list of excluded users with <strong>/listban</strong>.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-400" />,
      title: "Action logging",
      description: (
        <div className="space-y-4">
          <p>All important actions are traced in a logs channel for full transparency.</p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Config tracking</strong>: changes to time, channel, roles, or timezone.</li>
            <li><strong>Mod tracking</strong>: history of bans and unbans.</li>
            <li><strong>Traceability</strong>: know exactly which administrator performed which action.</li>
          </ul>
        </div>
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
