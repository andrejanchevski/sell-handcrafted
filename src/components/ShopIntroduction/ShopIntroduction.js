import React from "react";
import Rating from "../../UI/Rating/Rating";
import styles from './ShopIntroduction.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


const ShopIntroduction=(props)=>{
    return(
        <div className="row mt-5">
            <div className="col-auto">
                <img src="https://via.placeholder.com/150" alt=""/>
            </div>
            <div className="col-auto">
                <h2>{props.storeName}</h2>
                <p>Finest Vintage Items For Gifts</p>
                <p className={styles.Text1}>{props.salesNo} Sales | On SellMe Since {props.year}</p>
                <Rating rating={props.shopRating} show={true} ratings={props.shopRatings}/>
            </div>
            <div className="col">
                <div className="float-right">
                    <p className={styles.TextOwner1}>SHOP OWNER</p>
                    <img className="rounded-circle" src="https://via.placeholder.com/80" alt=""/>
                    <p className={styles.TextOwner1}>{props.shopOwner}</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/>Contact</p>
                </div>

            </div>

        </div>
    )
};

export default ShopIntroduction;