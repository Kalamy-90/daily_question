import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-purple-300">
            Politique de Confidentialité du Bot "Daily Question"
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-gray-300 mb-6">
              <strong>Dernière mise à jour :</strong> 17 septembre 2025
            </p>
            
            <p className="text-gray-300 mb-6">
              Cette Politique de Confidentialité explique quelles informations le bot "Daily Question" ("le Bot") collecte, pourquoi nous les collectons, et comment vous pouvez les gérer. En ajoutant et en utilisant ce Bot sur votre serveur Discord, vous acceptez la collecte et l'utilisation des informations conformément à cette politique.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Informations que nous collectons</h2>
              <p className="text-gray-300 mb-4">
                Le Bot ne stocke que les données nécessaires à son fonctionnement sur un serveur donné. Ces données sont stockées dans un fichier local (server_configs.json) sur le serveur qui héberge le Bot.
              </p>

              <h3 className="text-xl font-semibold text-purple-200 mb-3">a) Données relatives aux serveurs (Guilds)</h3>
              <p className="text-gray-300 mb-3">Pour chaque serveur où le Bot est installé, nous stockons :</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li><strong>ID du serveur :</strong> Pour identifier et sauvegarder la configuration unique de chaque serveur.</li>
                <li><strong>ID des salons :</strong> Pour le salon des questions (question_channel) et le salon des logs (log_channel_id).</li>
                <li><strong>ID des rôles :</strong> Pour les rôles administrateurs, le rôle à mentionner (ping_role), les rôles de récompense (rewards) et les rôles du podium (leaderboard_roles).</li>
                <li><strong>Configuration du Bot :</strong> Tous les paramètres définis via la commande /config, comme le fuseau horaire, la fréquence des questions, le mode de réponse, etc.</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-200 mb-3">b) Données relatives aux utilisateurs</h3>
              <p className="text-gray-300 mb-3">Nous ne collectons des informations sur les utilisateurs que dans le cadre des fonctionnalités du Bot :</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li><strong>ID utilisateur :</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Pour les administrateurs du Bot (admin_users).</li>
                    <li>Pour suivre les points dans le classement (user_points).</li>
                    <li>Pour enregistrer les réponses aux questions (current_responses).</li>
                    <li>Pour gérer les utilisateurs bannis du jeu (banned_users).</li>
                    <li>Pour identifier les derniers gagnants (last_winners) afin de gérer les rôles de récompense.</li>
                  </ul>
                </li>
                <li><strong>Contenu généré par les utilisateurs :</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Réponses aux questions :</strong> Votre réponse à une question est temporairement stockée avec votre ID utilisateur et un horodatage jusqu'à l'annonce des résultats.</li>
                    <li><strong>Questions personnalisées :</strong> Les questions et réponses que vous ajoutez via la commande /questions_perso sont stockées de manière permanente dans la configuration du serveur.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Pourquoi nous collectons ces données</h2>
              <p className="text-gray-300 mb-4">Ces données sont essentielles pour le bon fonctionnement du Bot et de ses fonctionnalités :</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Fonctionnement principal :</strong> Pour poser des questions, collecter des réponses, déterminer les gagnants et distribuer les récompenses.</li>
                <li><strong>Personnalisation :</strong> Pour permettre aux administrateurs de chaque serveur de configurer le Bot selon leurs besoins.</li>
                <li><strong>Modération :</strong> Pour permettre aux administrateurs de gérer l'accès au jeu (via /ban et /unban) et de superviser les activités via les logs.</li>
                <li><strong>Compétition :</strong> Pour maintenir un classement des joueurs basé sur les points accumulés.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Stockage et sécurité des données</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Toutes les données collectées sont stockées dans un fichier de configuration JSON local sur la machine hébergeant le Bot.</li>
                <li>Aucune donnée n'est vendue, partagée ou louée à des services tiers.</li>
                <li>L'accès au serveur d'hébergement et aux fichiers de données est restreint à l'opérateur du Bot.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Gestion et contrôle de vos données</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Administrateurs de serveur :</strong> Vous pouvez visualiser et modifier la quasi-totalité de la configuration de votre serveur via les commandes /config, /questions_perso et /gestion_classement.</li>
                <li><strong>Utilisateurs :</strong> Votre participation au jeu est volontaire. Si vous souhaitez que vos points soient réinitialisés ou que vos données de réponse soient purgées, vous pouvez en faire la demande à un administrateur de votre serveur Discord ou à l'opérateur du Bot.</li>
                <li><strong>Suppression des données :</strong> Lorsqu'un administrateur retire le Bot d'un serveur, il peut contacter l'opérateur du Bot pour demander la suppression complète des données de configuration de ce serveur. Sans demande, les données peuvent être conservées pour faciliter une réinstallation future.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Modifications de cette politique</h2>
              <p className="text-gray-300">
                Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique sur une page dédiée ou via une commande du Bot.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Nous contacter</h2>
              <p className="text-gray-300">
                Si vous avez des questions concernant cette Politique de Confidentialité, veuillez contacter l'opérateur du Bot via notre serveur Discord.
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

export default PrivacyPolicy;

