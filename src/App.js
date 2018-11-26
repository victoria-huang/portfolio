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
  // onDestroyed={() => console.log('destroyed')}
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
                  config={{ tension: 1, friction: 10, delay: 1000 }}
                  keys={ location.pathname.split('/').filter(a => a)[0] }
                  from={{ willChange: 'opacity', opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}>
                  {style => (
                    <Switch location={location}>
                      <Route exact path="/" render={props => <Banner { ...props } style={ style } /> } />
                      <Route path="/about" render={props => <AboutContainer { ...props } style={ style } /> } />
                      <Route path= "/portfolio" render={props => <ProjectContainer { ...props } style={ style } /> } />
                      <Route path="/contact" render={props => <Contact { ...props } style={ style } /> } />
                      <Route render={() => <div className='mainRoute' style={{ background:'#000000' }}><h1>Page Not Found</h1></div>} />
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
