import React from 'react';
import { PageId } from '../components/Navbar';
import {
  Cpu,
  Repeat,
  Share2,
  Mail,
  FileCheck,
  AlertTriangle,
  Clock,
  Database,
} from 'lucide-react';
import automationHeroImg from '../assets/images/workflow_automation_1792149521533.jpg';

interface ServiceAutomationPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServiceAutomationPage: React.FC<ServiceAutomationPageProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>Automatización Confiable de Procesos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Elimina tareas repetitivas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">conecta las herramientas</span> de tu negocio
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tu equipo debería dedicar su talento a vender, atender a clientes y tomar decisiones estratégicas; no a pasar datos manualmente de un programa a otro ni a enviar correos idénticos una y otra vez.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Analizar necesidades de automatización
              </button>
              <button
                onClick={() => onNavigate('trial')}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs cursor-pointer"
              >
                Probar 7 días sin compromiso
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
            <img
              src={automationHeroImg}
              alt="Diagrama modular de flujos de trabajo e integraciones de ModoIA360"
              className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 shadow-md">
              <p className="text-xs text-slate-600 font-medium">
                Criterio ModoIA360: Automatizamos únicamente procesos viables, estables y que ahorren costes medibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Coste Oculto de los Procesos Manuales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            El coste de los cuellos de botella manuales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            La mayoría de empresas pierden entre 15 y 25 horas semanales por trabajador en tareas administrativas mecánicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Errores de transcripción humana</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equivocaciones al teclear datos de clientes, referencias o números de cuenta que generan incidencias y quejas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Lentitud en atender solicitudes</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Un cliente interesado que rellena un formulario y tarda horas o días en recibir respuesta suele contratar a un competidor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Herramientas desconectadas</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La web por un lado, el correo por otro, el programa de facturación en otra carpeta y la base de clientes desactualizada.
            </p>
          </div>
        </div>
      </section>

      {/* Procesos que se pueden automatizar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Qué procesos concretos podemos automatizar?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Flujos de trabajo habituales que transformamos en procesos automáticos, rápidos y sin fallos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Mail className="w-4 h-4" />
              <span>1. Captación de Contactos y Notificación Inmediata</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cuando un cliente potencial rellena la web o escribe por WhatsApp, se registra al instante en el CRM o base de datos y se avisa por Telegram/Email al responsable de ventas en tiempo real.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <FileCheck className="w-4 h-4" />
              <span>2. Emisión y Envío de Facturas o Presupuestos</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generación automática de documentos a partir de un formulario o pedido aceptado, envío en PDF al cliente y sincronización contable.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Share2 className="w-4 h-4" />
              <span>3. Sincronización entre CRM, ERP y Calendarios</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mantener actualizados los contactos, estados de pedidos y citas entre plataformas sin tener que teclear dos veces la misma información.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Repeat className="w-4 h-4" />
              <span>4. Recordatorios y Seguimiento a Clientes</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Envío automatizado de avisos de citas, recordatorios de pagos pendientes o encuestas de satisfacción tras completar un servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Viabilidad Técnica & Conexión de Herramientas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 lg:p-10 rounded-2xl bg-emerald-50/60 border border-emerald-200">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Conexión real entre herramientas y viabilidad técnica
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Trabajamos con protocolos estándar de la industria (Webhooks, REST APIs, Make, n8n, Zapier y scripts seguros propios).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Principio de realismo:</strong> No todas las herramientas antiguas permiten integrarse fácilmente. Antes de prometer cualquier conexión, revisamos las herramientas que utilizas actualmente para comprobar si es técnicamente viable de forma fiable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ¿Qué proceso manual te gustaría dejar de hacer hoy?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Cuéntanos tu flujo de trabajo en una llamada de 20 minutos y te diremos si se puede automatizar y cuánto tiempo ahorrarías.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Analizar las necesidades de mi empresa
        </button>
      </section>
    </div>
  );
};
