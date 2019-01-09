import React from 'react';
import { Row, Col } from 'react-materialize';


const homeContent = (props) => {
    const user = props;
    console.log(user);
    return (
        <Row>
            <Col s={12}>
                <img className="profilePhoto" src={require("./../../../Assets/images/profile_photo/" + user.profilePhoto)} alt={user.firstname + "Profile picture"} />  
            </Col>
            <Col s={12}>
                <ul className="user">
                    <li>
                        <span className="user__firstname">{user.firstname}</span>
                        <span className="user__lastname">{user.lastname}</span>
                    </li>
                    <li className="user__profileTitle">{user.profileTitle}</li>
                    <li className="user__profileSummary">{user.profileSummary}</li>
                    <ul>
                        <li className="btn">
                            <button className="btn__portfolio">Portfolio</button>
                        </li>
                        <li className="btn">
                            <button className="btn__resume">Portfolio</button>
                        </li>
                    </ul>
                </ul>
            </Col>
        </Row>
    );
}

export default homeContent;