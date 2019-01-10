import React from 'react';

const contactInfo = (props) => {
    return(
        <ul>
            <li className="sidebar__info__item">
                <strong>Email</strong>
                <span>{props.email}</span>
            </li>
            <li className="sidebar__info__item">
                <strong>Phone</strong>
                <span> (+) {props.phone}</span>
            </li>
            <li className="sidebar__info__item">
                <strong>Website</strong>
                <span>{props.website}</span>
            </li>
        </ul>
    );
}

export default contactInfo;