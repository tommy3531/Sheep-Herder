import React, {Component} from 'react';
import { Container } from "reactstrap";

import Navigation from '../../Common/Navigation';
import Header from '../../Common/Header';


class Layout extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Navigation />
                    <Header />
                </Container>
            </div>

        );
    }      
}

export default Layout