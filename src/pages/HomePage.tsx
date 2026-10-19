import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import {
  Brain,
  Globe,
  Cpu,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

import heroImg from '../assets/images/tech_transformation_hero_1792149520906.jpg';
import aiImg from '../assets/images/ai_solutions_tech_1792149519991.jpg';
import webImg from '../assets/images/web_design_showcase_1792149520742.jpg';
import autoImg from '../assets/images/workflow_automation_1792149521533.jpg';

interface HomePageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onNavigate }) => {
  const [activeSynergy, setActiveSynergy] = useState<'ia' | 'web' | 'auto'>('ia');

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden font-sans">
      {/* 1. PORTADA PRINCIPAL (HERO SECTION) */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
        {/* Soft luminous radial aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] radial-glow-hero pointer-events-none blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Commercial Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust statement kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Inteligencia Artificial Práctica · Diseño Web · Automatización</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.14]">
                El futuro de tu negocio{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                  empieza hoy
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                En <strong>ModoIA360</strong> ayudamos a tu empresa a optimizar procesos, multiplicar su presencia digital y eliminar horas de tareas manuales con soluciones que aportan valor tangible y medible.
              </p>

              {/* Core Differential Motto Banner */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div>
                  <strong className="text-slate-900">Nuestro compromiso de partida:</strong>
                  <p className="text-blue-800 font-medium mt-0.5">
                    «Probamos. Medimos. Si funciona, avanzamos. Si no aporta valor, te lo decimos».
                  </p>
                </div>
              </div>

              {/* CTAs & Free Trial reference */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg active:scale-98 text-center cursor-pointer"
                >
                  Agendar llamada gratuita de 20 min
                </button>

                <button
                  onClick={() => onNavigate('trial')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all text-center shadow-xs cursor-pointer"
                >
                  Prueba gratuita de 7 días
                </button>
              </div>

              {/* Quick links to 3 services */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Explorar servicios:</span>
                <button
                  onClick={() => onNavigate('service-ai')}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Inteligencia Artificial →
                </button>
                <button
                  onClick={() => onNavigate('service-web')}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Diseño Web →
                </button>
                <button
                  onClick={() => onNavigate('service-automation')}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Automatizaciones →
                </button>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
                <img
                  src={heroImg}
                  alt="Transformación digital 360 grados ModoIA360"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Interactive Synergy Console */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-lg space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
                    <span className="text-blue-700">Sinergia ModoIA360</span>
                    <span>3 Ejes Integrados</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <button
                      onClick={() => setActiveSynergy('ia')}
                      className={`p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                        activeSynergy === 'ia'
                          ? 'bg-blue-50 border border-blue-400 text-blue-900 font-semibold'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Brain className="w-3.5 h-3.5 text-blue-600 mb-1" />
                      <div className="text-[11px] font-bold">1. IA</div>
                      <div className="text-[10px] text-slate-500 truncate">Datos & Tareas</div>
                    </button>

                    <button
                      onClick={() => setActiveSynergy('web')}
                      className={`p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                        activeSynergy === 'web'
                          ? 'bg-cyan-50 border border-cyan-400 text-cyan-900 font-semibold'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Globe className="w-3.5 h-3.5 text-cyan-600 mb-1" />
                      <div className="text-[11px] font-bold">2. Web</div>
                      <div className="text-[10px] text-slate-500 truncate">Conversión B2B</div>
                    </button>

                    <button
                      onClick={() => setActiveSynergy('auto')}
                      className={`p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                        activeSynergy === 'auto'
                          ? 'bg-emerald-50 border border-emerald-400 text-emerald-900 font-semibold'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5 text-emerald-600 mb-1" />
                      <div className="text-[11px] font-bold">3. Auto</div>
                      <div className="text-[10px] text-slate-500 truncate">Cero Fricción</div>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-600 pt-1">
                    {activeSynergy === 'ia' &&
                      'La IA analiza consultas y documentos para que tu personal no pierda horas buscando.'}
                    {activeSynergy === 'web' &&
                      'Una web diseñada para captar la atención del cliente y guiarlo directamente al contacto.'}
                    {activeSynergy === 'auto' &&
                      'Flujos automáticos que enlazan formularios, WhatsApp, CRM y facturación sin fallos.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS TRES SERVICIOS PRINCIPALES (BLOQUES VISUALES PREMIUM) */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Soluciones Integrales ModoIA360
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Tecnología útil, sin complicaciones y con retorno medible
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Cada solución aborda un pilar fundamental del crecimiento y la eficiencia empresarial.
            </p>
          </div>

          <div className="space-y-12">
            {/* Servicio 1: Inteligencia Artificial */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  Servicio 01 · Automatización Cognitiva
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Inteligencia Artificial que organiza, responde y agiliza
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Implementamos modelos de lenguaje y sistemas RAG que permiten a tu equipo localizar datos internos al instante, clasificar peticiones de clientes 24/7 y generar resúmenes ejecutivos sin riesgos de privacidad.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Asistentes de documentación corporativa sobre tus propios manuales y normativas.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Triaje inteligente de solicitudes para responder antes y mejor.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('service-ai')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <span>Descubrir soluciones de IA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={aiImg}
                  alt="Solución de Inteligencia Artificial para empresas"
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Servicio 2: Diseño Web */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-cyan-400 transition-all shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-cyan-700 uppercase tracking-wide">
                  Servicio 02 · Presencia Digital de Alto Impacto
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Diseño Web profesional creado para convertir visitas en clientes
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Una web corporativa no es un folleto estático; es tu principal comercial en internet. Diseñamos con arquitectura UX cuidada, velocidad extrema en dispositivos móviles y estructura SEO lista para captar oportunidades.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>100% Adaptada a móviles, tablets y pantallas de alta resolución.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Llamadas a la acción claras y conexión directa con WhatsApp y CRM.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('service-web')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <span>Descubrir diseño web</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={webImg}
                  alt="Diseño web profesional para empresas"
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Servicio 3: Automatizaciones */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  Servicio 03 · Eficiencia Operativa
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Automatizaciones que eliminan horas de tareas manuales
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Conectamos las aplicaciones que ya utilizas (correo, WhatsApp, CRM, calendarios y facturación) para que los datos viajen de forma segura sin tener que copiarlos a mano, reduciendo errores a cero.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Avisos inmediatos al equipo de ventas cuando entra un nuevo contacto.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Emisión automatizada de presupuestos, facturas y recordatorios.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('service-automation')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <span>Descubrir automatizaciones</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={autoImg}
                  alt="Automatizaciones de procesos empresariales ModoIA360"
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL COMPROMISO DIFERENCIAL DE MODOIA360 */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                La Filosofía de ModoIA360
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                «Probamos. Medimos. Si funciona, avanzamos.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  Si no aporta valor, te lo decimos
                </span>
                ».
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                No queremos que pagues por una promesa. ModoIA360 no busca vender tecnología por vender; busca demostrar que sus soluciones aportan un beneficio claro y cuantificable en tu negocio.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('commitment')}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition-all border border-slate-300 shadow-xs cursor-pointer"
                >
                  Conocer nuestro compromiso al detalle
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                >
                  Agendar llamada gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRUEBA GRATUITA DE 7 DÍAS (4 ETAPAS) */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Oferta Transparente y Sin Riesgo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Prueba gratuita de 7 días
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Seleccionamos una solución adaptada a tu empresa, acordamos objetivos, la ponemos en marcha durante una semana y evaluamos los resultados reales juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-2xl font-bold text-blue-600">01</span>
              <h3 className="text-base font-bold text-slate-900">Conocemos el negocio</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hablamos contigo, comprendemos tus procesos y detectamos un problema concreto abordable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-2xl font-bold text-cyan-600">02</span>
              <h3 className="text-base font-bold text-slate-900">Acordamos los objetivos</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pactamos qué indicadores mediremos (tiempo ahorrado, velocidad o tasa de respuesta).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-2xl font-bold text-emerald-600">03</span>
              <h3 className="text-base font-bold text-slate-900">Probamos 7 días</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Habilitamos la solución dentro del alcance pactado y observamos su comportamiento en tiempo real.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="text-2xl font-bold text-emerald-700">04</span>
              <h3 className="text-base font-bold text-slate-900">Entregamos el análisis</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Te entregamos el informe con resultados, limitaciones y nuestra recomendación profesional honesta.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('trial')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-blue-700 border border-slate-300 text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>Ver las condiciones completas de la prueba de 7 días</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CÓMO TRABAJAMOS Y ATENCIÓN PERSONALIZADA */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Atención Cercana y Rigurosa
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Una relación basada en hechos, no en palabras vacías
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                En ModoIA360 entendemos que cada empresa es diferente. No creemos en paquetes cerrados universales ni en promesas de beneficios irreales. Analizamos tus circunstancias y te proponemos exactamente lo que tu equipo puede asimilar y rentabilizar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Beneficios comprobados vs promesas</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Distinguimos con claridad entre el potencial teórico y lo que efectivamente se ha medido en tu negocio.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Acompañamiento directo</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Sin intermediarios comerciales. Hablas directamente con el equipo técnico que implementa la solución.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Contacta con ModoIA360</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Elige la vía más cómoda para plantearnos el reto de tu empresa:
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20agendar%20una%20llamada%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">WhatsApp Oficial</div>
                      <div className="text-xs text-emerald-700 font-semibold">+34 640 299 199</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 transition-colors group cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Reservar Llamada de 20 min</div>
                      <div className="text-xs text-slate-500">Elegir día y hora en calendario</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Sin compromiso ni coste. Primera sesión de análisis gratuito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
