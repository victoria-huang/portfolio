import React, { Component, Fragment } from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons'
import { Link } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'
import { MoonLoader } from 'react-spinners'

class Project extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState( prevState => ({
      isClicked: !prevState.isClicked
    }))
  }

  render() {
    return (
      <ParallaxLayer offset={ this.props.offset } speed={-0.2} style={{ backgroundColor: '#006E6D' }}>
        <div className='container-item'>
          {
            this.state.isClicked ?
              <ProjectDetail handleClick={ this.handleClick } { ...this.props} />
            :
              <div>
                <span className='overlay-text'>
                  { this.props.scrolling ? 
                    <MoonLoader
                      sizeUnit={"px"}
                      size={100}
                      color={'white'}
                      loading={ this.props.scrolling }
                    />
                    :
                    <Fragment>
                      <h1 onClick={ this.handleClick } style={{ cursor: 'pointer' }} className='large'>
                        { this.props.name }
                      </h1>
                      <a className='learn back' onClick={ this.handleClick }>Learn more.</a>
                    </Fragment>
                  }
                </span>
                { !this.props.scrolling 
                  &&
                  <img onClick={ this.handleClick } className='project-image' src={ this.props.image } alt={ `${this.props.name} preview` } />
                }
              </div>
          }
        </div>

        {
          (this.props.last && !this.props.scrolling)
          &&
          <span className='bottom-button'>
            <Link to='/contact'>
              <button className='button-2'>Contact me.</button>
            </Link>
          </span>
        }
      </ParallaxLayer>
    )
  }
}

export default Project
