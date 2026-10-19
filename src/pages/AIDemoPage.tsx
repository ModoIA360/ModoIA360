import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import {
  Play,
  Film,
  Info,
  Layers,
  Sparkles,
  Bot,
  FileSearch,
  BarChart3,
} from 'lucide-react';

interface AIDemoPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const AIDemoPage: React.FC<AIDemoPageProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'triage' | 'reports'>('rag');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Demostración de Inteligencia Artificial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto">
          Cómo la IA trabaja para tu negocio:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
            del dato disperso a la acción
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Explicación comprensible para directores y empresarios sin jerga técnica. Descubre cómo las tecnologías de lenguaje y automatización resuelven problemas cotidianos.
        </p>
      </section>

      {/* Bloque B: Espacio para Vídeo Demostrativo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg">
          {/* Video Placeholder Surface */}
          <div className="aspect-video w-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-50 to-slate-100 relative">
            {/* Play Button Trigger */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer group"
              aria-label="Abrir información del vídeo demostrativo"
            >
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </button>

            <div className="relative z-10 mt-6 max-w-md">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 mb-2">
                Estado Provisional Oficial
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Espacio reservado para el vídeo demostrativo oficial de ModoIA360
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Contenedor preparado para inserción de producción en formato panorámico 16:9 con soporte para Vimeo, YouTube o streaming privado.
              </p>
            </div>

            {/* Video status bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-600 px-4 py-2 rounded-lg bg-white/95 border border-slate-200 shadow-xs backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Film className="w-4 h-4 text-blue-600" />
                <span>Vídeo Oficial en Preparación · Duración aproximada: 3 min</span>
              </span>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="text-blue-700 font-semibold hover:underline cursor-pointer"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Info Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-800">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Sobre este espacio de vídeo</span>
              </h4>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cumpliendo las directrices de honestidad y rigor de ModoIA360, no mostramos un vídeo simulado ni una grabación que no pertenezca a la empresa.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              El reproductor se encuentra plenamente preparado con atributos de accesibilidad, controles semánticos y soporte responsive para alojar el metraje oficial en cuanto se publique.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold rounded-lg text-white cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bloque C: Arquitectura para Demostración Interactiva Futura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 lg:p-12 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Arquitectura Técnica para Demostración Interactiva</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Módulos diseñados para integración de pruebas en tiempo real
              </h2>
            </div>
            <span className="self-start md:self-auto px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs">
              Estructura Modular Preparada
            </span>
          </div>

          <p className="text-sm text-slate-600 max-w-3xl mb-8 leading-relaxed">
            La arquitectura de la web está construida con componentes desacoplados. Esto permite incorporar a continuación entornos interactivos donde el visitante pueda probar consultas, procesar documentos de muestra y experimentar sin tener que rehacer la interfaz.
          </p>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
            <button
              onClick={() => setActiveTab('rag')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'rag'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Módulo 1: Búsqueda Documental (RAG)
            </button>
            <button
              onClick={() => setActiveTab('triage')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'triage'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Módulo 2: Triaje y Clasificación de Leads
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'reports'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Módulo 3: Generador de Informes Operativos
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {activeTab === 'rag' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Asistente de Conocimiento Corporativo
                    </h4>
                    <p className="text-xs text-slate-500">
                      Entrada: Preguntas en lenguaje natural · Salida: Referencia exacta y extracto verificado
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <p>
                    <strong>Cómo funciona:</strong> Los manuales y normativas se organizan en una base de datos segura. Cuando el empleado pregunta, el modelo recupera el fragmento relevante y redacta la respuesta citando la página y el artículo exacto.
                  </p>
                  <p className="text-slate-600">
                    <strong>Garantía de rigor:</strong> El sistema tiene instrucciones estrictas para responder «No consta en los documentos autorizados» si la información no está presente, eliminando el riesgo de respuestas inventadas.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'triage' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Clasificación Inteligente de Peticiones Entrantes
                    </h4>
                    <p className="text-xs text-slate-500">
                      Entrada: Mensaje recibido por web o WhatsApp · Salida: Asignación, prioridad y resumen
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <p>
                    <strong>Cómo funciona:</strong> Se evalúa la intención del remitente (solicitud de presupuesto urgente, consulta de soporte, incidencia técnica o spam).
                  </p>
                  <p className="text-slate-600">
                    <strong>Beneficio directo:</strong> Los casos críticos se dirigen inmediatamente al responsable correspondiente sin esperar a que alguien lea la bandeja de entrada horas después.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Síntesis de Datos Operativos para Dirección
                    </h4>
                    <p className="text-xs text-slate-500">
                      Entrada: Hojas de cálculo y registros de actividad · Salida: Resumen ejecutivo comparativo
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <p>
                    <strong>Cómo funciona:</strong> Conecta los registros de ventas o tareas y extrae las anomalías, tendencias de demanda y métricas de desempeño semanal sin redactar tablas a mano.
                  </p>
                  <p className="text-slate-600">
                    <strong>Beneficio directo:</strong> La dirección recibe un resumen comprensible cada lunes a primera hora con los puntos clave que requieren atención.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ¿Quieres ver cómo encajaría en tu propia operativa?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          En la prueba de 7 días implementamos una prueba de concepto con datos de tu sector para que puedas comprobar los resultados por ti mismo.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Agendar una conversación guiada de 20 minutos
        </button>
      </section>
    </div>
  );
};
