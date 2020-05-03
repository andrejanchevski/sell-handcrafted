import React from "react";
import Zvezda from "./Zvezda/Zvezda";

const Rating =(props)=>{
    let niza=[];
    let n = (props.rating+"").split(".");
    for(let i=0;i<parseInt(n[0]);i++){
        niza.push(1)
    }
    if(parseInt(n[0])!==0){
        niza.push(0);
    }
    niza=niza.map((el,index)=>{
       if(el===1){
           return <Zvezda key={index} type="full" color={props.color}/>
       }else
       {
           return <Zvezda  key={index} type="half" color={props.color}/>
       }
    });

    let poslednaStavka=null;
    if(props.show){
        poslednaStavka= <li className="list-inline-item"><p className="text-muted">{props.rating} ({props.ratings})</p></li>
    }

    return(
        <ul className="list-unstyled list-inline m-0">
            {niza}
            {poslednaStavka}
        </ul>
    )
};


export default Rating;
