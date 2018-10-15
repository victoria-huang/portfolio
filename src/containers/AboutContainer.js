import React from 'react'
import { ParallaxLayer } from 'react-spring'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'

const settings = { dots: false }

const AboutContainer = (props) => {
  return (
    <ParallaxLayer offset={ 1 } speed={ -0.1 }>
      <div className='center'>
        <Slider {...settings}>
          <About />
          <Resume />
        </Slider>


          <FaAngleDown size={ 30 } onClick={ () => props.scroll(2) } />

      </div>
    </ParallaxLayer>
  )
}

export default AboutContainer
