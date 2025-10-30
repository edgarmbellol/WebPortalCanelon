import { FaHospital, FaUserMd, FaNotesMedical, FaMobileAlt, FaDatabase, FaShieldAlt, FaHeadset, FaNetworkWired, FaFileSignature, FaRobot, FaClock } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaNotesMedical />,
      title: 'Auditorías clínicas',
      description: 'Control de glosas, validación de cuentas y trazabilidad de historias clínicas.',
      features: ['Reglas clínicas configurables', 'Alertas y conciliación', 'Reportes y BI']
    },
    {
      icon: <FaHeadset />,
      title: 'Mesa de ayuda',
      description: 'Gestión de tickets para áreas clínicas y TI con SLAs y autoservicio.',
      features: ['Tickets y colas', 'Portal de autoservicio', 'KPIs y tableros']
    },
    {
      icon: <FaNetworkWired />,
      title: 'Intranet hospitalaria',
      description: 'Comunicaciones internas, documentos y flujos aprobatorios centralizados.',
      features: ['Noticias y documentos', 'Workflows', 'Perfiles y permisos']
    },
    {
      icon: <FaClock />,
      title: 'Digiturnos',
      description: 'Turneros y filas inteligentes para admisiones, laboratorio y farmacia.',
      features: ['Display de llamado', 'Tótem de autogestión', 'Estadísticas en tiempo real']
    },
    {
      icon: <FaFileSignature />,
      title: 'Consentimientos informados',
      description: 'Firma digital, plantillas y custodia segura con trazabilidad legal.',
      features: ['Plantillas dinámicas', 'Firma biométrica', 'Auditoría y custodia']
    },
    {
      icon: <FaRobot />,
      title: 'Chatbots clínicos',
      description: 'Atención automatizada para orientación, citas y seguimiento de pacientes.',
      features: ['WhatsApp/WEB', 'Flujos guiados', 'Derivación a agente']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Apps para pacientes',
      description: 'Citas, resultados, pagos y recordatorios en iOS y Android.',
      features: ['Portal móvil', 'Notificaciones push', 'Pagos y encuestas']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad y cumplimiento',
      description: 'Protección de datos médicos y cumplimiento normativo end-to-end.',
      features: ['Encriptación E2E', 'Auditoría y roles', 'Backups y DRP']
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Soluciones para el sector salud</h2>
          <p>Nos especializamos en procesos clínicos y operativos de punta a punta</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#contacto" className="service-link">Solicitar cotización →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

