import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import PropTypes from 'prop-types';

const header = (props) => {
    // console.log(props);
    // console.log('test');
    return(
        <header>
            <Row>
                <Col>
                    <img src='../Assets/images/logo/logo.png'  alt='Logo'/>
                
                </Col>
                <Col>menu</Col>
            </Row>
        </header>
    );
}

export default header;