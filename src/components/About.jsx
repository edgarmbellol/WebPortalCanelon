import { FaRocket, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad',
      description: 'Protección total de datos médicos con encriptación y cumplimiento normativo garantizado.'
    },
    {
      icon: <FaUsers />,
      title: 'Experiencia Médica',
      description: 'Más de 10 años desarrollando software específicamente para el sector salud.'
    },
    {
      icon: <FaRocket />,
      title: 'Innovación',
      description: 'Incorporamos las últimas tecnologías para mejorar la atención al paciente.'
    },
    {
      icon: <FaAward />,
      title: 'Certificaciones',
      description: 'Cumplimos con HIPAA, ISO 27001 y estándares internacionales de salud digital.'
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
              Somos <strong>Santiago Bello</strong> y <strong>Edgar Mauricio Bello</strong>, un equipo 
              de ingenieros especializados en soluciones tecnológicas para el sector salud. Nuestra 
              combinación única de conocimientos en sistemas de información y desarrollo de software 
              nos permite crear soluciones integrales y efectivas.
            </p>
            <p>
              <strong>Santiago Bello</strong>, ingeniero de sistemas con más de 6 años de experiencia 
              en el sector salud, se especializa en administración de sistemas de información hospitalaria. 
              Su amplio conocimiento en múltiples plataformas y su visión estratégica garantizan 
              soluciones robustas y escalables.
            </p>
            <p>
              <strong>Edgar Mauricio Bello</strong>, ingeniero mecatrónico con énfasis en desarrollo 
              de software, aporta más de 2 años de experiencia desarrollando soluciones tecnológicas 
              específicas para hospitales. Su enfoque en la innovación y automatización permite 
              crear herramientas que realmente transforman los procesos hospitalarios.
            </p>
            <p>
              Juntos, entendemos profundamente los desafíos del sector salud: desde la integración 
              con sistemas legacy hasta el cumplimiento normativo, pasando por la necesidad de 
              interfaces intuitivas que faciliten el trabajo del personal médico. Desarrollamos 
              software que no solo funciona, sino que mejora la eficiencia operativa y contribuye 
              a una mejor atención al paciente.
            </p>
          </div>

          <div className="about-values">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

