import React from "react";
import styles from './ProductsShopsCard.module.css'
import Button from "../../../UI/Button/Button";
import {withRouter} from "react-router-dom";

const ProductsShopsCard = (props)=>{

    let niza=[];
    niza.push("col");
    let slika;
    let kopce;
    const showProductsHandler=(event)=>{
        event.preventDefault();
        props.history.push("/categories/All")
    };
    const showShopsHandler=(event)=>{
        event.preventDefault();
        props.history.push("/shops")
    };

    niza.push(styles.Container);
    if(props.id==="products"){
        slika=props.productsPic;
        kopce=<Button type={"dark"}  clicked={showProductsHandler}>{props.btnText}</Button>

    }else {
        slika=props.shopsPic;
        kopce=<Button type={"dark"} clicked={showShopsHandler} >{props.btnText}</Button>
    }
    return(
        <div className={niza.join(" ")}>
            <div className="card w-auto">
                <img src={slika} className="card-img-top" alt=""/>
                <div className="card-body">
                    <p className="card-text">{props.shortText}</p>
                    {kopce}
                </div>
             </div>
        </div>
    )
};


export default withRouter(ProductsShopsCard);