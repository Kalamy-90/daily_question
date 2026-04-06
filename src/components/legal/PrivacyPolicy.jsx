import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    fr: {
      title: "Politique de Confidentialité du Bot \"Daily Question\"",
      lastUpdated: "17 septembre 2025",
      intro: "Cette Politique de Confidentialité explique quelles informations le bot \"Daily Question\" (\"le Bot\") collecte, pourquoi nous les collectons, et comment vous pouvez les gérer. En ajoutant et en utilisant ce Bot sur votre serveur Discord, vous acceptez la collecte et l'utilisation des informations conformément à cette politique.",
      sections: [
        {
          title: "1. Informations que nous collectons",
          text: "Le Bot ne stocke que les données nécessaires à son fonctionnement sur un serveur donné. Ces données sont stockées dans un fichier local (server_configs.json) sur le serveur qui héberge le Bot.",
          subsections: [
            {
              title: "a) Données relatives aux serveurs (Guilds)",
              intro: "Pour chaque serveur où le Bot est installé, nous stockons :",
              list: [
                "ID du serveur : Pour identifier et sauvegarder la configuration unique de chaque serveur.",
                "ID des salons : Pour le salon des questions (question_channel) et le salon des logs (log_channel_id).",
                "ID des rôles : Pour les rôles administrateurs, le rôle à mentionner (ping_role), les rôles de récompense (rewards) et les rôles du podium (leaderboard_roles).",
                "Configuration du Bot : Tous les paramètres définis via la commande /config, comme le fuseau horaire, la fréquence des questions, le mode de réponse, etc."
              ]
            },
            {
              title: "b) Données relatives aux utilisateurs",
              intro: "Nous ne collectons des informations sur les utilisateurs que dans le cadre des fonctionnalités du Bot :",
              list: [
                "ID utilisateur : Pour les administrateurs du Bot, le classement, les réponses et les bannissements.",
                "Contenu généré par les utilisateurs : Réponses aux questions (temporaire) et questions personnalisées (permanent)."
              ]
            }
          ]
        },
        {
          title: "2. Pourquoi nous collectons ces données",
          text: "Ces données sont essentielles pour le bon fonctionnement du Bot et de ses fonctionnalités :",
          list: [
            "Fonctionnement principal : Poser des questions, collecter des réponses, déterminer les gagnants.",
            "Personnalisation : Permettre aux administrateurs de configurer le Bot.",
            "Modération : Gérer l'accès au jeu et superviser les activités.",
            "Compétition : Maintenir un classement des joueurs."
          ]
        },
        {
          title: "3. Stockage et sécurité des données",
          list: [
            "Toutes les données sont stockées localement sur la machine hébergeant le Bot.",
            "Aucune donnée n'est vendue, partagée ou louée à des tiers.",
            "L'accès aux fichiers est restreint à l'opérateur du Bot."
          ]
        },
        {
          title: "4. Gestion et contrôle de vos données",
          list: [
            "Administrateurs : Modification via /config, /questions_perso, /gestion_classement.",
            "Utilisateurs : Participation volontaire, demande de réinitialisation possible.",
            "Suppression : Contactez l'opérateur pour une suppression complète lors du retrait du Bot."
          ]
        },
        {
          title: "5. Modifications de cette politique",
          text: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous notifierons de tout changement important."
        },
        {
          title: "6. Nous contacter",
          text: "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez contacter l'opérateur du Bot via notre serveur Discord."
        }
      ]
    },
    en: {
      title: "Privacy Policy for \"Daily Question\" Bot",
      lastUpdated: "September 17, 2025",
      intro: "This Privacy Policy explains what information the \"Daily Question\" bot (\"the Bot\") collects, why we collect it, and how you can manage it. By adding and using this Bot on your Discord server, you agree to the collection and use of information in accordance with this policy.",
      sections: [
        {
          title: "1. Information We Collect",
          text: "The Bot only stores data necessary for its operation on a given server. This data is stored in a local file (server_configs.json) on the server hosting the Bot.",
          subsections: [
            {
              title: "a) Server Data (Guilds)",
              intro: "For each server where the Bot is installed, we store:",
              list: [
                "Server ID: To identify and save each server's unique configuration.",
                "Channel IDs: For the question channel (question_channel) and log channel (log_channel_id).",
                "Role IDs: For admin roles, the role to mention (ping_role), reward roles (rewards), and podium roles (leaderboard_roles).",
                "Bot Configuration: All settings defined via the /config command, such as timezone, question frequency, response mode, etc."
              ]
            },
            {
              title: "b) User Data",
              intro: "We only collect information about users within the scope of the Bot's features:",
              list: [
                "User ID: For Bot administrators, leaderboard, responses, and bans.",
                "User-generated content: Question answers (temporary) and custom questions (permanent)."
              ]
            }
          ]
        },
        {
          title: "2. Why We Collect This Data",
          text: "This data is essential for the proper functioning of the Bot and its features:",
          list: [
            "Core Functionality: Asking questions, collecting answers, determining winners.",
            "Customization: Allowing administrators to configure the Bot.",
            "Moderation: Managing game access and supervising activities.",
            "Competition: Maintaining a player leaderboard."
          ]
        },
        {
          title: "3. Data Storage and Security",
          list: [
            "All data is stored locally on the machine hosting the Bot.",
            "No data is sold, shared, or rented to third parties.",
            "Access to files is restricted to the Bot operator."
          ]
        },
        {
          title: "4. Data Management and Control",
          list: [
            "Administrators: Modification via /config, /custom_questions, /manage_leaderboard.",
            "Users: Voluntary participation, reset requests possible.",
            "Deletion: Contact the operator for full deletion when removing the Bot."
          ]
        },
        {
          title: "5. Policy Changes",
          text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes."
        },
        {
          title: "6. Contact Us",
          text: "If you have any questions regarding this Privacy Policy, please contact the Bot operator via our Discord server."
        }
      ]
    }
  };

  const current = content[language] || content.fr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-purple-300">
            {current.title}
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-gray-300 mb-6">
              <strong>{language === 'fr' ? 'Dernière mise à jour :' : 'Last updated:'}</strong> {current.lastUpdated}
            </p>
            
            <p className="text-gray-300 mb-6">
              {current.intro}
            </p>

            {current.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">{section.title}</h2>
                {section.text && <p className="text-gray-300 mb-4">{section.text}</p>}
                {section.subsections && section.subsections.map((sub, sidx) => (
                  <div key={sidx} className="mb-4 ml-4">
                    <h3 className="text-xl font-medium text-purple-200 mb-2">{sub.title}</h3>
                    {sub.intro && <p className="text-gray-300 mb-2">{sub.intro}</p>}
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      {sub.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {t.nav.backToHome}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
