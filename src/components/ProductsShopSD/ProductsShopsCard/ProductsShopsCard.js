import React from "react";
import styles from './ProductsShopsCard.module.css'
import Button from "../../../UI/Button/Button";

const ProductsShopsCard = (props)=>{

    let niza=[];
    niza.push("col");
    niza.push(styles.Container);
    return(
        <div className={niza.join(" ")}>
            <div className="card w-auto">
                <img src="https://via.placeholder.com/350" className="card-img-top" alt=""/>
                <div className="card-body">
                    <p className="card-text">{props.shortText}</p>
                    <Button type={"dark"}>{props.btnText}</Button>
                </div>
             </div>
        </div>
    )
};


export default ProductsShopsCard;