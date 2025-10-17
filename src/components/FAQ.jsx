import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Veriscope and how does it work?',
      answer: 'Veriscope is a platform that helps detect false information using advanced AI-driven technology to verify online content like videos, pictures, texts, and more. Our system cross-references content with trusted sources and fact-checkers in real-time.'
    },
    {
      question: 'How does Veriscope verify content?',
      answer: 'Veriscope uses sophisticated AI algorithms to analyze content from various sources. Our platform cross-references texts, images, and videos with trusted fact-checkers and verified sources. The AI checks for inconsistencies, manipulations, and other markers of false or misleading information, ensuring that only verified facts are presented to our users.'
    },
    {
      question: 'Is Veriscope free to use?',
      answer: 'Yes, Veriscope is free to use! Our goal is to provide accessible, reliable information to everyone. While certain advanced features may require a subscription, the core functionality of verifying content is available to all users at no cost.'
    },
    {
      question: "Who are Veriscope's partners?",
      answer: "Veriscope collaborates with a range of trusted sources to provide accurate, verified information. Some of our key partners include leading news outlets like the BBC, Sky News, CNN, Reuters, and Associated Press, as well as independent fact-checking organizations. This collaboration ensures transparency and credibility in the content we provide."
    },
    {
      question: 'How can I stay updated on new developments with Veriscope?',
      answer: 'To stay updated on the latest features, news, and insights from Veriscope, you can subscribe to our newsletter, follow us on social media, or check our blog regularly. We are always working on new ways to improve the platform and bring you the most accurate information possible.'
    },
    {
      question: 'Is Veriscope safe to use?',
      answer: 'Yes, Veriscope is completely safe to use. We prioritize user privacy and data protection, ensuring that your information is secure. We do not collect personal data unless required for the platform functionality, and we are committed to safeguarding your online experience.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="section-divider"></div>

      <h2 className="section-heading">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
