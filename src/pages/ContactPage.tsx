import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import {
  MessageCircle,
  Phone,
  Calendar,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [service, setService] = useState('Inteligencia artificial');
  const [problem, setProblem] = useState('');
  const [consent, setConsent] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Introduce tu nombre';
    if (!company.trim()) errs.company = 'Introduce el nombre de tu empresa';
    if (!contactInfo.trim()) {
      errs.contactInfo = 'Indica tu email o teléfono de contacto';
    }
    if (!problem.trim()) {
      errs.problem = 'Por favor, describe brevemente qué proceso te gustaría mejorar';
    }
    if (!consent) {
      errs.consent = 'Debes aceptar la política de privacidad';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const existing = JSON.parse(localStorage.getItem('modoia360_leads') || '[]');
      existing.push({
        name,
        company,
        contactInfo,
        service,
        problem,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('modoia360_leads', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 text-slate-900 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Contacto Oficial de ModoIA360</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Hablemos de lo que tu empresa necesita
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Puedes escribirnos de forma inmediata por WhatsApp, reservar una llamada en el calendario o enviarnos tu consulta a través del formulario oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Canal Prioritario Inmediato
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">WhatsApp Directo</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  ¿Prefieres una respuesta rápida? Inicia una conversación directa con nuestro equipo técnico.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20consultar%20una%20solución%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Abrir WhatsApp: +34 640 299 199</span>
                </a>
              </div>

              <p className="text-xs text-emerald-800 font-medium text-center">
                Número oficial verificado: +34 640 299 199
              </p>
            </div>

            {/* Calendar Booking Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Reserva en Calendario</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Elige el día y la hora que mejor te convenga para una sesión de 20 minutos por videoconferencia o llamada telefónica.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-blue-700 border border-slate-300 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-xs"
              >
                Abrir selector de horarios disponibles
              </button>
            </div>

            {/* Privacy notice badge */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Tratamos tus datos con estricta confidencialidad bajo el RGPD. Nunca compartimos información con terceros ni enviamos publicidad no solicitada.
              </span>
            </div>
          </div>

          {/* Right Column: Complete Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Envíanos tu consulta detallada</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Te responderemos en menos de 24 horas con una primera valoración de viabilidad.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carmen Navarro"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre de la empresa *
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ej. Distribuciones Levante"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                      {formErrors.company && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email o Teléfono *
                      </label>
                      <input
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="carmen@empresa.com o 640..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                      {formErrors.contactInfo && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.contactInfo}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Servicio de interés
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      >
                        <option value="Inteligencia artificial">Inteligencia artificial</option>
                        <option value="Diseño web">Diseño web</option>
                        <option value="Automatizaciones">Automatizaciones</option>
                        <option value="Necesito asesoramiento">Necesito asesoramiento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Principal problema o necesidad que quieres resolver *
                    </label>
                    <textarea
                      rows={4}
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      placeholder="Explícanos brevemente qué proceso te quita tiempo o qué objetivo te gustaría alcanzar..."
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                    />
                    {formErrors.problem && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.problem}</p>
                    )}
                  </div>

                  {/* RGPD Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Acepto el tratamiento de mis datos personales para gestionar la respuesta a mi consulta comercial conforme a la política de privacidad.
                      </span>
                    </label>
                    {formErrors.consent && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.consent}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      Enviar Solicitud a ModoIA360
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Gracias, <strong className="text-slate-900">{name}</strong>. Hemos registrado los datos de{' '}
                    <strong className="text-blue-700">{company}</strong>. Nos pondremos en contacto contigo a la mayor brevedad.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
