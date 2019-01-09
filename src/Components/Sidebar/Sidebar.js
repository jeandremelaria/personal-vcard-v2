import React from 'react';
import PropTypes from 'prop-types';

const sidebar = (props) => {
    const user = props;
    console.log(props);
    return (
        <div className="sidebar">
            <ul className="sidebar__info">
                <li className="sidebar__info__item">
                    <strong>Email</strong>
                    <span>{user.email}</span>
                </li>
                <li className="sidebar__info__item">
                    <strong>Phone</strong>
                    <span>{user.phone}</span>
                </li>
                <li className="sidebar__info__item">
                    <strong>Website</strong>
                    <span>{user.website}</span>
                </li>
                <li className="sidebar__info__item">
                    <strong>Find Me On</strong>
                    <ul className="socialMedia">
                        <li className="socialMedia__icon">
                            <a href={"https://" + user.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="socialMedia__icon">
                            <a href={"https://" + user.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="socialMedia__icon">
                            <a href={"https://" + user.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="socialMedia__icon">
                            <a href={"https://" + user.dribbble} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default sidebar;

// Check proptypes
sidebar.PropTypes = {
    email:PropTypes.string.isRequired,
    phone:PropTypes.number.isRequired,
    website:PropTypes.string.isRequired,
    facebook:PropTypes.string.isRequired,
    instagram:PropTypes.string.isRequired,
    twitter:PropTypes.string.isRequired,
    dribbble:PropTypes.string.isRequired
}