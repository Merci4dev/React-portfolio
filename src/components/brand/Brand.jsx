import React from 'react'
import './brand.css'
import { 
  HTML,
  CSS,
  JavaScript,
  react,
  next,
  nodejs,
  python,
  mysql,
  bash,
  figma,
  git,
  mongodb,
  linux,
  wp,
  sanity 
} from './import'

  const Brand = () => {
  return (
      <div className='brand' id='tech'> 
          <div className='brand__title '>
            <h2 
              className='gradient__text-2'>
                We develop your application with the following technologiesa. 
                Choose from our set of technologies for the development of your application for both the frontend and the backend.
            </h2>
      
          </div>

        <div className='brand-tech'>

          <div className='brand__track'>

            <div>
              <a href="#">
                <img src={HTML} alt="html" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={CSS} alt="css" />
              </a>
            </div>

            <div>
                <a href="#">
                  <img src={JavaScript} alt="Javascript" />
                </a>
            </div>

            <div>
              <a href="#">
                <img src={react} alt="react" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={next} alt="next" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={nodejs} alt="nodejs" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={python} alt="python" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={mysql} alt="mysql" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={bash} alt="bash" />
              </a>
            </div> 

            <div>
              <a href="#">
                <img src={figma} alt="figma" />
              </a>
            </div>
          
          
            <div>
              <a href="#">
                <img src={git} alt="git" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={mongodb} alt="mongodb" />
              </a>
            </div>

            <div>
              <a href="#">
                <img src={wp} alt="google" />
              </a>
            </div> 

            <div>
              <a href="#">
                <img src={sanity} alt="google" />
              </a>
            </div> 

            <div>
              <a href="#">
                <img src={linux} alt="google" />
              </a>
            </div> 
           </div>
        </div>
      </div>
  )
}
export default Brand