import React, { useState } from 'react';
import { LogoModoIA360 } from './LogoModoIA360';
import { Menu, X, PhoneCall, MessageCircle } from 'lucide-react';

export type PageId =
  | 'home'
  | 'service-ai'
  | 'service-web'
  | 'service-automation'
  | 'ai-demo'
  | 'trial'
  | 'commitment'
  | 'contact'
  | 'privacy'
  | 'legal';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single element on white background) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 text-left cursor-pointer transition-opacity hover:opacity-90 shrink-0"
            aria-label="ModoIA360 Inicio"
          >
            <LogoModoIA360 variant="original" size="md" />
          </button>

          {/* Zone 2: 4-5 concise single-line nav links with warm, natural typography */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleLinkClick('home')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'home' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleLinkClick('service-ai')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'service-ai' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Inteligencia Artificial
            </button>
            <button
              onClick={() => handleLinkClick('service-web')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'service-web' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Diseño Web
            </button>
            <button
              onClick={() => handleLinkClick('service-automation')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'service-automation' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Automatizaciones
            </button>
            <button
              onClick={() => handleLinkClick('ai-demo')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'ai-demo' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Demostración IA
            </button>
            <button
              onClick={() => handleLinkClick('trial')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'trial' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Prueba 7 Días
            </button>
            <button
              onClick={() => handleLinkClick('commitment')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'commitment' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Compromiso
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Quick WhatsApp */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20información%20sobre%20vuestras%20soluciones%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Chat directo por WhatsApp (+34 640 299 199)"
              aria-label="WhatsApp directo"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
            >
              Agendar Llamada
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleLinkClick('home')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'home'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleLinkClick('service-ai')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'service-ai'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Inteligencia Artificial
          </button>
          <button
            onClick={() => handleLinkClick('service-web')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'service-web'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Diseño Web
          </button>
          <button
            onClick={() => handleLinkClick('service-automation')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'service-automation'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Automatizaciones
          </button>
          <button
            onClick={() => handleLinkClick('ai-demo')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'ai-demo'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Demostración IA
          </button>
          <button
            onClick={() => handleLinkClick('trial')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'trial'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Prueba 7 Días
          </button>
          <button
            onClick={() => handleLinkClick('commitment')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'commitment'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Compromiso & Metodología
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`block w-full text-left py-2 px-3 rounded-lg text-base ${
              currentPage === 'contact'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Contacto Directo
          </button>

          <div className="pt-3 border-t border-slate-200 flex gap-2">
            <a
              href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20información%20sobre%20vuestras%20soluciones"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-bold shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
