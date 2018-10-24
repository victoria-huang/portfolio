import React from 'react'
import { animated } from 'react-spring'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelopeSquare } from 'react-icons/fa'

const settings = { dots: true }

const Contact = (props) => {
  return (
    <animated.div className='mainRoute' style={{ ...props.style, background: `#555555` }}>
      <div className='mainRouteItem contact'>
        <h1>I would love to hear from you.</h1>
        <hr className='white-hr' style={{ width: '200px', marginBottom: '30px' }} />

        <a href="mailto:vctrah@gmail.com">
          <FaEnvelopeSquare size={ 50 } />
        </a>

        <a href="https://www.linkedin.com/in/victoriah92/" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '30px'}}>
          <FaLinkedin size={ 50 } />
        </a>

        <a href="https://github.com/victoria-huang" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '30px'}}>
          <FaGithub size={ 50 } />
        </a>

        <a href="https://medium.com/@victoria.huang" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '30px'}}>
          <FaMedium size={ 50 } />
        </a>
      </div>
    </animated.div>
  )
}

export default Contact
