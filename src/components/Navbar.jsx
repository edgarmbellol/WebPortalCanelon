import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/logoPortal.png" alt="Portal de Canelón" />
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#tecnologias" onClick={closeMenu}>Tecnologías</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        </ul>

        <div className="navbar-cta">
          <a href="#contacto" className="btn btn-primary">Contáctanos</a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

