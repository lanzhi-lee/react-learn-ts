import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './view/index/index'
import About from './view/about/about'
import Error from './view/error/error'

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
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