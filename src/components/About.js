import React from 'react'
import { ParallaxLayer } from 'react-spring'

const About = (props) => {
  return (
    <ParallaxLayer offset={ 1 } speed={ -0.1 }>
      <div className='center'>
        <div className='row-container'>
          <div className='column-left'>
            <img src='assets/profile.jpg' alt='profile' />
          </div>
          <div className='column-right'>
            <h1>Hi, I'm Victoria!</h1>
            <p>
              I'm a full-stack web developer and pharmacist based in New York City.
              I'm passionate about utilizing my skills to create beautiful and meaningful
              projects.
            </p>
            <hr className='black-hr' />
            <h3>Technical Skills</h3>
            <hr className='black-hr' />

            <p>
              React, React Native, Redux, Node, Express, JavaScript, Ruby, Rails, Java, RSpec, SQL,
              PostgreSQL, HTML, CSS, Canvas, Bootstrap, Semantic, Git, Heroku
            </p>
          </div>

        </div>
      </div>
    </ParallaxLayer>
  )
}

export default About
