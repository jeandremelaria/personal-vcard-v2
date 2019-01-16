import React from 'react';

const socialmediaInfo = (props) => {
    return(
        <ul className="socialMedia">
            <li><strong className="findMeOn">Find Me On</strong></li>
            <li className="socialMedia__icon">
                <a href={"https://" + props.facebook} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                </a>
            </li>
            <li className="socialMedia__icon">
                <a href={"https://" + props.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="socialMedia__icon">
                <a href={"https://" + props.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="socialMedia__icon">
                <a href={"https://" + props.dribbble} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-dribbble"></i>
                </a>
            </li>
        </ul>
    );
}

export default socialmediaInfo;