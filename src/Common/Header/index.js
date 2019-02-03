import { Container, Jumbotron, Card, CardImg, Row, Col } from "reactstrap";
import React, { Component } from "react";
import item from '../../images/landing.jpg'
import "bootstrap/dist/css/bootstrap.css";
import '../../styles/main.css';


class Header extends Component {
  render() {
    return (
        <header class="masthead">
        <Container>
          <div class="intro-text">
            <div class="intro-lead-in">Welcome To The Sheep Herder!</div>
            <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/about">Tell Me More</a>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
