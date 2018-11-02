import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer';
import Login from './Login';

// Dark sky API key: 54027aaa136404819ab799aaa96235ce
class App extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    }
  }
  handleLogin = () => {
    console.log("LOGGED IN (WITH FAKE LOG IN - IT DOESN'T GO ANYWHERE YET")
    this.setState({
      loggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        { this.state.loggedIn ? <WeatherContainer /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
