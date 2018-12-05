import React, {Component} from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div className="big-container">
                {this.props.loggedIn ? <Redirect to="/weather"/>: <div/> }
                <div className="spacer"/>
                    <h1>Login</h1>
                    <Form onSubmit={this.props.submitLogin}>

                            <Label className="login-container">
                        <Row> 
                            <FormGroup>
                                <Input type="text" name="username" placeholder="username" onChange={this.props.handleInputs} />
                            </FormGroup>
                        </Row>
                        <Row></Row>
                        <Row>
                            <FormGroup>
                                    <Input type="password" name="password" placeholder="password" onChange={this.props.handleInputs} />
                            </FormGroup>
                        </Row>
                        <Row>
                            <Button className="color-main-two" type="submit">Submit</Button>
                        </Row>
                            </Label>
                    </Form>
                <div className="spacer"/>
                <h1>Register</h1>
                <Form onSubmit={this.props.submitRegistration}>
                    <Label className="login-container">
                    <Row>
                        <FormGroup>
                            <Input placeholder="username" type="text" name="username" onChange={this.props.handleInputs} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Input placeholder="password" type="password" name="password" onChange={this.props.handleInputs} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Input placeholder="zip code" type="number" name="location" onChange={this.props.handleInputs}/>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button className="color-main-two" type="submit">Submit</Button>
                    </Row>
                    </Label>
                </Form>
                <div className="spacer"/>
            </div>
        )
    }
}

export default Login;