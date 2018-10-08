import React, { Fragment } from 'react'

const Nav = (props) => {
  return (
    <Fragment>
      <a onClick={ () => props.scroll(1) }>Link 1</a>
      &nbsp; | &nbsp;
      <a onClick={ () => props.scroll(2) }>Link 2</a>
    </Fragment>
  )
}

export default Nav
