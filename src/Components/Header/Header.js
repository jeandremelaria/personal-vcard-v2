import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';

const Header = () => {
    return(
        <header>
            <Row>
                <Col>logo</Col>
                <Col>menu</Col>
            </Row>
        </header>
    );
}

export default Header;