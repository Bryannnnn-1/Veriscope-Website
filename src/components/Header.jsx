import { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import close from "../assets/close.svg"
import hamburger from "../assets/hamburger.svg"

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div className="header-logo" onClick={() => scrollToSection('home')}>
         <img src={logo} className="logo-icon" />
        </div>

        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={mobileMenuOpen ? close : hamburger}
            alt="menu icon"
            className="menu-icon"
          />
        </button>

        <nav className={mobileMenuOpen ? 'active' : ''}>
          <button onClick={() => scrollToSection('home')}>HOME</button>
                    <button onClick={() => scrollToSection('about')}>ABOUT US</button>
          <button onClick={() => scrollToSection('news')}>LATEST NEWS</button>
          <button onClick={() => scrollToSection('partners')}>PARTNERS</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
          <button className="sign-in-btn" onClick={() => scrollToSection('home')}>SIGN IN/SIGN UP</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
