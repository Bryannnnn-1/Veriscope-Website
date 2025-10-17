import { useState } from 'react'
import attach from "../assets/attach.svg"
import arrow from "../assets/arrow.svg"

function Hero() {
  const [content, setContent] = useState('')
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState(null)

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-main-title">Veriscope</h1>
        <p className="hero-tagline">Your superhuman fact-checker</p>

        <div className="scan-container">
          <div className="input-wrapper">
            <textarea
              className="scan-input"
              placeholder="Ask Veriscope to scan anything..."
              rows={2}
            />
            <div className="scan-actions">
              <label className="attach-btn" title="Upload file">
                <input
                  style={{ display: 'none' }}
                />
                <img src={attach}/>
              </label>
              <button
                className="scan-submit"
              >
                <img src={arrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
