import React, {Component} from 'react';
import Navigation from '../../Common/Navigation';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation title='Landing' />
                <Button color="danger">Danger!</Button>
            </div>
        )
    }      
}

export default Landing