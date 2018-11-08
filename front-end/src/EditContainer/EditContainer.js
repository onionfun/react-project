/*import React, {Component} from "react";

class Edit extends Component{
handleInputs = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  submitEdit = async (e) => {
    e.preventDefault();
    console.log("GOT EDIT")
    console.log(this.state);
    try{
      console.log("GOT edit, TOO")
      const updateUser = await fetch('http://localhost:9000/:id/edit', {
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
  render(){
      return(

      )
  }
}

export default Edit;*/
