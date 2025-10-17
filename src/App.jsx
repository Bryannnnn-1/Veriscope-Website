import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Bot from './components/Bot'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import LatestNews from './components/LatestNews'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="app">
      <Header 
      mobileMenuOpen={mobileMenuOpen} 
      setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main>
        <Hero />
        <Bot />
        <About />
        <HowItWorks />
        <LatestNews />
        <FAQ />
        <Testimonials />
        <Partners />
      </main>

      <Footer />
    </div>
  )
}

export default App
