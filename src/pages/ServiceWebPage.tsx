import React from 'react';
import { PageId } from '../components/Navbar';
import {
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  Search,
} from 'lucide-react';
import webHeroImg from '../assets/images/web_design_showcase_1792149520742.jpg';

interface ServiceWebPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServiceWebPage: React.FC<ServiceWebPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-cyan-700">
              <Globe className="w-4 h-4 text-cyan-600" />
              <span>Diseño Web Orientado a Resultados</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Una web debe ser una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600">herramienta de negocio</span>, no solo una imagen bonita
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Diseñamos sitios web modernos, rápidos y persuasivos que transmiten la solidez de tu empresa y están pensados desde el primer pixel para transformar visitas en clientes reales.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Solicitar valoración de diseño web
              </button>
              <button
                onClick={() => onNavigate('trial')}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs cursor-pointer"
              >
                Conocer la prueba de 7 días
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
            <img
              src={webHeroImg}
              alt="Muestrario de diseño web responsive corporativo de ModoIA360"
              className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md">
              <p className="text-xs text-slate-600 font-medium">
                Estándares ModoIA360: 100% Responsive · WCAG Accesibilidad · Carga ultra-rápida · Arquitectura de conversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Los 4 Pilares del Diseño Web de ModoIA360 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Los fundamentos de una web comercial exitosa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No utilizamos plantillas sobrecargadas. Cada proyecto se concibe con rigor técnico y comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Mobile-First Real</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Más del 70% de tus clientes consultan desde el móvil. Diseñamos con botones accesibles, navegación cómoda con una sola mano y textos nítidos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Enfoque de Conversión</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Estructura jerárquica clara con llamadas a la acción comprensibles que guían al visitante de la curiosidad al contacto sin fricciones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Velocidad de Carga</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Carga casi instantánea sin scripts innecesarios. Las webs rápidas reducen la tasa de rebote y multiplican las conversiones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">SEO Técnico Preparado</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Estructura semántica HTML5, metadatos enriquecidos, marcado Schema.org y jerarquía de encabezados optimizada para Google.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo en 5 Fases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Nuestro proceso de trabajo transparente
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Paso a paso, con entregas claras y validación continua antes de pasar a la siguiente fase.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
              01
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Diagnóstico y Propuesta de Valor</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Analizamos qué hace única a tu empresa, a quién se dirige y qué objetivo prioritario debe cumplir el sitio web.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
              02
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Arquitectura y Diseño UX/UI</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Definimos la estructura de páginas, el mapa de contenidos y la interfaz visual adaptada a tu identidad de marca.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
              03
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Desarrollo Técnico y Conexión</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Programación limpia, integración de formularios, WhatsApp directo y preparación para posibles automatizaciones.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
              04
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Pruebas en Dispositivos y Optimización SEO</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Revisión exhaustiva en móviles, tablets y ordenadores de distintas resoluciones, auditoría de velocidad y accesibilidad.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">
              05
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Lanzamiento y Seguimiento de Resultados</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Publicación oficial, verificación de indexación en buscadores y medición del comportamiento inicial de los usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ¿Tu web actual representa la calidad de lo que ofreces?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Analizamos tu presencia digital y te explicamos qué oportunidades de mejora existen sin ningún compromiso.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Solicitar valoración de mi página web
        </button>
      </section>
    </div>
  );
};
