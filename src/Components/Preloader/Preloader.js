import React, { Component } from 'react';
import { Row , Col } from 'react-materialize';
import TweenMax from 'gsap';

class Preloader extends Component {

    componentDidMount() {
        TweenMax.staggerFrom('.preloader__circle', 2, { scale:-1.2, repeat:-1 }, 0.5);
    }
    render (){
        return(
            <Row className = 'preloader'>
                <Col s={1} className = 'preloader__circle preloader__circle--purple circle_1'></Col>
                <Col s={1} className = 'preloader__circle preloader__circle--white circle_2' ></Col>
                <Col s={1} className = 'preloader__circle preloader__circle--purple circle_3'></Col>
            </Row>
        );
    }
}

export default Preloader;