import React from 'react'
import { animated } from 'react-spring'
import About from '../components/About'
import { Link } from 'react-router-dom'

const AboutContainer = (props) => {
  return (
    <animated.div className='mainRoute bg' style={{ ...props.style }}>
      <div className='mainRouteItem layer'>
        {/*<Slider {...settings}>*/}
          <About />
          {/*<Resume />*/}
        {/*</Slider>*/}

      {/*<div className='arrow'>*/}
        <Link to='/portfolio'>
          <button className='button'>View my projects.</button>
          { /*<FaAngleRight size={ 50 } />*/ }
        </Link>
        <a href='' target="_blank" rel="noopener noreferrer">
          <button className='button'>See my resume.</button>
        </a>
      {/*</div>*/}

      </div>
    </animated.div>
  )
}

export default AboutContainer
