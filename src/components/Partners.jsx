import { FaHospital } from 'react-icons/fa'
import './Partners.css'

const Partners = () => {
  const partners = [
    {
      name: 'Hospital Divino Salvador',
      location: 'Sopó, Cundinamarca',
      type: 'Hospital'
    },
    {
      name: 'Hospital San Antonio',
      location: 'Sesquilé, Cundinamarca',
      type: 'Hospital'
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
            <div key={index} className="partner-card">
              <div className="partner-icon">
                <FaHospital />
              </div>
              <h3>{partner.name}</h3>
              <p className="partner-location">{partner.location}</p>
              <span className="partner-type">{partner.type}</span>
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

