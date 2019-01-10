import React from 'react';
import { Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';

const header = (props) => {
    const logo = props.logo;
    
    return(
        <header>
            <Row>
                {/* Logo */}
                <Col s={8}>
                    <img className="header__logo" src={require("../Assets/images/logo/" + logo)} alt="Logo" />
                </Col>

                {/* Menu icon */}
                <Col s={4}>
                    <i className="header__menu material-icons">menu</i>
                </Col>
            </Row>
        </header>
    );
}

export default header;

// Check proptypes
header.propTypes = {
    logo:PropTypes.string.isRequired
}