import React from 'react';
import PropTypes from 'prop-types';

const sidebar = (props) => {
    console.log(props);
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <strong>Email</strong>
                    <span></span>
                </li>
            </ul>

        </div>
    );
}

export default sidebar;

