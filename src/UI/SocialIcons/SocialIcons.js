import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPinterest} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import './SocialIcons.css'

const SocialIcons=(props)=>{
    return (
        <div className="col-md-auto">
            <a href="#"> <FontAwesomeIcon icon={faFacebook} size="lg"/></a>
            <a href="#"> <FontAwesomeIcon icon={faInstagram} size="lg"/></a>
            <a href="#"> <FontAwesomeIcon icon={faPinterest} size="lg"/></a>
            <a href="#"> <FontAwesomeIcon icon={faYoutube} size="lg"/></a>
            <a href="#"> <FontAwesomeIcon icon={faTwitter} size="lg"/></a>
        </div>
    )
};


export default SocialIcons;
