import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Main from './components/app/main'
import About from './components/app/about'
import Contact from './components/app/contact'
import CV from './components/app/cv'
import Projects from './components/app/projects'
import Blog from './components/app/blog'
import Skills from './components/app/skills'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='cv' component={CV} />
      <Route path='projects' component={Projects} />
      <Route path='blog' component={Blog} />
      <Route path='skills' component={Skills} />
    </Route>
  </Router>
  , document.querySelector('main'))
