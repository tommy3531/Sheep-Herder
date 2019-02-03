import { CardText, CardTitle, CardSubtitle, CardLink, CardBody, Card, CardImg, Button, Col, Row, Container } from "reactstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../../styles/main.css';
import Navigation from "../../Common/Navigation";
import Subscription from "../../Common/SubscriptionCard";

class Services extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navigation />
            </Col>
          </Row>
        </Container>
        <Container>
        <Row>
          <Col>
            <Subscription />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
