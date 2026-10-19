import React from 'react';
import { LogoModoIA360 } from './LogoModoIA360';
import { PageId } from './Navbar';
import { MessageCircle, Play } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayIntro }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 py-12 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer transition-opacity hover:opacity-90 inline-block"
              aria-label="ModoIA360 Volver a inicio"
            >
              <LogoModoIA360 variant="original" size="md" />
            </button>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Ayudamos a empresas a crecer y optimizar su operativa mediante Inteligencia Artificial práctica, diseño web de alto impacto y automatizaciones a medida.
            </p>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-2xs">
              <span className="font-bold text-slate-900 block mb-0.5">Compromiso ModoIA360:</span>
              «Probamos. Medimos. Si funciona, avanzamos. Si no aporta valor, te lo decimos».
            </div>

            <div className="pt-2">
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 text-xs text-blue-700 hover:text-blue-800 font-medium transition-colors cursor-pointer group"
              >
                <Play className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Volver a ver animación 360° de bienvenida</span>
              </button>
            </div>
          </div>

          {/* Col 3: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Soluciones</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('service-ai')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Inteligencia Artificial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-web')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Diseño Web Profesional
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-automation')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Automatizaciones de Procesos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai-demo')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Demostración IA
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Metodología */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Metodología</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('trial')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Prueba Gratuita 7 Días
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commitment')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Compromiso de Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Solicitar Diagnóstico
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Contacto Oficial</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/34640299199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-800 hover:text-emerald-700 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">+34 640 299 199</span>
              </a>

              <p className="text-xs text-slate-500 leading-relaxed">
                Atención directa a empresas y profesionales. Horario: L-V de 09:00 a 19:00 (España).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal notices */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ModoIA360. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => handleNav('legal')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
