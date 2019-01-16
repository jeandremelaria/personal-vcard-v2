import React from 'react';
import SocialmediaInfo from '../Sidebar/socialmediaInfo/socialmediaInfo';

const footer = (props) => {
    const user = props;

    return (
        <footer>
            {/* Socialmedia information */}
            <SocialmediaInfo facebook={user.facebook} instagram={user.instagram} twitter={user.twitter} dribbble={user.dribbble}/>

            {/* Contact information */}
            <ul>
                <li>{user.email}</li>
                <li>&nbsp;|&nbsp;</li>
                <li>(+) {user.phone}</li>
            </ul>
        </footer>
    
    );
}

export default footer;