import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'DigiTurno - Sistema de Gestión de Turnos',
      description: 'Plataforma digital inteligente para administración de turnos médicos con señalización y alertas en tiempo real',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      tags: ['Turnos Digitales', 'Señalización', 'Tiempo Real'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Portal Intranet Hospitalario',
      description: 'Red interna corporativa para comunicación, gestión documental y colaboración entre áreas del hospital',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      tags: ['Intranet', 'Colaboración', 'Gestión Documental'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Help Desk Médico',
      description: 'Sistema avanzado de mesa de ayuda especializado para soporte técnico en entornos hospitalarios',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['Mesa de Ayuda', 'Tickets', 'Soporte IT'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Sistema de Demanda Inducida',
      description: 'Plataforma para registro y seguimiento de notas de pacientes en programas de demanda inducida',
      category: 'clinica',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      tags: ['Demanda Inducida', 'Seguimiento', 'Registro Médico'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Plataforma de Consentimientos Informados',
      description: 'Sistema digital completo para gestión, firma electrónica y trazabilidad de consentimientos informados',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      tags: ['Consentimientos', 'Firma Digital', 'Legal'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Digitalización de Consentimientos Físicos',
      description: 'Sistema de escaneo que permite capturar consentimientos físicos, digitando el número de documento para vincularlos automáticamente a la historia clínica del paciente',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      tags: ['Escaneo', 'Digitalización', 'Historia Clínica'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Gestión de Mantenimiento IT Hospitalario',
      description: 'Sistema integral para control, seguimiento y programación de mantenimientos de equipos de cómputo',
      category: 'hospital',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop',
      tags: ['Mantenimiento', 'IT', 'Gestión de Activos'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="wide-container">
        <div className="section-title">
          <h2>Proyectos en Salud</h2>
          <p>Soluciones tecnológicas implementadas en hospitales y centros de salud</p>
        </div>

        <div className="portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.link} className="portfolio-link" aria-label="Ver proyecto">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} className="portfolio-link" aria-label="Ver código">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

