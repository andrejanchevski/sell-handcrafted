import React from "react";
import Rating from "../../UI/Rating/Rating";
import styles from './ShopIntroduction.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'


const ShopIntroduction=(props)=>{
    let shopDate;
    if(props.shopCreatedDate!==""){
        shopDate=props.shopCreatedDate.split("T")
        shopDate=shopDate[0].split("-");
        shopDate=shopDate[0];
    }
    return(
        <div className="row mt-5">
            <div className="col-auto">
                <img src={props.shopPhoto}  style={{height:"150px",width:"150px"}} className="img-fluid" alt="primaryPhoto"/>
            </div>
            <div className="col-auto">
                <h2>{props.shopName}</h2>
                <p>{props.shopDescription}</p>
                <p className={styles.Text1}>Sales | On SellMe Since {shopDate}</p>
                <Rating rating="0" show={true} ratings="0"/>
            </div>
            <div className="col">
                <div className="float-right">
                    <p className={styles.TextOwner1}>SHOP OWNER</p>
                    <img className="rounded-circle" src="https://via.placeholder.com/80" alt=""/>
                    <p className={styles.TextOwner1}/>
                    <p><FontAwesomeIcon icon={faEnvelope}/>Contact</p>
                </div>

            </div>

        </div>
    )
};
const mapStateToProps=state=>{
    return {
        shopName:state.shopReducer.shopName,
        shopPhoto:state.shopReducer.shopLogoImage,
        shopDescription:state.shopReducer.shopDescription,
        shopCreatedDate:state.shopReducer.createdDate
    }
}

export default connect(mapStateToProps)(ShopIntroduction);