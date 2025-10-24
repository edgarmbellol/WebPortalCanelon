import { FaHospital, FaUserMd, FaNotesMedical, FaMobileAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaHospital />,
      title: 'Sistemas HIS/EMR',
      description: 'Sistemas de Información Hospitalaria y Registros Médicos Electrónicos completos y personalizables.',
      features: ['Historia clínica digital', 'Gestión de pacientes', 'Integración HL7/FHIR']
    },
    {
      icon: <FaUserMd />,
      title: 'Telemedicina',
      description: 'Plataformas de consulta virtual con videollamadas HD, chat seguro y gestión de recetas digitales.',
      features: ['Consultas en línea', 'Recetas electrónicas', 'Historial médico']
    },
    {
      icon: <FaNotesMedical />,
      title: 'Gestión de Citas',
      description: 'Sistema inteligente de agendamiento médico con recordatorios automáticos y gestión de recursos.',
      features: ['Agendamiento online', 'Recordatorios SMS/Email', 'Gestión de consultorios']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Apps para Pacientes',
      description: 'Aplicaciones móviles que empoderan a los pacientes con acceso a su información de salud.',
      features: ['Portal del paciente', 'Resultados de estudios', 'Notificaciones push']
    },
    {
      icon: <FaDatabase />,
      title: 'Laboratorio Clínico',
      description: 'Software completo para gestión de laboratorios con integración a equipos y reportes automáticos.',
      features: ['Gestión de muestras', 'Resultados automáticos', 'Control de calidad']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad y Compliance',
      description: 'Soluciones que cumplen con HIPAA, GDPR y normativas locales de protección de datos médicos.',
      features: ['Encriptación E2E', 'Auditoría completa', 'Backup automático']
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Soluciones para el Sector Salud</h2>
          <p>Software médico especializado para hospitales, clínicas y centros de salud</p>
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

