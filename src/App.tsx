import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntroAnimation } from './components/IntroAnimation';
import { FloatingTrialBanner } from './components/FloatingTrialBanner';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServiceAIPage } from './pages/ServiceAIPage';
import { ServiceWebPage } from './pages/ServiceWebPage';
import { ServiceAutomationPage } from './pages/ServiceAutomationPage';
import { AIDemoPage } from './pages/AIDemoPage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { CommitmentPage } from './pages/CommitmentPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, LegalNoticePage } from './pages/LegalPages';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Check if intro has already run in this session
    const seen = sessionStorage.getItem('modoia360_intro_completed');
    return seen !== 'true';
  });

  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Inteligencia artificial');

  const handleIntroComplete = () => {
    sessionStorage.setItem('modoia360_intro_completed', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedServiceForBooking(service);
    setIsBookingOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Fullscreen 3D Holographic Intro Animation (Elemento Prioritario) */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* 2. Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'service-ai' && (
          <ServiceAIPage
            onOpenBooking={() => handleOpenBooking('Inteligencia artificial')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'service-web' && (
          <ServiceWebPage
            onOpenBooking={() => handleOpenBooking('Diseño web')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'service-automation' && (
          <ServiceAutomationPage
            onOpenBooking={() => handleOpenBooking('Automatizaciones')}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'ai-demo' && (
          <AIDemoPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'trial' && (
          <FreeTrialPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'commitment' && (
          <CommitmentPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'legal' && (
          <LegalNoticePage onNavigate={handleNavigate} />
        )}
      </main>

      {/* 4. Footer with all links and replay trigger */}
      <Footer onNavigate={handleNavigate} onReplayIntro={handleReplayIntro} />

      {/* 5. Floating Bottom Banner for 7-Day Free Trial (dismissible, 15% sticky cap compliant) */}
      <FloatingTrialBanner onOpenBooking={() => handleOpenBooking()} />

      {/* 6. Direct WhatsApp Floating Action Button */}
      <aside aria-label="Contacto rápido" className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-30">
        <a
          href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20información%20para%20mi%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-xs font-bold border border-emerald-500/40"
          title="Escríbenos directamente por WhatsApp (+34 640 299 199)"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp ModoIA360</span>
        </a>
      </aside>


      {/* 7. Booking & Diagnostic Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
