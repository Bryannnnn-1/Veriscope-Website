import { useState, useEffect } from 'react'

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
         <img src="src\assets\logo.png" className="logo-icon" />
        </div>

        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={mobileMenuOpen ? "src/assets/close.svg" : "src/assets/hamburger.svg"}
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
