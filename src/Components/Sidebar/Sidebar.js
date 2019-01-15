import React from 'react';
import ContactInfo from './contactInfo/ContactInfo';
import SocialmediaInfo from './socialmediaInfo/socialmediaInfo';
import PropTypes from 'prop-types';

const sidebar = (props) => {
    const user = props;
    // console.log(props);
    return (
        <div className="sidebar">
            <div className="sidebar__information">
                 {/* Contact information */}
                <ContactInfo email={user.email} phone={user.phone} website={user.website} />

                {/* Socialmedia information */}
                <SocialmediaInfo facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} dribbble={user.dribbble}/>
            </div>
        </div>
    );
}

export default sidebar;

// Check proptypes
sidebar.propTypes = {
    email:PropTypes.string.isRequired,
    phone:PropTypes.number.isRequired,
    website:PropTypes.string.isRequired,
    facebook:PropTypes.string.isRequired,
    instagram:PropTypes.string.isRequired,
    twitter:PropTypes.string.isRequired,
    dribbble:PropTypes.string.isRequired
}