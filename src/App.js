import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Preloader from './Components/Preloader/Preloader';
import Home from './Components/Layout/Home/Home';
import Portfolio from './Components/Layout/Portfolio/Portfolio';
import Resume from './Components/Layout/Resume/Resume';
import Contact from './Components/Layout/Contact/Contact';
import Login from './Components/Layout/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true }
  }

  componentWillMount() {
    // Set isLoading to false after DOM is rendered
    this.setState({ isLoading: false });
  }

  render() {
    const isLoading = this.state.isLoading;

    // return ( isLoading ? <Preloader/> : <Home/> );

    return (
        isLoading ? <Preloader/> :

        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/portfolio' component={Portfolio}/> 
          <Route path='/resume' component={Resume}/> 
          <Route path='/contact' component={Contact}/> 
          <Route path='/login' component={Login}/> 
        </Switch>
    );
  }
}

export default App;
