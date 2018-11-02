import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherContainer from './WeatherContainer';

// Dark sky API key: 54027aaa136404819ab799aaa96235ce
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
