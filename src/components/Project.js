import React from 'react'
import { ParallaxLayer } from 'react-spring'
import { Link } from 'react-router-dom'

const Project = (props) => {
  return (
    <ParallaxLayer offset={ props.offset } speed={-0.2}>
      <div className='container-item'>
        <div>
          <h1 className='overlay-text large'>{ props.name }</h1>
          <img src={ props.image ?
            props.image
            :
            'https://www.charterres.com/wp-content/uploads/sites/5382/2018/01/Image-coming-soon.png'
          } height='400px' width='300px' alt={ `${props.name} preview` } />
        </div>
      </div>
      {
        props.last &&
        <span className='bottom-button'>
          <Link to='/contact'>
            <button className='button-2'>Contact me.</button>
          </Link>
        </span>
      }
    </ParallaxLayer>
  )
}

export default Project
