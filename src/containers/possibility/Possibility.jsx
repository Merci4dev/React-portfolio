import React from 'react'
import './possibility.css'
import pissibilityImage from '../../assets/possibility.png'
import { JavaScript,react,nodejs,mysql,bash,linux} from '../../components/brand/import'

const Possibility = () => {
  return (
    // <div className='container section__padding' id='possibility'>
    <div className='possibility__container' id='possibility'>
      <div className='container-image'>
        <img src={pissibilityImage} alt="Possibility" />
      </div>

      <div className='container-content'>

          {/* 3D cube  */}
        <section className="cube__container vh-100">
            <div className="cube">
                <div className="box front"> 
                  <a href="#">
                    <img src={JavaScript} alt="html" />
                  </a>
                  </div>
                <div className="box back">
                    <a href="#">
                      <img src={react} alt="html" />
                    </a>
                </div>
                <div className="box left">
                    <a href="#">
                      <img src={nodejs} alt="html" />
                    </a>
                </div>
                <div className="box right">
                    <a href="#">
                      <img src={mysql} alt="html" />
                    </a>
                </div>
                <div className="box top">
                    <a href="#">
                      <img src={bash} alt="html" />
                    </a>
                </div>
                <div className="box buttom">
                    <a href="#">
                      <img src={linux} alt="html" />
                    </a>
                </div>
            </div>
        </section>

      </div>
      <div>

        <h3 className='gradient__text'>It doesn't matter what kind of app it is. If you can imagine it we can do code it for .</h3>
        </div>
    </div>
  )
}

export default Possibility