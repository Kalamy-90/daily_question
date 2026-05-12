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
    <div className="site-shell min-h-screen text-slate-100">
      <div className="luxury-noise" />
      <div className="relative z-10 container mx-auto px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <a
            href="/"
            className="mb-10 inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 text-sm font-semibold leading-none text-slate-200 backdrop-blur-xl transition-colors hover:border-amber-200/40 hover:text-amber-100"
          >
            <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center text-base leading-none">←</span>
            <span className="inline-flex h-4 items-center leading-none">{t.nav.backToHome}</span>
          </a>

          <header className="mb-10 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-amber-200/80">
              {language === 'fr' ? 'Document légal' : 'Legal document'}
            </p>
            <h1 className="pb-3 font-display text-4xl font-bold leading-[1.18] tracking-tight text-transparent bg-clip-text sm:text-5xl sm:leading-[1.14]"
              style={{ backgroundImage: 'linear-gradient(135deg, #fff8df 0%, #f4c974 52%, #a78bfa 100%)' }}
            >
              {current.title}
            </h1>
          </header>
          
          <article className="premium-card p-7 sm:p-10">
            <div className="relative z-10">
              <p className="mb-7 rounded-2xl border border-amber-200/15 bg-amber-200/10 px-5 py-4 text-sm text-amber-100">
                <strong>{language === 'fr' ? 'Dernière mise à jour :' : 'Last updated:'}</strong> {current.lastUpdated}
              </p>
              
              <p className="mb-10 text-base leading-8 text-slate-300">
                {current.intro}
              </p>

              {current.sections.map((section, idx) => (
                <section key={idx} className="border-t border-white/10 py-8 first:border-t-0 first:pt-0 last:pb-0">
                  <h2 className="mb-4 font-display text-2xl font-semibold text-amber-100">{section.title}</h2>
                  <p className="mb-4 leading-8 text-slate-300">{section.text}</p>
                  {section.list && (
                    <ul className="mb-4 space-y-3 text-slate-300">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex gap-3 leading-7">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.extra && (
                    <p className="leading-8 text-slate-300">{section.extra}</p>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
