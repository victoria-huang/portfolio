import React from 'react'

const About = (props) => {
  return (
      <div>
        <div className='row-container'>
          <div className='column-left'>
            <h1>Hi! I'm <span className='emphasize'>Victoria</span>.</h1>
            <h3>
              Full-stack web <span className='emphasize'>developer</span> and <span className='emphasize'>pharmacist</span> based in New York City.
              I'm passionate about utilizing my skills
              to <span className='emphasize'>create</span> beautiful and meaningful projects.
            </h3>
            {/*<hr className='white-hr' />
            <p>Technical Skills</p>*/}
            <hr className='white-hr' />

            <p>
              React, React Native, Redux, Node, Express, JavaScript, Ruby, Rails, Java, RSpec, SQL,
              PostgreSQL, HTML, CSS, Canvas, Bootstrap, Semantic, Git, Heroku
            </p>
          </div>
          <div className='column-right'>
          </div>
        </div>
      </div>
  )
}

export default About
