import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <div id="menuToggle">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

        <ul id="menu">
          <div className='center'>
            <Link to='/'><li>Hello</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/portfolio'><li>Portfolio</li></Link>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
