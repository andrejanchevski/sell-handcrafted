import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStarHalf} from "@fortawesome/free-solid-svg-icons";


const Zvezda = (props)=> {
    let proveri=props.type;
    let zvezda=null;
    if(proveri==="full"){
        zvezda=<FontAwesomeIcon icon={faStar} color={props.color}/>
    }else{
        zvezda=<FontAwesomeIcon icon={faStarHalf} color={props.color}/>
    }
    return(
        <li className="list-inline-item mr-0">
            {zvezda}
        </li>
    )

};

export default Zvezda;

