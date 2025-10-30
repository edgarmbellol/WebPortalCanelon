import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="/logoPortal.png" alt="Portal Canelón" />
                <span>Portal Canelón</span>
              </div>
              <p>
                <strong>Tu enlace con la innovación en salud digital.</strong> Desarrollamos 
                software especializado para hospitales, clínicas y centros de salud.
              </p>
            </div>

            <div className="footer-links">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Desarrollo Web</a></li>
                <li><a href="#servicios">Apps Móviles</a></li>
                <li><a href="#servicios">Cloud & DevOps</a></li>
                <li><a href="#servicios">UI/UX Design</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:dev@portalcanelon.com">dev@portalcanelon.com</a></li>
                <li><a href="tel:+573057499964">+57 305 749 9964</a></li>
                <li><a href="tel:+573212887092">+57 321 288 7092</a></li>
                <li>NIT: 1070012680</li>
                <li><a href="#contacto">Formulario de contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Portal Canelón. Todos los derechos reservados.
            </p>
            <p className="footer-love">
              Hecho con <FaHeart className="heart-icon" /> para transformar el mundo digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

