import React from 'react';
import { NavLink } from 'react-router-dom';

const headerMenu = () =>{

    return (
        <ul className="header__menu">
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/portfolio">
                <li>Portfolio</li>
            </NavLink>
            <NavLink to="/resume">
                <li>Resume</li>
            </NavLink>
            <NavLink to="/contact">
                <li>Contact</li>
            </NavLink>
            <NavLink to="/login">
                <li>Login</li>
            </NavLink>
        </ul>
    );
}

export default headerMenu;