import React, { Component } from 'react'
import { animated } from 'react-spring'
import sr from './ScrollReveal'
import Particles from 'react-particles-js'
import Banner from './Banner'

class Particle extends Component {
  state = {
    mouseOver: false
  }

  componentDidMount = () => {
    const config = {
      origin: 'top',
      duration: 800,
      delay: 100,
      distance: '30px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.header, config)
  }

  handleMouseEnter = () => {
    this.setState({
      mouseOver: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      mouseOver: false
    })
  }

  render() {
    return (
      <animated.div className='mainRoute' style={{ ...this.props.style, background: `#1B1B1C` }}>
        <div className="particle">
          <Particles 
            params={
              {
                "particles": {
                  "number": {
                    "value": 800,
                    "density": {
                      "enable": true,
                      "value_area": 7854.732123833044
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 1,
                      "color": "#1B1B1C"
                    },
                    "polygon": {
                      "nb_sides": 9
                    },
                  },
                  "opacity": {
                    "value": 0,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 3,
                      "size_min": 0.31,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 0,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1.4430708547789706
                  },
                  "move": {
                    "enable": true,
                    "speed": 0.8,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 801.7060304327614,
                      "rotateY": 881.8766334760375
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "bubble"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 73.08694910712106,
                      "line_linked": {
                        "opacity": 0.7568154521972333
                      }
                    },
                    "bubble": {
                      "distance": 200,
                      "size": 20,
                      "duration": 3,
                      "opacity": 1,
                      "speed": 4
                    },
                    "repulse": {
                      "distance": 100,
                      "duration": 0.1
                    },
                    "push": {
                      "particles_nb": 8
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }
            }
          />
        </div>

        <Banner {...this.props} />
      </animated.div>
    )
  }
}

export default Particle
