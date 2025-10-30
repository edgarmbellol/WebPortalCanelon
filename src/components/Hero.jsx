import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../developer animation.json'
import './Hero.css'

const Hero = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="inicio" className="hero" ref={sectionRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Tecnología que
              <span className="gradient-text"> Transforma la Salud</span>
            </h1>
            <p className="hero-slogan">
              Tu enlace con la innovación en salud digital
            </p>
            <p className="hero-description">
              Desarrollamos soluciones tecnológicas especializadas para hospitales, 
              clínicas y centros de salud. Software médico seguro, eficiente y centrado en el paciente.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-primary">
                Iniciar Proyecto
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver Portfolio
              </a>
            </div>
            <p className="hero-note">Soluciones confiables y escalables, diseñadas a tu medida.</p>
          </div>

          <div className="hero-animation">
            <div className="animation-wrapper">
              <Lottie 
                animationData={animationData} 
                loop={true}
                className="lottie-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll removido intencionalmente */}
    </section>
  )
}

export default Hero

