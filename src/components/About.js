import React from 'react'

const About = (props) => {
  return (
      <div>
        <div className='row-container'>
          <div className='column-left'>
            <h2>Hi! I'm <span className='emphasize'>Victoria</span>.</h2>
            <h3>
              Full-stack software <span className='emphasize'>engineer</span> and <span className='emphasize'>pharmacist</span> based
              in New York City.
              I'm passionate about <span className='emphasize'>creating</span> and <span className='emphasize'>developing</span> impactful
              applications to improve our quality of life.
            </h3>

            <hr className='white-hr' />

            <p>
              // React, React Native, Redux, Node, Express, JavaScript, Ruby, Rails, Java, RSpec, SQL,
              // PostgreSQL, HTML, CSS, Canvas, Bootstrap, Semantic, Git, Heroku
              JavaScript, React, React Native, Redux, Node.js, Express, Ruby, Rails, Java, SQL,
              PostgreSQL, HTML, CSS, Git
            </p>
          </div>
          <div className='column-right'>
          </div>
        </div>
      </div>
  )
}

export default About
