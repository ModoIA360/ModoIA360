import React from 'react';
import { PageId } from '../components/Navbar';
import {
  ShieldCheck,
  Eye,
  Scale,
  Users,
} from 'lucide-react';

interface CommitmentPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const CommitmentPage: React.FC<CommitmentPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>El Compromiso Diferencial de ModoIA360</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          «Probamos. Medimos. Si funciona, avanzamos.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
            Si no aporta valor, te lo decimos
          </span>
          ».
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          No queremos que pagues por una promesa futurista ni por una presentación comercial. Queremos demostrarte con datos y en tu propia operativa si una solución es útil para tu negocio.
        </p>
      </section>

      {/* Los 3 Principios de Honestidad Tecnológica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Realismo antes que fuegos artificiales</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La Inteligencia Artificial es extraordinaria para tareas específicas, pero no es magia. Si tu problema se resuelve mejor con un formulario sencillo o una reorganización interna de procesos, te lo diremos sin rodeos en lugar de venderte un sistema innecesario.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Medición objetiva frente a suposiciones</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diferenciamos con rigor entre los beneficios potenciales (lo que la teoría dice) y los resultados efectivamente comprobados en tu operativa. Los números no mienten: o se ahorra tiempo y se reducen errores, o no tiene sentido mantener la herramienta.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Adaptación a la escala real de tu empresa</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No todas las empresas necesitan infraestructuras complejas. Diseñamos soluciones proporcionadas al tamaño, presupuesto y ritmo de adopción de tu equipo, garantizando que el personal aprenda a utilizarlas fácilmente.
            </p>
          </div>
        </div>
      </section>

      {/* Qué significa en la práctica para el cliente */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Qué puedes esperar al trabajar con ModoIA360?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Una relación profesional basada en la transparencia, la palabra dada y la búsqueda de utilidad palpable.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Diagnóstico sin compromiso comercial agresivo</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                La conversación inicial sirve para evaluar si podemos ayudarte de verdad. Si consideramos que tu negocio no está preparado o no va a rentabilizar la inversión, seremos honestos desde el primer minuto.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Pruebas en entornos reales antes de compromisos mayores</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Nuestra prueba de 7 días permite validar hipótesis con tus propios datos y usuarios. Sin suposiciones ni maquetas inertes.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <div>
              <h4 className="text-base font-bold text-slate-900">Recomendación ética si los resultados son modestos</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Si tras la prueba los datos demuestran que la ganancia es mínima, te entregamos el informe y te aconsejamos no contratar. Preferimos un cliente satisfecho por nuestra sinceridad que uno decepcionado por una promesa inflada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Queremos ganarnos tu confianza demostrando resultados
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Comienza con una llamada de 20 minutos con nuestro equipo. Sin tecnicismos ni letra pequeña.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all shadow-md active:scale-98 cursor-pointer"
        >
          Conversar con ModoIA360
        </button>
      </section>
    </div>
  );
};
