import React, { useState, useEffect } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface FloatingTrialBannerProps {
  onOpenBooking: () => void;
}

export const FloatingTrialBanner: React.FC<FloatingTrialBannerProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('modoia360_trial_banner_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('modoia360_trial_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Oferta de prueba gratuita de 7 días"
      className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans"
    >
      <div className="max-w-5xl mx-auto bg-white/95 text-slate-900 rounded-xl border border-blue-200 shadow-xl backdrop-blur-md pointer-events-auto p-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Branding icon & Message */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="hidden xs:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>

          <div className="text-left min-w-0 pr-6 sm:pr-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>7 días para demostrarte lo que la IA puede hacer por tu negocio</span>
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 line-clamp-1 sm:line-clamp-none">
              Probamos una solución adaptada a tus necesidades, medimos los resultados y te entregamos un análisis final. Sin compromiso de contratación.
            </p>
          </div>
        </div>

        {/* Right: CTA & Dismiss */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Agenda tu llamada gratuita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleDismiss}
            aria-label="Cerrar aviso de prueba gratuita"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
            title="Cerrar este aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
