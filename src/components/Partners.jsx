import React from 'react'

import bbc from '../assets/bbc.png';
import bdc from '../assets/bdc.png';
import skynews from '../assets/skynews.png';


const partners = [
  { name: 'BBC News', logo: bbc },
  { name: 'Sky News', logo: skynews },
  { name: 'Barking and Dagenham College', logo: bdc },
]

function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="section-divider"></div>
      <h2 className="partners-heading">OUR PARTNERS</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-logo">
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </div>
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners
