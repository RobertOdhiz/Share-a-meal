import React from 'react'
import './Footer.css'
import FooterLogo from '../Assets/footerlogo.png'


function Footer() {
  return (
  <footer>
    <div className='footer'>
        <div className="column">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="column">
          <h4>Resources</h4>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Get Started</li>
          </ul>
        </div>
        <div className="column">
          <h4>Find Us on Social media</h4>
          <ul>
            <li>X</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="bi bi-telephone-forward"></i><span>Call Us</span></li>
            <li><i className="bi bi-chat-left-dots"></i><span>Message Us</span></li>
            <li><i className="bi bi-envelope-at"></i><span>Email Us</span></li>
          </ul>
        </div>
    </div>
    <p>&copy; 2024 Shareameal.com</p>
  </footer>
  )
}

export default Footer