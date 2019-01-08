import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Preloader from './Components/Preloader/Preloader';
import Home from './Components/Layout/Home/Home';

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

    return ( isLoading ? <Preloader/> : <Home/> );
  }
}

export default App;
