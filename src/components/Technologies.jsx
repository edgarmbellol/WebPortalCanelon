import { FaBrain, FaChartLine, FaClock, FaComments } from 'react-icons/fa'
import Lottie from 'lottie-react'
import aiAnimation from '../../AI animation.json'
import './Technologies.css'

const Technologies = () => {
  const aiBenefits = [
    {
      icon: <FaBrain />, title: 'Decisiones más inteligentes',
      text: 'Algoritmos que aprenden de tus datos para recomendar mejores acciones.'
    },
    {
      icon: <FaChartLine />, title: 'Mejores resultados',
      text: 'Predicciones y análisis para reducir tiempos y mejorar indicadores.'
    },
    {
      icon: <FaClock />, title: 'Ahorro de tiempo',
      text: 'Automatizamos tareas repetitivas para que el equipo se enfoque en lo importante.'
    },
    {
      icon: <FaComments />, title: 'Experiencia fluida',
      text: 'Chatbots y asistentes que acompañan al paciente y al equipo en cada paso.'
    }
  ]

  return (
    <section id="tecnologias" className="technologies ai">
      <div className="wide-container">
        <div className="section-title">
          <h2>Inteligencia Artificial integrada</h2>
          <p>Aplicaciones con IA para resultados más rápidos, precisos y humanos</p>
        </div>

        <div className="ai-content">
          <div className="ai-text">
            <ul className="ai-features">
              {aiBenefits.map((b, i) => (
                <li key={i}>
                  <span className="ai-icon">{b.icon}</span>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn btn-primary">Quiero IA en mis apps</a>
          </div>

          <div className="ai-illustration">
            <Lottie animationData={aiAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies

