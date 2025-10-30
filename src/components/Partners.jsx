import { FaHospital } from 'react-icons/fa'
import './Partners.css'

const Partners = () => {
  const partners = [
    {
      name: 'Grúas Cranes S.A.S',
      logo: '/logogruas.png',
    },
    {
      name: 'Hospital Divino Salvador',
      logo: '/logo.png',
    },
    {
      name: 'Hospital San Antonio',
      logo: '/logosesquiel.jpg',
    }
  ]

  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Aliados</h2>
          <p>Instituciones de salud que confían en nuestras soluciones</p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card compact">
              <div className={`partner-logo-wrap`}>
                {partner.logo ? (
                  <img src={partner.logo} alt={`Logo de ${partner.name}`} className="partner-logo" />
                ) : (
                  <FaHospital className="partner-fallback" />
                )}
              </div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="partners-cta">
          <p>¿Quieres formar parte de nuestros aliados estratégicos?</p>
          <a href="#contacto" className="btn btn-outline">Contáctanos</a>
        </div>
      </div>
    </section>
  )
}

export default Partners

