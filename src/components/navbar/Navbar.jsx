import React from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import { useState } from 'react';
import logo from '../../assets/logo-1.svg'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram  } from "react-icons/ai";

// Menu component
const Menu = () =>{
  return(
      <>
      <p><a href="#home">Home</a></p>
      <p><a href="#tech">Tech</a></p>
      <p><a href="#about">About me</a></p>
      <p><a href="#services">Services</a></p>
      <p><a href="#possibility">Posibility</a></p>
      <p><a href="#projects">Projects</a></p>
      <p><a href="#contact">Contacts</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className='nabvar__section'>

      <div className='navbar'>
        <div className='navbar-links'>
            <div className='navbar-links_logo'>
              <a href='/'>
                <img src={logo} alt='Logo'/>
              </a>

            </div>
              <div className='socila_container'>
                <span title='Visit us on twitter'>
                    <a href='https://www.linkedin.com/in/elier-mercedes-7747a3256/recent-activity/' target='_blanck'>
                      <AiFillTwitterSquare />
                    </a>
                </span>

                <span title='Visit us on Instagram'>
                    <a href='https://www.instagram.com/vitacora_web/' target='_blanck'>
                      <AiFillInstagram />
                    </a>
                </span>

                <span title='Visit us on facebook'>
                    <a href='https://www.facebook.com/' target='_blanck'>
                      <AiFillFacebook />
                    </a>
                </span>
              </div>

            <div className='navbar-links_container' >
              < Menu />
            </div>
        </div>

        <div className='navbar-menu' >
            {toggleMenu 
              ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className='navbar-nenu_container slit-in-vertical' >
                <div className='navbar-menu_container-links'>
                  {<Menu />}

                  <div className='navbar-menu_container-links-sing navbar-sing' >
                </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default Navbar