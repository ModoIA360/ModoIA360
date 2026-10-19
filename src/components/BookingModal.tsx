import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, Send, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Inteligencia artificial',
}) => {
  const [tab, setTab] = useState<'calendar' | 'form'>('calendar');

  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [service, setService] = useState(defaultService);
  const [problem, setProblem] = useState('');
  const [consent, setConsent] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [calendarConfirmed, setCalendarConfirmed] = useState(false);

  if (!isOpen) return null;

  // Generate upcoming 5 business days
  const upcomingDays = [
    { id: '2026-10-19', day: 'Lunes', date: '19 Oct' },
    { id: '2026-10-20', day: 'Martes', date: '20 Oct' },
    { id: '2026-10-21', day: 'Miércoles', date: '21 Oct' },
    { id: '2026-10-22', day: 'Jueves', date: '22 Oct' },
    { id: '2026-10-23', day: 'Viernes', date: '23 Oct' },
  ];

  const availableSlots = [
    '09:30 - 09:50',
    '11:00 - 11:20',
    '12:30 - 12:50',
    '16:00 - 16:20',
    '17:30 - 17:50',
  ];

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = 'Por favor, introduce tu nombre';
    if (!company.trim()) errors.company = 'Introduce el nombre de tu empresa';
    if (!contactInfo.trim()) {
      errors.contactInfo = 'Indica un email o número de teléfono';
    } else if (
      !contactInfo.includes('@') &&
      !/^(\+34|0034|34)?[6789]\d{8}$/.test(contactInfo.replace(/\s+/g, ''))
    ) {
      errors.contactInfo = 'Introduce un email válido o teléfono (móvil)';
    }
    if (!problem.trim()) {
      errors.problem = 'Explica brevemente qué necesidad o proceso te gustaría mejorar';
    }
    if (!consent) {
      errors.consent = 'Debes aceptar la política de privacidad para enviar la solicitud';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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

  const handleCalendarSubmit = () => {
    if (!selectedDate || !selectedSlot) return;
    setCalendarConfirmed(true);
  };

  const resetState = () => {
    setIsSubmitted(false);
    setCalendarConfirmed(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 id="booking-modal-title" className="text-lg font-bold text-slate-900 tracking-tight">
              Agenda tu llamada gratuita con ModoIA360
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              20 minutos para entender tus procesos y valorar si una solución te aportará valor real.
            </p>
          </div>
          <button
            onClick={resetState}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50/60 p-2 gap-2">
          <button
            onClick={() => setTab('calendar')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              tab === 'calendar'
                ? 'bg-white text-blue-700 border border-slate-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Reserva de Cita (Calendario)</span>
          </button>
          <button
            onClick={() => setTab('form')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              tab === 'form'
                ? 'bg-white text-blue-700 border border-slate-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Send className="w-4 h-4 text-blue-600" />
            <span>Formulario Detallado</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 bg-white">
          {tab === 'calendar' ? (
            /* CALENDAR VIEW */
            <div>
              {!calendarConfirmed ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                      1. Selecciona un día hábil
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {upcomingDays.map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setSelectedDate(d.id)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDate === d.id
                              ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="text-[11px] font-medium text-slate-500">{d.day}</div>
                          <div className="text-sm font-bold mt-0.5">{d.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                      2. Elige franja horaria (Hora España peninsular)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-slate-900">
                      ¿Qué trataremos en la sesión de 20 minutos?
                    </p>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      <li>Analizamos el cuello de botella o reto digital de tu empresa.</li>
                      <li>Definimos si encaja para la prueba de 7 días sin coste.</li>
                      <li>Si no vemos viabilidad o beneficio claro, te lo decimos directamente.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <a
                      href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20quisiera%20agendar%20una%20llamada%20gratuita%20para%20mi%20empresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Escríbenos por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      disabled={!selectedDate || !selectedSlot}
                      onClick={handleCalendarSubmit}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md cursor-pointer"
                    >
                      Confirmar Cita Previa
                    </button>
                  </div>
                </div>
              ) : (
                /* Confirmed state */
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">¡Cita Pre-reservada con Éxito!</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1">
                      Fecha seleccionada:{' '}
                      <span className="font-semibold text-blue-700">{selectedDate}</span> a las{' '}
                      <span className="font-semibold text-emerald-700">{selectedSlot}</span>.
                    </p>
                    <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                      Para confirmar tus datos de contacto o resolver dudas inmediatas, puedes contactarnos en el teléfono oficial{' '}
                      <strong className="text-slate-900">+34 640 299 199</strong>.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/34640299199?text=Hola%20ModoIA360,%20he%20solicitado%20cita%20para%20el%20${selectedDate}%20a%20las%20${selectedSlot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirmar por WhatsApp</span>
                    </a>
                    <button
                      onClick={resetState}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Volver a la web
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* FORM VIEW */
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carmen Navarro"
                        className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
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
                        className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                      {formErrors.company && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email o Teléfono de contacto *
                      </label>
                      <input
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="carmen@empresa.com o 640..."
                        className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                      {formErrors.contactInfo && (
                        <p className="text-xs text-rose-600 mt-1">{formErrors.contactInfo}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Servicio de interés principal
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
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
                      rows={3}
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      placeholder="Ej. Perdemos muchas horas clasificando solicitudes de clientes manualmente..."
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
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
                        Acepto el tratamiento de mis datos de contacto por ModoIA360 exclusivamente para responder a esta consulta comercial, conforme a la política de privacidad y el RGPD. Sin cesión a terceros ni spam.
                      </span>
                    </label>
                    {formErrors.consent && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.consent}</p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Respuesta en menos de 24h</span>
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                </form>
              ) : (
                /* Form Submitted State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">¡Solicitud recibida correctamente!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Gracias, <strong className="text-slate-900">{name}</strong>. Hemos registrado el requerimiento de{' '}
                      <strong className="text-blue-700">{company}</strong>.
                    </p>
                    <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                      Un especialista de ModoIA360 revisará tu caso y te responderá en las próximas horas para coordinar la valoración inicial sin compromiso.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href="https://wa.me/34640299199?text=Hola%20ModoIA360,%20acabo%20de%20enviar%20un%20formulario%20desde%20la%20web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                    <button
                      onClick={resetState}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
