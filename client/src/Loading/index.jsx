import React from "react";
import { Container, Row, Col } from "reactstrap";

const Loading = () => (
    <div className="loading-container">
        <Container>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <Row>
                <Col></Col>
                <div className="sub-container">
                    <Col><p className="loading-text">loading weather data...</p></Col>
                </div>
                <Col></Col>
            </Row>
        </Container>
    </div>
);

export default Loading;