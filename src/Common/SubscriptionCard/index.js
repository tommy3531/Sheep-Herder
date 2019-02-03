import React, { Component } from "react";
import { CardText, CardTitle, CardSubtitle, CardLink, CardBody, Card, CardImg, Button, Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import '../../styles/main.css';


class SubscriptionCard extends Component {
    render() {
      return (

        <Container fluid>
            <Row>
            <Col>
            <div>
                <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
                </Card>
            </div>
            </Col>
            <Col>
            <div>
                <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
                </Card>
            </div>
            </Col>
            <Col>
            <div>
                <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
                </Card>
            </div>
            </Col>
            </Row>
        </Container>
      );
    }
}

export default SubscriptionCard;