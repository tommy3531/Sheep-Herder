import React, { Component } from "react";
import { Container } from "reactstrap";

import Navigation from "../../Common/Navigation";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Navigation />
          <h1 className="container-subscription">Contact</h1>
        </Container>
      </div>
    );
  }
}

export default Contact;
