import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/main.css";
import netlifyIdentify from 'netlify-identity-widget';

class Navigation extends Component {

  componentDidMount() {
    netlifyIdentify.init();
  }
  render() {
    const {siteTitle} = this.props;
    return (
      <Container>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              Sheep Herder
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <div data-netlify-identity-menu></div>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    );
  }
}

export default Navigation;
