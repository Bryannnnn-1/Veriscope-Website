import linkedin from '../assets/linkedin.svg';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="src\assets\logo.png" className="logo-icon" />
          </div>
          <p className="footer-tagline">Your superhuman fact-checker</p>
          <p className="footer-description">
            Empowering youth with digital literacy skills to combat misinformation
          </p>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#partners">Become a Partner</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#guides">Fact-Checking Guides</a></li>
            <li><a href="#tools">Verification Tools</a></li>
            <li><a href="#research">Research</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#report">Report Abuse</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#linkedin" className="social-link" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Veriscope - Digital Skills Project. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
