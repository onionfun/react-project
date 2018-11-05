import React, {Component} from "react";

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.props.submitLogin}>
                    username: <input type="text" name="username" onChange={this.props.handleInputs} /><br/>
                    password: <input type="password" name="password" onChange={this.props.handleInputs} /><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login;