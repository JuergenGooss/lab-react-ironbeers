import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import ListBeers from './components/ListBeers'
import Navi from './components/Navi'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ironbeers</h1>
        </header>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/beers' component={ ListBeers } />
          <Route exact path='/random-beer' component={ RandomBeer } />
          <Route exact path='/new-beer' component={ NewBeer } />
        </Switch>
      </div>
    );
  }
}

