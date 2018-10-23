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
          <Link to='/'><li>hello</li></Link>
          <Link to='/about'><li>about</li></Link>
          <Link to='/portfolio'><li>portfolio</li></Link>
          <Link to='/portfolio'><li>contact</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
