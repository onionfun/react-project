import React, {Component} from "react";

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.props.handleLogin}>
                    username: <input type="text" name="username" /><br/>
                    password: <input type="password" name="password" /><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login;