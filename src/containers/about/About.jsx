import React from 'react'
import { AboutComponent } from '../../components'
import './about.css'
import elier from '../../assets/elier.png'
import videoBg from '../../assets/images/teclado.mp4'
// import cv from '../../../public/cv/Lebenslauf.pdf'

const Whatweb = () => {
  return (
    // <div className='about section__margin' id='about'>
    <div className='about ' id='about'>
        <div className='about__me'>
          <p>
            But before we continue with the presentation of our abilities, let me introduce myself..</p>
        </div>

        <div className='about-container'>
          <div className='about__img'>
              <img src={elier} alt='elier photo'/>

            <div className='download'>
              <a 
                id="open-cv" 
                className="open-cv" 
                href="Resume.pdf" 
                download="Resume.pdf" 
                target="_blank" 
                rel="noopener">Download CV
              </a>
            </div>
          </div>
          </div>

          <div className='web__about'>
            <AboutComponent 
            title='Elier Mercedes' 
            
              text={<p>Frontend and back-end software developer for two years. Using the intensive, consistent and autodidact learning methods, it was the strategy that took me to the current level to be able to apply the technologies which are described above</p>}
            />
            <AboutComponent
              text={<p>From web and desktop applications to database management and more are some of the things that make up my daily activities, things that make me very happy.</p>}
            />

            <AboutComponent
              text={<p>Considering that, a professional application is not only qualified for its functionalities, but for the visual aspect as well. The design and the styling of an application is something that must be applied with great care, therefore I have given considerable time to learning the CSS styles.</p>}
            />
            
          </div>
      
        <div className='about__heading'>
          <h3 className='gradient__text'> Of course I imagine that some of my skills will be of interest to you.</h3>
        </div>

        <div className='about__container'>

          <video 
            src={videoBg}
            autoPlay
            loop
            muted
            >
            </video>
          <div className='about__layer'>

          
            <AboutComponent 
              title={<i>Frontend developer:</i>}
              text={
                <div className="progress">
                      <span>
                        <b>90%</b>
                      </span>
                  <progress value="90" min="0" max="100"></progress>
                </div>
              }
              />

            <AboutComponent 
              
              title={<i>Web Design:</i>}
              text={
                <div className="progress">
                    <span>
                      <b>75%</b>
                    </span>
                  <progress value="75" min="0" max="100"></progress>
                </div>
              }
            /> 


            <AboutComponent 
              title={<i>Database Administration:</i>}
              text={
                <div className="progress">
                    <span>
                      <b>73%</b>
                    </span>
                  <progress value="73" min="0" max="100"></progress>
                </div>
              }
            />

            <AboutComponent 
              title={<i>Backend developer:</i>}
              text={
                <div className="progress">
                    <span>
                      <b>70%</b>
                    </span>
                  <progress value="70" min="0" max="100"></progress>
                </div>
              }
            />    

            <AboutComponent 
              title={<i>Linux Server Administration:</i>}
              text={
                <div className="progress">
                  <span>
                    <b>60%</b>
                  </span>
                  <progress value="60" min="0" max="100"></progress>
                </div>
              }
            />
          </div> 
        </div>
  </div>
  )
}

export default Whatweb