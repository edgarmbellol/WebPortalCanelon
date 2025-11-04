import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  // IMPORTANTE: Reemplaza estos valores con los tuyos de EmailJS
  // 1. Ve a https://www.emailjs.com/ y regístrate
  // 2. Crea un servicio de email (Gmail/Outlook)
  // 3. Crea una plantilla con variables: {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
  // 4. Copia tus IDs y reemplázalos aquí:
  const EMAILJS_SERVICE_ID = 'service_fvh8srk'  // Ej: 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'template_fcmzxwq'  // Ej: 'template_xyz789'
  const EMAILJS_PUBLIC_KEY = 'oUOtU0QjFrllcQh-q'  // Ej: 'abcdefg123456'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'No proporcionado',
          subject: formData.subject,
          message: formData.message,
          to_email: 'dev@portalcanelon.com'  // Email destino
        },
        EMAILJS_PUBLIC_KEY
      )

      alert('✅ ¡Mensaje enviado! Te responderemos pronto.')
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error enviando email:', error)
      alert('❌ Hubo un error al enviar el mensaje. Por favor, intenta por WhatsApp o email directo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>¿Listo para comenzar tu proyecto?</h2>
          <p>Contáctanos y convirtamos tu idea en realidad</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>dev@portalcanelon.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Edgar Mauricio Bello Lamprea</h4>
                <p>+57 305 749 9964</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Santiago Bello Lamprea</h4>
                <p>+57 321 288 7092</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>NIT</h4>
                <p>1070012680</p>
                <p>Colombia</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaWhatsapp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>+57 305 749 9964</p>
                <p>Horario: Lun-Vie 8:00-18:00</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Contáctanos</h4>
              <div className="social-icons">
                <a
                  href="https://wa.me/573057499964"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Escríbenos por WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dev@portalcanelon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Correo"
                  title="Abrir Gmail para escribirnos"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 123 456 789"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

