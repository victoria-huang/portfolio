import React, { Component, Fragment } from 'react'
import { ParallaxLayer } from 'react-spring/dist/addons'
import { Link } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'
import { MoonLoader } from 'react-spinners';

class Project extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState( prevState => ({
      isClicked: !prevState.isClicked
    }))
  }

  // componentDidMount() {
  //   console.log('proj mount');
  // }

  // componentDidUpdate() {
  //   console.log('update');
  // }

  // componentWillUnmount() {
  //   console.log('proj unmount');
  // }

  render() {
    return (
      <ParallaxLayer offset={ this.props.offset } speed={-0.2} style={{ backgroundColor: '#006E6D' }}>
        <div className='container-item'>
          {
            this.state.isClicked ?
              <ProjectDetail handleClick={ this.handleClick} { ...this.props} />
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
                      <h1 onClick={ this.handleClick } style={{cursor: 'pointer'}} className='large'>
                        {this.props.name}
                      </h1>
                      <button className='trigger' onClick={ this.handleClick }>Learn more.</button>
                    </Fragment>
                  }
                </span>
                <img onClick={ this.handleClick } className='project-image' src={ this.props.image ?
                  `assets/${this.props.image}`
                  :
                  'https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&h=350'
                } alt={ `${this.props.name} preview` } />
              </div>
          }
        </div>

        {
          this.props.last &&
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
