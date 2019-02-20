import React from 'react'
import { animated } from 'react-spring'
import About from '../components/About'
import { Link } from 'react-router-dom'

class AboutContainer extends React.Component {
  render() {
    return (
      <animated.div className='mainRoute bg' style={{ ...this.props.style }}>
        <div className='mainRouteItem layer'>
          <About />

          <Link to='/portfolio'>
            <button className='button'>View my projects.</button>
          </Link>

          <a href='https://s3.amazonaws.com/victoria-huang-portfolio/Victoria+Huang+Resume+2019.pdf' target="_blank" rel="noopener noreferrer">
            <button className='button'>See my resume.</button>
          </a>

          <Link to='/contact'>
            <button className='button'>Contact me.</button>
          </Link>
        </div>
      </animated.div>
    )
  }

}

export default AboutContainer
