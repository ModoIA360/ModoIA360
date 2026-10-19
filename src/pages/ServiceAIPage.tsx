import React from 'react';
import { PageId } from '../components/Navbar';
import {
  Brain,
  CheckCircle2,
  Clock,
  ArrowRight,
  Search,
  MessageSquare,
  FileSpreadsheet,
  Layers,
} from 'lucide-react';
import aiHeroImg from '../assets/images/ai_solutions_tech_1792149519991.jpg';

interface ServiceAIPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServiceAIPage: React.FC<ServiceAIPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Brain className="w-4 h-4 text-blue-600" />
              <span>Soluciones Prácticas de Inteligencia Artificial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Inteligencia Artificial aplicada a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">realidad de tu negocio</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No implementamos IA por simple moda. Ayudamos a tu empresa a organizar información dispersa, responder a clientes con precisión, acelerar tareas cognitivas y detectar oportunidades operativas que antes pasaban desapercibidas.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Solicitar una valoración gratuita
              </button>
              <button
                onClick={() => onNavigate('trial')}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs cursor-pointer"
              >
                Ver cómo funciona la prueba de 7 días
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
            <img
              src={aiHeroImg}
              alt="Procesamiento y arquitectura de Inteligencia Artificial de ModoIA360"
              className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md">
              <p className="text-xs text-slate-600 font-medium">
                Enfoque ModoIA360: Evaluación previa de viabilidad · Modelos seguros · Métricas de valor cuantificadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Empresariales que Resuelve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Problemas habituales que la IA ayuda a resolver
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Identificamos tareas que consumen tiempo valioso a tu equipo y diseñamos soluciones pragmáticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Búsqueda de información interna lenta</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Empleados perdiendo minutos buscando normativas, manuales, catálogos técnicos o tarifas en PDFs y carpetas compartidas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Atención repetitiva a clientes</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mismas preguntas sobre plazos, presupuestos o requisitos consumiendo el tiempo del equipo comercial o de atención.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Extracción manual de datos</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Copiar y pegar datos de albaranes, facturas, emails o formularios a hojas de cálculo o programas de gestión empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Soluciones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tipos de soluciones que podemos implementar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Desarrollamos soluciones adaptadas a la escala de tu empresa, priorizando la facilidad de adopción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-blue-700">
              1. Asistentes de Conocimiento Corporativo (RAG Seguro)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Un sistema interno que responde preguntas basándose exclusivamente en los documentos, protocolos y catálogos autorizados de tu empresa, sin inventar respuestas ni filtrar datos a terceros.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-blue-700">
              2. Clasificación y Triaje Inteligente de Leads
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modelos que analizan las consultas entrantes por web, WhatsApp o email, detectan la urgencia, el perfil del cliente y enrutan la oportunidad al responsable adecuado con un resumen automático.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-blue-700">
              3. Procesamiento Inteligente de Documentación
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lectura y extracción estructurada de información clave desde contratos, presupuestos o justificantes, eliminando horas de picado de datos manual.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-blue-700">
              4. Generación y Resumen de Informes de Gestión
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consolidación automática de registros semanales o mensuales en informes ejecutivos claros para la toma de decisiones por parte de la dirección.
            </p>
          </div>
        </div>
      </section>

      {/* Ejemplos Hipotéticos Ilustrativos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Casos de aplicación práctica</h2>
          <p className="text-xs text-amber-800 bg-amber-50 inline-block px-3 py-1 rounded-md mt-2 font-medium border border-amber-200">
            * Nota de transparencia: Los siguientes casos son ejemplos hipotéticos ilustrativos diseñados para explicar posibles escenarios de uso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="text-xs font-semibold text-blue-700">Escenario A: Empresa de Servicios Técnicos</div>
            <h3 className="text-base font-bold text-slate-900">Consulta rápida de manuales en obra</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Técnicos que necesitan verificar piezas y protocolos de mantenimiento consultan mediante voz o chat un asistente conectado a más de 300 manuales en PDF, recibiendo la referencia exacta en menos de 5 segundos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="text-xs font-semibold text-blue-700">Escenario B: Consultoría o Asesoría</div>
            <h3 className="text-base font-bold text-slate-900">Recepción y filtrado de consultas fiscales frecuentes</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Un asistente entrenado con la operativa del despacho orienta al cliente sobre los plazos y documentos necesarios antes de la reunión con el asesor, reduciendo un 40% de consultas iniciales básicas.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo Evaluamos si Aporta Valor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 lg:p-10 rounded-2xl bg-blue-50/60 border border-blue-200">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              ¿Cómo evaluamos si la solución de IA aporta valor real?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              En ModoIA360 nunca medimos el éxito por «tecnología instalada», sino por métricas tangibles acordadas previamente:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-blue-100 text-center shadow-xs">
                <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Horas Ahorradas</h4>
                <p className="text-xs text-slate-500 mt-1">Tiempo de personal liberado de tareas mecánicas.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-blue-100 text-center shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Precisión & Calidad</h4>
                <p className="text-xs text-slate-500 mt-1">Porcentaje de respuestas y datos extraídos con exactitud.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-blue-100 text-center shadow-xs">
                <Layers className="w-5 h-5 text-cyan-600 mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Velocidad de Respuesta</h4>
                <p className="text-xs text-slate-500 mt-1">Minutos transcurridos desde la consulta hasta la atención.</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 pt-2 italic">
              Si tras la prueba de 7 días los datos no demuestran una mejora sustancial que justifique la inversión, seremos los primeros en aconsejarte no contratarla.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ¿Tiene sentido la IA para tu negocio en este momento?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Revisamos tu caso sin compromiso ni presiones comerciales en una conversación de 20 minutos.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Solicitar valoración de IA para mi empresa
        </button>
      </section>
    </div>
  );
};
