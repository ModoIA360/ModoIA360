import React from 'react';
import { PageId } from '../components/Navbar';
import { Shield, ArrowLeft } from 'lucide-react';

interface LegalProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<LegalProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al inicio</span>
      </button>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-xs">
        <div className="flex items-center gap-3 text-blue-700 mb-2">
          <Shield className="w-6 h-6" />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Política de Privacidad</h1>
        </div>

        <p className="text-xs text-slate-500">Última actualización: Octubre 2026</p>

        <section className="space-y-3 pt-4">
          <h2 className="text-lg font-bold text-slate-900">1. Responsable del Tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos recogidos en este sitio web es <strong>ModoIA360</strong>. Teléfono de contacto oficial:{' '}
            <a href="tel:+34640299199" className="text-blue-700 underline font-medium">+34 640 299 199</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Finalidad del Tratamiento</h2>
          <p>
            Los datos facilitados a través de formularios de contacto, reserva de llamadas o mensajes de WhatsApp se utilizan exclusivamente para:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs sm:text-sm">
            <li>Responder a consultas comerciales y solicitudes de diagnóstico inicial.</li>
            <li>Gestionar las citas previas y sesiones de consultoría acordadas.</li>
            <li>Coordinar el periodo de prueba gratuita de 7 días y la entrega del informe final.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Tratamiento de Datos Durante la Prueba Gratuita</h2>
          <p>
            En caso de activar una prueba de 7 días, ModoIA360 establece un protocolo estricto: los datos de prueba se procesan únicamente en entornos controlados, no se utilizan para entrenar modelos públicos externos y se eliminan o desvinculan al término de la evaluación si el cliente no continúa el servicio.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Ejercicio de Derechos</h2>
          <p>
            Puedes ejercitar tus derechos de acceso, rectificación, supresión, limitación y oposición en cualquier momento contactándonos por WhatsApp o por teléfono.
          </p>
        </section>
      </div>
    </div>
  );
};

export const LegalNoticePage: React.FC<LegalProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al inicio</span>
      </button>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-xs">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Aviso Legal</h1>
        <p className="text-xs text-slate-500">En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE)</p>

        <section className="space-y-3 pt-4">
          <h2 className="text-lg font-bold text-slate-900">1. Información General</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, se informa que la marca y actividad de <strong>ModoIA360</strong> presta servicios especializados de consultoría e implantación de Inteligencia Artificial, desarrollo web y automatización de procesos para empresas y profesionales.
          </p>
          <p>
            Teléfono oficial de contacto: <a href="tel:+34640299199" className="text-blue-700 underline font-medium">+34 640 299 199</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Propiedad Intelectual e Industrial</h2>
          <p>
            El logotipo, código fuente, diseño gráfico y contenidos textuales de ModoIA360 son titularidad exclusiva de la entidad o se utilizan bajo las correspondientes licencias. Queda prohibida su reproducción o distribución sin autorización expresa.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Exclusión de Garantías de Resultados Económicos</h2>
          <p>
            Conforme a nuestra filosofía ética, ModoIA360 no garantiza incrementos porcentuales predefinidos de ingresos sin un análisis empírico previo. Todo servicio de prueba se rige por el principio de medición objetiva en la fase de prueba de 7 días.
          </p>
        </section>
      </div>
    </div>
  );
};
