import React from 'react';

const headerMenu = () =>{

    return (
        <ul className="header__menu">
            <a href="#">
                <li>Home</li>
            </a>
            <a href="#">
                <li>Portfolio</li>
            </a>
            <a href="#">
                <li>Resume</li>
            </a>
            <a href="#">
                <li>Contact</li>
            </a>
            <a href="#">
                <li>Login</li> 
            </a>
        </ul>
    );
}

export default headerMenu;