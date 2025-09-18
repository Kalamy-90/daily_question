import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-purple-300">
            Conditions d'Utilisation du Bot "Daily Question"
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-gray-300 mb-6">
              <strong>Dernière mise à jour :</strong> 17 septembre 2025
            </p>
            
            <p className="text-gray-300 mb-6">
              Ces conditions d'utilisation ("Conditions") régissent votre utilisation du bot Discord "Daily Question" ("le Bot"). En ajoutant ce Bot à votre serveur Discord ou en utilisant ses fonctionnalités, vous acceptez d'être lié par ces Conditions.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Description du service</h2>
              <p className="text-gray-300">
                Le Bot fournit un jeu de questions-réponses automatisé pour les serveurs Discord. Il permet aux administrateurs de configurer des questions, de définir des horaires, d'attribuer des points et des récompenses etc.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Utilisation autorisée</h2>
              <p className="text-gray-300 mb-4">
                Vous vous engagez à utiliser le Bot conformément aux Conditions d'Utilisation de Discord et à ne pas :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Utiliser le Bot à des fins illégales ou non autorisées.</li>
                <li>Soumettre du contenu (via les questions personnalisées ou les réponses) qui est haineux, menaçant, harcelant, obscène ou qui viole les droits d'autrui.</li>
                <li>Tenter d'exploiter, de surcharger ou de nuire au fonctionnement du Bot.</li>
                <li>Automatiser les réponses ou contourner les mécaniques du jeu de manière déloyale.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Responsabilités des administrateurs de serveur</h2>
              <p className="text-gray-300 mb-4">
                Les administrateurs du serveur qui ajoutent le Bot sont responsables de :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>La configuration du Bot sur leur serveur.</li>
                <li>La modération du contenu généré par leurs utilisateurs (questions personnalisées).</li>
                <li>La gestion des permissions d'administration du Bot (rôles et utilisateurs admin).</li>
                <li>Informer leurs membres de la manière dont le Bot fonctionne, notamment en ce qui concerne la collecte des réponses et l'affichage du classement.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Droit de modération et de suspension</h2>
              <p className="text-gray-300 mb-4">
                Les administrateurs de serveur, ainsi que l'opérateur du Bot, ont le droit de bannir tout utilisateur de l'utilisation des fonctionnalités du Bot pour violation de ces Conditions ou pour toute autre raison jugée valable.
              </p>
              <p className="text-gray-300">
                Nous, les opérateurs du Bot, nous réservons le droit de retirer le Bot d'un serveur, de cesser de fournir le service ou de modifier ses fonctionnalités à tout moment, avec ou sans préavis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Clause de non-responsabilité</h2>
              <p className="text-gray-300">
                Le Bot est fourni "en l'état" et "tel que disponible", sans aucune garantie de quelque nature que ce soit. Nous ne garantissons pas que le Bot sera toujours disponible, ininterrompu, sécurisé ou exempt d'erreurs. Vous utilisez le Bot à vos propres risques. L'opérateur du Bot ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'incapacité à utiliser le Bot.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Modifications des conditions</h2>
              <p className="text-gray-300">
                Nous nous réservons le droit de modifier ces Conditions à tout moment. Si des modifications sont apportées, nous ferons des efforts raisonnables pour en informer les utilisateurs. Votre utilisation continue du Bot après de telles modifications constitue votre acceptation des nouvelles Conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">7. Contact</h2>
              <p className="text-gray-300">
                Pour toute question relative à ces Conditions d'Utilisation, veuillez contacter l'opérateur du Bot via notre serveur Discord.
              </p>
            </section>
          </div>

          <div className="text-center">
            <a 
              href="/" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

