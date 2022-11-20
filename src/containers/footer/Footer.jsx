import React from 'react'
import './footer.css'
import logo from '../../assets/logo-1.svg';

const Footer = () => {
  return (
    <div className='footer '>
      <div className='footer-heading'>
          <h5 className='gradient__text'>It is a pleasure for us to attend to all your concerns.</h5>
      </div>
  
      <div className='footer-links'>
        <div className='footer-links_logo'>
            <img src={logo} alt="logo"/>
            <a href=''>Elier Antonio Mercedes</a>
        </div>

        {/* <div className='footer-links_div'>
            <h4>Links</h4>
            <a href=''>Overones</a>
            <a href=''>Social Media</a>
            <a href=''>Counters</a>
          
        </div> */}

        {/* <div className='footer-links_div'>
            <h4>Company</h4>
            <a href=''>Terms & condictions</a>
            <a href=''>Privacy Policy</a>
        </div> */}

        <div className='footer-links_div'>
            <h4>Get in touch</h4>
            <a href=''>Address:  Wagramerstrasse 97 1220 Wien </a>
            <a href='tel:+436644583285'>+43 664 458 3285</a>
            <a href='mailto:mercedes4developers@gmail.com'>mercedes4developers@gmail.com</a>
        </div>
      </div>
      <div className='footer-copyright'>
          <a href='#home'>@ 2022 <img src={logo} alt="logo"/> All rights reserved.</a>
      </div>
    </div>
  )
}

export default Footer