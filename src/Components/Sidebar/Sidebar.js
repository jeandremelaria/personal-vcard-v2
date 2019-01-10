import React from 'react';
// import ContactInfo from './contactInfo/ContactInfo';
// import SocialmediaInfo from './socialmediaInfo/socialmediaInfo';
import PropTypes from 'prop-types';

const sidebar = (props) => {
    const user = props;
    // console.log(props);
    return (
        <div className="sidebar green">
           <p>sidebar</p>
        </div>
        // <div className="sidebar">
        //     <ul className="sidebar__info purple">
        //         <li>
        //             <ContactInfo email={user.email} phone={user.phone} website={user.website} />
        //         </li>

        //         <li className="sidebar__info__item">
        //             <SocialmediaInfo facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} dribbble={user.dribbble}/>
        //         </li>
        //     </ul>
        // </div>
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