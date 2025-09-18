import React from 'react';
    import kalamyTeamLogo from '@/assets/kalamy-team-logo.png';

    const PageFooter = () => {
      const currentYear = new Date().getFullYear();
      return (
        <footer className="py-12 bg-slate-950 text-center text-gray-400">
          <div className="container mx-auto px-6">
            <div className="mb-6">
              <img 
                src={kalamyTeamLogo} 
                alt="Logo Kalamy's Team" 
                className="h-20 mx-auto" />
            </div>
            <p className="mb-2">&copy; {currentYear} Daily Question Bot.</p>
            <p className="mb-4">Développé par : <span className="text-purple-400">@kalamy.</span> (sur Discord)</p>
            <div className="flex flex-wrap justify-center space-x-6 mb-4 text-sm">
              <a href="https://discord.com/oauth2/authorize?client_id=1181626669795119105" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Inviter le Bot</a>
              <a href="https://discord.gg/wE6vjjCXW3" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Serveur de Support</a>
              <a href="https://top.gg/bot/1181626669795119105" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">Votez sur Top.gg</a>
              <a href="/conditions-utilisation" className="hover:text-purple-300 transition-colors">Conditions d'utilisation</a>
              <a href="/politique-confidentialite" className="hover:text-purple-300 transition-colors">Politique de confidentialité</a>
            </div>
            <p className="text-sm">Technologie : Python (discord.py), pytz, stockage JSON.</p>
          </div>
        </footer>
      );
    };

    export default PageFooter;