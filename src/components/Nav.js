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

        <div id="menu">
          <Link to='/'>Hello.</Link>
          <Link to='/about'>About.</Link>
          <Link to='/portfolio'>Portfolio.</Link>
          <a href='' target="_blank" rel="noopener noreferrer">Resume.</a>
          <Link to='/contact'>Contact.</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
