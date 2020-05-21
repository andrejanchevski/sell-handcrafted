import React from "react";
import styles from './ShopProductDisplay.module.css'
import PropTypes from 'prop-types'

const ShopProductDisplay = (props) =>{

    let niza=[];
    if(props.color){
        niza=["card-body",styles.AddCardBody]
    }else{
        niza=["card-body",styles.AddCardBody1]
    }
    //console.log(props.imageURL)


    return(
        <div className="col-auto">
            <div className={["card",styles.Content].join(" ")}>
                <img src={props.imageURL}   className="card-img-top img-fluid" alt="..."/>
                {/*<img src="https://via.placeholder.com/200" className="card-img-top" alt="..."/>*/}
                    <div className={niza.join(" ")}>
                        <div className={styles.subShopLarge}>{props.title}</div>
                        <div className={styles.subShopSmall}>${props.price}</div>
                    </div>
            </div>
        </div>
    )

};

ShopProductDisplay.propTypes = {
    title:PropTypes.string.isRequired,
    price:PropTypes.number,
};



export default ShopProductDisplay;