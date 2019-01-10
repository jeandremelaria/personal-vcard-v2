import React from 'react';

const contactInfo = (props) => {
    return(
        <div>
            <li className="sidebar__info__item">
                <strong>Email</strong>
                <span>{props.email}</span>
            </li>
            <li className="sidebar__info__item">
                <strong>Phone</strong>
                <span>{props.phone}</span>
            </li>
            <li className="sidebar__info__item">
                <strong>Website</strong>
                <span>{props.website}</span>
            </li>
        </div>
    );
}

export default contactInfo;