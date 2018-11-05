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
  handleInputs = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  submitLogin = (e) => {
    e.preventDefault();
    console.log("LOGGED IN (WITH FAKE LOG IN - IT DOESN'T GO ANYWHERE YET");
    console.log(this.state.username);
    this.setState({
      loggedIn: true,
      // this isn't a real login - need to align it with the back-end to sort that out
      username: this.state.username
    })
  }
  render() {
    return (
      <div className="App">
        { this.state.loggedIn ? <WeatherContainer username={this.state.username} /> : <Login submitLogin={this.submitLogin} handleInputs={this.handleInputs} />}
      </div>
    );
  }
}

export default App;
