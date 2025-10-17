import React from 'react'

// Replace these with your actual logo image paths
const partners = [
  { name: 'BBC News', logo: 'src/assets/bbc.png' },
  { name: 'Sky News', logo: 'src/assets/skynews.png' },
  { name: 'Barking and Dagenham College', logo: 'src/assets/bdc.png' },
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
