function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Capture and Upload Content',
      description: 'Have you come across content that seems suspicious? Simply copy and paste it in the action panel for scanning or upload images and videos for analysis.'
    },
    {
      number: 2,
      title: 'Veriscope Scans the Content',
      description: 'Veriscope will analyze and scan the uploaded content using AI, cross-referencing with verified sources and giving you the probability of the content being accurate or false.'
    },
    {
      number: 3,
      title: 'Advanced Features',
      description: 'Enable background scanning to automatically verify content as you browse. Use our browser extension to check facts in real-time, get instant alerts on suspicious content, and save verified articles for later.'
    },
    {
      number: 4,
      title: 'Latest Updates and News',
      description: 'We collaborate with verified news sources to provide accurate and current news. Access breaking news, trending verified stories, and fact-checked articles from trusted partners below.'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="section-divider"></div>

      <h2 className="section-heading">How It Works?</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && <div className="step-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
