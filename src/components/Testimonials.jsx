import { useState, useEffect } from 'react'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      text: "I'm truly impressed by the quality, accuracy, and speed!",
      author: 'Gideon'
    },
    {
      text: 'Veriscope is the best fact-checker platform ever created!',
      author: 'Paula'
    },
    {
      text: 'Very accurate and easy to use!',
      author: 'Andorra'
    },
    {
      text: 'Wow, just wow! This tool is amazing.',
      author: 'Adam'
    },
    {
      text: 'I used it to scan a video online, and the result was accurate!',
      author: 'Eman'
    },
    {
      text: 'Cool interface and powerful verification!',
      author: 'Bryan'
    },
    {
      text: 'Easy to navigate, nice UX and reliable results!',
      author: 'Ola'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="testimonials-section">
      <div className="section-divider"></div>

      <div className="testimonials-header">
        <h2>SEE WHAT OTHERS HAVE SAID</h2>
      </div>

      <div className="slideshow-container">
        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slide">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="dots-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
