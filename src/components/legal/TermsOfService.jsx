import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const TermsOfService = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    fr: {
      title: "Conditions d'Utilisation du Bot \"Daily Question\"",
      lastUpdated: "17 septembre 2025",
      intro: "Ces conditions d'utilisation (\"Conditions\") régissent votre utilisation du bot Discord \"Daily Question\" (\"le Bot\"). En ajoutant ce Bot à votre serveur Discord ou en utilisant ses fonctionnalités, vous acceptez d'être lié par ces Conditions.",
      sections: [
        {
          title: "1. Description du service",
          text: "Le Bot fournit un jeu de questions-réponses automatisé pour les serveurs Discord. Il permet aux administrateurs de configurer des questions, de définir des horaires, d'attribuer des points et des récompenses etc."
        },
        {
          title: "2. Utilisation autorisée",
          text: "Vous vous engagez à utiliser le Bot conformément aux Conditions d'Utilisation de Discord et à ne pas :",
          list: [
            "Utiliser le Bot à des fins illégales ou non autorisées.",
            "Soumettre du contenu (via les questions personnalisées ou les réponses) qui est haineux, menaçant, harcelant, obscène ou qui viole les droits d'autrui.",
            "Tenter d'exploiter, de surcharger ou de nuire au fonctionnement du Bot.",
            "Automatiser les réponses ou contourner les mécaniques du jeu de manière déloyale."
          ]
        },
        {
          title: "3. Responsabilités des administrateurs de serveur",
          text: "Les administrateurs du serveur qui ajoutent le Bot sont responsables de :",
          list: [
            "La configuration du Bot sur leur serveur.",
            "La modération du contenu généré par leurs utilisateurs (questions personnalisées).",
            "La gestion des permissions d'administration du Bot (rôles et utilisateurs admin).",
            "Informer leurs membres de la manière dont le Bot fonctionne, notamment en ce qui concerne la collecte des réponses et l'affichage du classement."
          ]
        },
        {
          title: "4. Droit de modération et de suspension",
          text: "Les administrateurs de serveur, ainsi que l'opérateur du Bot, ont le droit de bannir tout utilisateur de l'utilisation des fonctionnalités du Bot pour violation de ces Conditions ou pour toute autre raison jugée valable.",
          extra: "Nous, les opérateurs du Bot, nous réservons le droit de retirer le Bot d'un serveur, de cesser de fournir le service ou de modifier ses fonctionnalités à tout moment, avec ou sans préavis."
        },
        {
          title: "5. Clause de non-responsabilité",
          text: "Le Bot est fourni \"en l'état\" et \"tel que disponible\", sans aucune garantie de quelque nature que ce soit. Nous ne garantissons pas que le Bot sera toujours disponible, ininterrompu, sécurisé ou exempt d'erreurs. Vous utilisez le Bot à vos propres risques. L'opérateur du Bot ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'incapacité à utiliser le Bot."
        },
        {
          title: "6. Modifications des conditions",
          text: "Nous nous réservons le droit de modifier ces Conditions à tout moment. Si des modifications sont apportées, nous ferons des efforts raisonnables pour en informer les utilisateurs. Votre utilisation continue du Bot après de telles modifications constitue votre acceptation des nouvelles Conditions."
        },
        {
          title: "7. Contact",
          text: "Pour toute question relative à ces Conditions d'Utilisation, veuillez contacter l'opérateur du Bot via notre serveur Discord."
        }
      ]
    },
    en: {
      title: "Terms of Service for \"Daily Question\" Bot",
      lastUpdated: "September 17, 2025",
      intro: "These terms of service (\"Terms\") govern your use of the Discord bot \"Daily Question\" (\"the Bot\"). By adding this Bot to your Discord server or using its features, you agree to be bound by these Terms.",
      sections: [
        {
          title: "1. Service Description",
          text: "The Bot provides an automated question-and-answer game for Discord servers. It allows administrators to configure questions, set schedules, assign points and rewards, etc."
        },
        {
          title: "2. Authorized Use",
          text: "You agree to use the Bot in accordance with Discord's Terms of Service and not to:",
          list: [
            "Use the Bot for illegal or unauthorized purposes.",
            "Submit content (via custom questions or answers) that is hateful, threatening, harassing, obscene, or violates the rights of others.",
            "Attempt to exploit, overload, or harm the Bot's operation.",
            "Automate answers or bypass game mechanics unfairly."
          ]
        },
        {
          title: "3. Server Administrator Responsibilities",
          text: "Server administrators who add the Bot are responsible for:",
          list: [
            "The Bot's configuration on their server.",
            "Moderation of content generated by their users (custom questions).",
            "Management of the Bot's administration permissions (admin roles and users).",
            "Informing their members about how the Bot works, particularly regarding answer collection and leaderboard display."
          ]
        },
        {
          title: "4. Right to Moderate and Suspend",
          text: "Server administrators, as well as the Bot operator, have the right to ban any user from using the Bot's features for violating these Terms or for any other reason deemed valid.",
          extra: "We, the Bot operators, reserve the right to remove the Bot from a server, cease providing the service, or modify its features at any time, with or without notice."
        },
        {
          title: "5. Disclaimer",
          text: "The Bot is provided \"as is\" and \"as available\", without any warranty of any kind. We do not guarantee that the Bot will always be available, uninterrupted, secure, or error-free. You use the Bot at your own risk. The Bot operator cannot be held liable for direct or indirect damages resulting from the use or inability to use the Bot."
        },
        {
          title: "6. Modifications to Terms",
          text: "We reserve the right to modify these Terms at any time. If modifications are made, we will make reasonable efforts to inform users. Your continued use of the Bot after such modifications constitutes your acceptance of the new Terms."
        },
        {
          title: "7. Contact",
          text: "For any questions regarding these Terms of Service, please contact the Bot operator via our Discord server."
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
                <p className="text-gray-300 mb-4">{section.text}</p>
                {section.list && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.extra && (
                  <p className="text-gray-300">{section.extra}</p>
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

export default TermsOfService;
