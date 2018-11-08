import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"; //{ Input, List} from
import './App.css';
import WeatherContainer from './WeatherContainer';
import Login from './Login';
import Navi from './Navbar';
import {Switch, Route} from "react-router-dom";

// Dark sky API key: 54027aaa136404819ab799aaa96235ce
// Google API key: AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg
class App extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      location: Number,
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
    console.log(this.state);
    try{
      console.log("GOT HERE, TOO")
      const createUser = await fetch('http://localhost:9000/auth/register', {
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
          username: parsedResponse.data.username,
          location: parsedResponse.data.location
        })
      } else if (parsedResponse.status == 500){
        console.log("INTERNAL SERVER ERROR")
      }
    }catch(err){
      console.log(err, " error")
    }
  }

  submitLogin = async (e) => {
    e.preventDefault();
    console.log("GOT LOGS")
    try{
      const loggedUser = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        } 
      });
      const parsedLogged = await loggedUser.json();
      console.log(parsedLogged, ' login successful')
      if(parsedLogged.status == 200){
        this.setState({
          loggedIn: true,
          username: parsedLogged.data.username,
          location: parsedLogged.data.location
        })
      } else if (parsedLogged.status == 500){
        console.log("INTERNAL SERVER ERROR")
      }
    }catch(err){
      console.log(err, " error")
    }
  }

  render(){
    return (
      <div className="App">
        <Navi />
        {/* <Switch>
          <Route exact path="/" Component={Login}/>
          <Route exact path="/weather" Component={WeatherContainer}/> */}
        { this.state.loggedIn ? <WeatherContainer username={this.state.username} location={this.state.location} /> : <Login submitRegistration={this.submitRegistration} handleInputs={this.handleInputs} />}
        <Login deletedUser = {this.deletedUser} username={this.state.username} />

        {/* </Switch> */}
      </div>
    );
  }
}


export default App;