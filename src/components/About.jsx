import { FaRocket, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad de datos',
      description: 'Protegemos tu información con cifrado, permisos por usuarios y registro de actividades.',
      accent: 'primary'
    },
    {
      icon: <FaUsers />,
      title: 'Experiencia en salud',
      description: '10+ años construyendo soluciones para hospitales, clínicas y EPS. Hablamos el lenguaje clínico.',
      accent: 'teal'
    },
    {
      icon: <FaRocket />,
      title: 'Innovación aplicada',
      description: 'IA, integraciones entre sistemas y automatización para reducir tiempos de atención.',
      accent: 'purple'
    },
    {
      icon: <FaAward />,
      title: 'Calidad comprobada',
      description: 'Buenas prácticas, pruebas automatizadas y despliegues seguros para minimizar errores.',
      accent: 'amber'
    }
  ]

  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="section-title">
          <h2>¿Quiénes Somos?</h2>
          <p>Especialistas en tecnología para el sector salud</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Expertos en tecnología hospitalaria</h3>
            <p>
              Somos un equipo especializado en salud digital. Combinamos administración de sistemas
              hospitalarios y desarrollo de software para crear soluciones seguras, interoperables
              y centradas en el paciente.
            </p>
            <p>
              Con experiencia directa en hospitales y en la integración de sistemas, entregamos
              productos robustos, escalables y fáciles de usar que mejoran la operación clínica.
            </p>
          </div>

          <div className="about-values feature-grid">
            {values.map((value, index) => (
              <div key={index} className={`feature-card feature-${value.accent}`}>
                <div className="feature-icon">{value.icon}</div>
                <div className="feature-content">
                  <div className="feature-header">
                    <h4>{value.title}</h4>
                  </div>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

