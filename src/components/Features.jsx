function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Spot the Signs',
      description: 'Learn to identify red flags in headlines, images, and sources that signal misinformation'
    },
    {
      icon: '✓',
      title: 'Verify Facts',
      description: 'Master fact-checking techniques and discover trusted sources to verify claims'
    },
    {
      icon: '🧠',
      title: 'Think Critically',
      description: 'Develop critical thinking skills to question what you see online before sharing'
    },
    {
      icon: '🛡️',
      title: 'Stay Protected',
      description: 'Protect yourself and others from the spread of false information on social media'
    }
  ]

  return (
    <section className="features">
      <h2 className="section-title">Why Veriscope?</h2>
      <p className="section-subtitle">
        Empowering young people with essential digital literacy skills
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
