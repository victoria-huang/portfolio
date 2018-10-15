import React from 'react'
import { animated } from 'react-spring'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'

const settings = { dots: true }

const AboutContainer = (props) => {
  return (
    <animated.div style={{ ...props.style, background: `#C7C7C7` }}>
      <div className='mainRouteItem'>
        <Slider {...settings}>
          <About />
          <Resume />
        </Slider>


          <FaAngleDown size={ 30 } onClick={ () => props.history.push('/projects') } />

      </div>
    </animated.div>
  )
}

export default AboutContainer
