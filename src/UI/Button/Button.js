import React from "react";
import './Button.css'
import PropTypes from 'prop-types'

const Button = (props)=> {
    let niza=[];
    niza.push("btn");
    if(props.type==="light"){
        niza.push("btn-light")
    }else if(props.type==="dark"){
        niza.push("btn-dark")
    }else if(props.type==="outlineDark"){
        niza.push("btn-outline-dark")
    }
    if(props.size==="large"){
        niza.push("btn-lg")
    }else if(props.size==="block"){
        niza.push("btn-block")
    }
    if(props.customPush==="lg"){
        niza.push("pushDown")
    }
    if(props.push){
        niza.push("mt-5")
    }

   return (
       <button
           className={niza.join(' ')}
           type={props.use}
           disabled={props.disabled}
           onClick={props.clicked}
       >{props.children}</button>
   )


};
Button.propTypes = {
    type:PropTypes.string.isRequired
};
export default Button;