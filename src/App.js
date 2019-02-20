import React, { Component } from 'react'
import Particle from './components/Particle'
import AboutContainer from './containers/AboutContainer'
import ProjectContainer from './containers/ProjectContainer'
import Contact from './components/Contact'
import { Transition } from 'react-spring'
import Nav from './components/Nav'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="fill">
              <Nav />

              <div className="content">
                <Transition
                  native
                  items={ location }
                  config={{ duration: 1000 }}
                  keys={ location.pathname.split('/').filter(a => a)[0] }
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}>
                  {location => style => (
                    <Switch location={location}>
                      <Route exact path="/" render={props => <Particle { ...props } style={ style } /> } />
                      <Route path="/about" render={props => <AboutContainer { ...props } style={ style } /> } />
                      <Route path= "/portfolio" render={props => <ProjectContainer { ...props } style={ style } /> } />
                      <Route path="/contact" render={props => <Contact { ...props } style={ style } /> } />
                      <Route render={ () => <div className='mainRoute' style={{ background:'#000000' } }><h1>Page Not Found</h1></div>} />
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
