import React from 'react'
import { animated } from 'react-spring'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import About from '../components/About'
import Resume from '../components/Resume'
import { Link } from 'react-router-dom'

const settings = { dots: true }

const AboutContainer = (props) => {
  return (
    <animated.div className='mainRoute bg' style={{ ...props.style }}>
      <div className='mainRouteItem layer'>
        {/*<Slider {...settings}>*/}
          <About />
          {/*<Resume />*/}
        {/*</Slider>*/}


      <Link to='/projects'><FaAngleDown size={ 50 } /></Link>

      </div>
    </animated.div>
  )
}

export default AboutContainer
