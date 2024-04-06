import React from 'react'
import './Footer.css'
import FooterLogo from '../Assets/footerlogo.png'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SmsIcon from '@mui/icons-material/Sms';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Call from '@mui/icons-material/Call';
// import X from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer'>
      <div className="row">
        <div className="column">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="column">
          <h4>Find Us on Social media</h4>
          <div className="row">
          
            <XIcon/>
            <FacebookIcon />
            <InstagramIcon />
            <SmsIcon />
          
          </div>
          
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          {/* <div className="row"></div> */}
          
            <CallIcon />
            <EmailIcon />
            <LocationOnIcon />
          
          
           
        </div>
        
        <div className="column">
          <div id='list'>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Contact</ul>
          <ul>Get Started</ul>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Shareameal.com</p>


    </div>
  )
}

export default Footer