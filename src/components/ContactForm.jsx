import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const RECAPTCHA_SITE_KEY =
  import.meta.env.PROD
    ? '6LeRj2gqAAAAAL24SW-EIzCagRMOeiWkx6YCcx7u'
    : '6LdXnGkqAAAAAGjenUTzx2a4CRr7A-2NAqjnVlKJ';

const BACKEND_URL = import.meta.env.PROD
  ? 'https://pagina-web-marca-personal-backend.vercel.app/send-email'
  : 'http://localhost:3001/send-email';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  /* Load reCAPTCHA v3 */
  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.grecaptcha?.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
            .then(setRecaptchaToken);
        });
      };
    };

    if (!window.grecaptcha) {
      loadRecaptcha();
    } else {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(setRecaptchaToken);
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!recaptchaToken) {
      setErrorMsg('No se ha podido verificar reCAPTCHA. Recarga la página.');
      return;
    }

    setStatus('loading');

    try {
      const newToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken: newToken }),
      });

      if (!response.ok) {
        const result = await response.json();
        if (response.status === 429) throw new Error('Espera un minuto antes de enviar otro mensaje.');
        throw new Error(result.message || 'Error al enviar el mensaje.');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Error al enviar. Intenta de nuevo más tarde.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200';

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-6">
        Envíame un mensaje
      </h2>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 font-montserrat rounded-lg p-4 mb-6">
          ¡Gracias por contactarme! Te responderé pronto. 🎉
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 font-montserrat rounded-lg p-4 mb-6">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        />
        <textarea
          name="message"
          placeholder="Tu mensaje..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={inputClass}
          required
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-montserrat font-bold py-3 px-6 rounded-lg hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-base"
        >
          {status === 'loading' ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <FaPaperPlane /> Enviar mensaje
            </>
          )}
        </button>

        <p className="font-inter text-gray-400 text-xs text-center">
          Este sitio está protegido por reCAPTCHA de Google.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
