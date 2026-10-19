import React from 'react';
import { PageId } from '../components/Navbar';
import {
  Calendar,
  CheckCircle2,
  Search,
  Target,
  Clock,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';

interface FreeTrialPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const FreeTrialPage: React.FC<FreeTrialPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
          <Calendar className="w-4 h-4 text-blue-600" />
          <span>Propuesta de Confianza y Cero Riesgo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Prueba Gratuita de 7 Días:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
            primero demostramos el valor
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          No queremos que contrates por una promesa en un folleto comercial. Probamos una solución adaptada a tu operativa durante 7 días, medimos su impacto y te entregamos un análisis honesto.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
          >
            Solicitar inicio de prueba de 7 días
          </button>
          <a
            href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20más%20detalles%20sobre%20la%20prueba%20gratuita%20de%207%20días"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs"
          >
            Preguntar dudas por WhatsApp
          </a>
        </div>
      </section>

      {/* Las 4 Etapas Visuales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            El proceso en 4 etapas claras
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Metodología estructurada para que sepas en todo momento qué se hace, cómo se mide y qué esperar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Etapa 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">01</span>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Conocemos el negocio</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hablamos contigo, entendemos las particularidades de tu empresa y detectamos un problema concreto y prioritario que pueda abordarse con una solución de IA, diseño web o automatización.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-blue-700 font-medium">
              Duración: Sesión diagnóstica de 20 min
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-600">02</span>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <Target className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Acordamos los objetivos</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Definimos con precisión qué vamos a probar, qué indicadores utilizaremos para evaluar su funcionamiento (tiempo, coste o precisión) y delimitamos el alcance exacto de la prueba.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-cyan-700 font-medium">
              Resultado: Criterios de éxito pactados
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">03</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Probamos 7 días</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Implementamos o habilitamos la solución acordada dentro del alcance delimitado, observamos su comportamiento en tu flujo real y recopilamos los datos y métricas disponibles.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-emerald-700 font-medium">
              Duración: 7 días de monitorización
            </div>
          </div>

          {/* Etapa 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-700">04</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <FileCheck2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Entregamos el análisis</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Al finalizar los 7 días te presentamos un informe transparente con los datos reales registrados, limitaciones encontradas y nuestra recomendación profesional sobre si conviene contratar o no.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-emerald-700 font-medium">
              Entrega: Informe ejecutivo completo
            </div>
          </div>
        </div>
      </section>

      {/* Qué contiene el informe de análisis final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Qué incluye el informe de los 7 días?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Un documento claro y comprensible que refleja los resultados reales, incluso cuando sean modestos o negativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Qué solución se ha probado:</strong>
              <span className="text-slate-600 text-xs">Descripción detallada del proceso configurado y cómo opera.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Objetivos acordados vs observados:</strong>
              <span className="text-slate-600 text-xs">Comparativa entre las expectativas previas y el comportamiento real durante la semana.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Indicadores medidos:</strong>
              <span className="text-slate-600 text-xs">Datos cuantificables de tiempo de ejecución, precisión y volumen gestionado.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Limitaciones detectadas:</strong>
              <span className="text-slate-600 text-xs">Explicación sincera de casos límite o fricciones técnicas observadas.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Mejoras recomendadas:</strong>
              <span className="text-slate-600 text-xs">Ajustes necesarios en la operativa o datos de la empresa para maximizar el retorno.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Dictamen honesto de contratación:</strong>
              <span className="text-slate-600 text-xs">Si recomendamos continuar, ajustar el alcance o definitivamente descartar la solución.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Condiciones Claras y Transparentes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900">Condiciones claras y sin letra pequeña</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Duración estricta de 7 días:</strong> Tiempo suficiente para obtener métricas reales sin dilatar plazos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Alcance delimitado previamente:</strong> Para que ambas partes sepamos con exactitud qué se incluye y qué no.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Cero permanencia ni compromiso:</strong> No existe obligación alguna de contratar al concluir el periodo.</span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Transparencia en costes de terceros:</strong> Si tu solución específica requiere herramientas externas de pago que tú decidas contratar, te lo avisamos antes de empezar. No vendemos como gratuito lo que no lo es.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Reversibilidad y seguridad de datos:</strong> Si decides no continuar, te explicamos cómo se retira la solución y cómo quedan protegidos tus accesos y datos.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          ¿Preparado para comprobar lo que funciona en tu negocio?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Agenda la llamada inicial de 20 minutos. Hablamos de tu empresa, acordamos el reto y ponemos el cronómetro en marcha.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Agendar llamada para la prueba de 7 días
        </button>
      </section>
    </div>
  );
};
