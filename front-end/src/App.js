import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
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
      location: 10000,
      loggedIn: false
    }
  }
  handleInputs = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  submitRegistration = async (e) => {
    e.preventDefault();
    console.log("GOT HERE")
    try{
      const createUser = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        } 
      });
      const parsedResponse = await createUser.json();
      console.log(parsedResponse, ' this is response')
      if(parsedResponse.status == 200){
        this.setState({
          loggedIn: true,
          // this isn't a real login - need to align it with the back-end to sort that out
          username: parsedResponse.data.username
        })
      } else if (parsedResponse.status == 500){
        console.log("INTERNAL SERVER ERROR")
      }
    }catch(err){
      console.log(err, " error")
    }


  }
  render() {
    return (
      <div className="App">
        { this.state.loggedIn ? <WeatherContainer username={this.state.username} zip={this.state.location} /> : <Login submitRegistration={this.submitRegistration} handleInputs={this.handleInputs} />}
      </div>
    );
  }
}

export default App;