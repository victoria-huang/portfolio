import React from 'react'
import { ParallaxLayer } from 'react-spring'

const About = (props) => {
  return (
    <ParallaxLayer offset={ 1.5 } speed={ 0.5 }>
      <div className='ui container center aligned'>
        Victoria Huang is a full-stack web developer and pharmacist based in New York City.
        <hr />
        <a href="https://github.com/victoria-huang" target="_blank" rel="noopener noreferrer">
          <i className="large circular github link icon"></i>
        </a>&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/victoriah92/" target="_blank" rel="noopener noreferrer">
          <i className="large circular linkedin link icon"></i>
        </a>&nbsp;&nbsp;
        <a href="https://medium.com/@victoria.huang" target="_blank" rel="noopener noreferrer">
          <i className="large circular medium link icon"></i>
        </a>&nbsp;&nbsp;
        <a href="https://www.victoriahuang.me" target="_blank" rel="noopener noreferrer">
          <i className="large circular user circle link icon"></i>
        </a>
      </div>
    </ParallaxLayer>
  )
}

export default About
