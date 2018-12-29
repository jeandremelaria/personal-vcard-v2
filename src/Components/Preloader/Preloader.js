import React, { Component } from 'react';
import { Row , Col } from 'react-materialize';

class Preloader extends Component {
    render (){
        return(
            <Row className = 'preloader'>
                <Col s={1} className = 'preloader__circle preloader__circle--purple'></Col>
                <Col s={1} className = 'preloader__circle preloader__circle--white'></Col>
                <Col s={1} className = 'preloader__circle preloader__circle--purple'></Col>
            </Row>
        );
    }
}

export default Preloader;