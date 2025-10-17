function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-divider"></div>

      <h2 className="section-heading">What is Veriscope?</h2>

      <div className="about-content">
        <p>
          <span className="brand-highlight">Veriscope</span> is a platform dedicated to analyzing,
          verifying and exposing fake content, focusing on users aged 16-19 but accessible to all
          age groups. Our platform uses advanced <strong>AI-driven technology</strong> to verify
          online content, combating misinformation by analyzing texts, images, and videos from
          diverse sources.
        </p>
        <p>
          Veriscope collaborates with fact-checkers and verified news sources such as the British
          Broadcasting Corporation (BBC News), Sky News, Cable News Network (CNN); contributing to 
          transparency and ensuring that trusted information is genuinely reliable.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <div className="stat-value">230K+</div>
          <div className="stat-label">Content Verified</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">96%</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Real-time Scanning</div>
        </div>
      </div>
    </section>
  )
}

export default About
