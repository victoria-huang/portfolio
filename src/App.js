import React, { Component } from 'react'
import Banner from './components/Banner'
import AboutContainer from './containers/AboutContainer'
import ProjectContainer from './containers/ProjectContainer'
import Contact from './components/Contact'
import { Transition } from 'react-spring'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location, ...rest }) => (
            <div className="fill">
              <Nav />
              <div className="content">
                <Transition
                  native
                  config={{ tension: 1, friction: 10 }}
                  keys={ location.pathname.split('/').filter(a => a)[0] }
                  from={{ willChange: 'transform, opacity', transform: 'translateY(500px)', opacity: 0 }}
                  enter={{ transform: 'translateY(0px)', opacity: 1 }}
                  leave={{ transform: 'translateX(-250px)', opacity: 0 }}>
                  {style => (
                    <Switch location={location}>
                      <Route exact path="/" render={props => <Banner { ...props } style={style} /> } />
                      <Route path="/about" render={props => <AboutContainer { ...props } style={style} /> } />
                      <Route path="/portfolio" render={props => <ProjectContainer { ...props } style={style} /> } />
                      <Route path="/contact" render={props => <Contact { ...props } style={style} /> } />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  )}
                </Transition>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
