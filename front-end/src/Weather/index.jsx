import React, {Component} from "react";
import {Button, Alert, Container, Row, Col } from "reactstrap";

export default class Weather extends Component {
    render(){
        // var Alert = require('react-bootstrap').Alert;
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                    <h1>Hi, {this.props.username}!</h1>
                    <Button color="danger">Help</Button>
                    </Col>
                    </Row>
                    <Row>
                        <Col>.col</Col>
                        <Col>.col</Col>
                        <Col>.col</Col>
                        <Col>.col</Col>
                    </Row>
                    <Row>
                        <Col xs="3">.col-3</Col>
                        <Col xs="auto">.col-auto - variable width content</Col>
                        <Col xs="3">.col-3</Col>
                    </Row>
                    <Row>
                        <Col xs="6">.col-6</Col>
                        <Col xs="6">.col-6</Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                        <Col sm="4">.col-sm-4</Col>
                    </Row>
                    {/* Show weather map of submitted */}
                    <h3>In {this.props.city}...</h3>
                    <ul>
                        <li>It's {this.props.temp}°F.</li>
                        <li>More data</li>
                        <li>More data</li>
                        <li>More data</li>
                    </ul>
                    <Alert color="primary">
                        this an alert
                    </Alert>
                    {/* <Button color="danger">
                        click me daddy
                    </Button> */}
                </Container>
            </div>
        )
    }
}