import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PositioningSection } from './components/PositioningSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { EcosystemSection } from './components/EcosystemSection';
import { TrustSection } from './components/TrustSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { PromiseSection } from './components/PromiseSection';
import { CTASection } from './components/CTASection';
import { RealizationsSection } from './components/RealizationsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-violet selection:text-white">
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      <HeroSection />
      <PositioningSection />
      <ExpertiseSection />
      <EcosystemSection />
      <TrustSection />
      <DifferentiationSection />
      <PromiseSection />
      <CTASection onOpenContactModal={() => setIsContactModalOpen(true)} />
      <RealizationsSection />
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>);

}