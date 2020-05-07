import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPinterest} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import './SocialIcons.css'

const SocialIcons=(props)=>{

    let size="";
    let klasa="";
    if(props.size==="large")
    {
        size="lg"
    }else{
        size="1x"
    }

    if(props.space==="small"){
        klasa="col-md-2"
    }else{
        klasa="col-md-auto"
    }


    return (
        <div className={klasa}>
            <a href="/"> <FontAwesomeIcon icon={faFacebook} size={size}/></a>
            <a href="/"> <FontAwesomeIcon icon={faInstagram} size={size}/></a>
            <a href="/"> <FontAwesomeIcon icon={faPinterest} size={size}/></a>
            <a href="/"> <FontAwesomeIcon icon={faYoutube} size={size}/></a>
            <a href="/"> <FontAwesomeIcon icon={faTwitter} size={size}/></a>
        </div>
    )
};


export default SocialIcons;
