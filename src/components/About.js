import React from 'react'
import { ParallaxLayer } from 'react-spring'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelopeSquare } from 'react-icons/fa'

const About = (props) => {
  return (
    <ParallaxLayer offset={ 1.5 } speed={ 0.5 }>
      <div className='center container'>
        <hr />
        <p>Victoria Huang is a full-stack web developer and pharmacist based in New York City.</p>
        <hr />
        <br />
        <a href="https://github.com/victoria-huang" target="_blank" rel="noopener noreferrer">
          <FaGithub size={ 40 } />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/victoriah92/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={ 40 } />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://medium.com/@victoria.huang" target="_blank" rel="noopener noreferrer">
          <FaMedium size={ 40 } />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:vctrah@gmail.com">
          <FaEnvelopeSquare size={ 40 } />
        </a>
      </div>
    </ParallaxLayer>
  )
}

export default About
