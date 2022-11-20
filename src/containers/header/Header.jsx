import React from 'react'
import './header.css'
import blog02 from '../../assets/blog02.png'
import logo from '../../assets/logo-1.svg'


const Header = () => {
  return (
    <div className='heaader-container' id='home'>
      <div className='heaader-container-content'>
        <h1 className='gradient__text slide-in-top'>Find the best partner for your project with us at: <img className='logo__bg' src={logo}/></h1>

        <div className='paragraph__container'>
          <p className='motion_header_p'>We turn your ideas into a pleasant experience for you and the world.</p>
          <p>And all that only with code.</p>
          <p> Let's start now.</p>
        </div>
      </div>
      
      <div className='heaader-container-image flicker-in'>
        <img src={blog02} alt="blog02"/>
      </div>
    </div>
  )
}

export default Header