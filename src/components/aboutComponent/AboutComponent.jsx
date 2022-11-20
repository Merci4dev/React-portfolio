import React from 'react'
import './aboutComponent.css'

// Single feature component. let pasamos eltitulo como props
const AboutComponent = ({title, text, text2, text3}) => {
  return (
    <div className='about-container'>

      <div className='about-container__title'>
          <div>
            <h3>{title}</h3>
          </div>
          
          <div className='about-container__text'>
            {text}
            {text2}
            {text3}
          </div>
      </div>

    </div>
  )
}

export default AboutComponent

