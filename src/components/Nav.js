import React from 'react'

const Nav = (props) => {
  return (
    <nav>
      <div id="menuToggle">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

        <ul id="menu">
          <a onClick={ () => props.scroll(0) }><li>Hello</li></a>
          <a onClick={ () => props.scroll(1) }><li>About</li></a>
          <a onClick={ () => props.scroll(2) }><li>Portfolio</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
