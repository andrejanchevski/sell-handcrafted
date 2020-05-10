import React,{useState} from "react";

import styles from './SmallList.module.css'

const SmallList=(props)=>{
    const stateHere=useState({
        categories:["Man","Woman","Dresses","Sunglasses"]
    });

    let kategorii=stateHere[0].categories.map((el,index)=>{
        return <li className="pb-2" key={index}><a href="/">{el}</a></li>

    });
    return (


        <div className="col">
            <ol className={styles.Lista}>
                <p>{props.title}</p>
                {kategorii}
            </ol>
        </div>

    )
}

export default SmallList