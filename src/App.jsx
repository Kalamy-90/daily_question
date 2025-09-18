import React from 'react';
    import LandingHeader from '@/components/landing/LandingHeader';
    import FeaturesSection from '@/components/landing/FeaturesSection';
    import CommandsSection from '@/components/landing/CommandsSection';
    import HowToStartSection from '@/components/landing/HowToStartSection';
    import FaqSection from '@/components/landing/FaqSection';
    import PageFooter from '@/components/landing/PageFooter';
    import { Toaster } from '@/components/ui/toaster';

    const App = () => {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 font-sans">
          <Toaster />
          <LandingHeader />
          <main className="pt-0"> {/* Adjusted padding, LandingHeader now has its own padding logic */}
            <FeaturesSection />
            <CommandsSection />
            <HowToStartSection />
            <FaqSection />
          </main>
          <PageFooter />
        </div>
      );
    };

    export default App;