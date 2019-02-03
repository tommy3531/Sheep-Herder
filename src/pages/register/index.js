import React, { Component } from "react";
import { Container } from "reactstrap";

import Navigation from "../../Common/Navigation";
import Header from "../../Common/Header";

class Register extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Navigation />
          <h1 className="container-subscription">Register</h1>
        </Container>
      </div>
    );
  }
}

export default Register;
