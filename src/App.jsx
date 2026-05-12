import React from 'react';
import LandingHeader from '@/components/landing/LandingHeader';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CommandsSection from '@/components/landing/CommandsSection';
import HowToStartSection from '@/components/landing/HowToStartSection';
import FaqSection from '@/components/landing/FaqSection';
import NewFeaturesSection from '@/components/landing/NewFeaturesSection';
import PageFooter from '@/components/landing/PageFooter';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <div className="site-shell min-h-screen text-slate-100">
      <div className="luxury-noise" aria-hidden="true" />
      <Toaster />
      <div className="relative z-10">
        <LandingHeader />
        <main>
          <NewFeaturesSection />
          <FeaturesSection />
          <CommandsSection />
          <HowToStartSection />
          <FaqSection />
        </main>
        <PageFooter />
      </div>
    </div>
  );
};

export default App;
