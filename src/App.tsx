import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import Header from './components/header'
// import Footer from './components/footer';

import Home from './view/home'
import About from './view/about'
import Error from './view/error'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/home/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/error' component={Error}></Route>
          <Redirect to='/error' />
        </Switch>
      </div>
    )
  }
}