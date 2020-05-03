import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import styles from './ShortShopNav.module.css'


const ShortShopNav = (props)=>{
    return(
        <div className={styles.Content}>
            <img src="https://via.placeholder.com/100" alt=""/>
                <p className={styles.ParagraphType2}>More from</p>
                <h3><a href="/">{props.title}</a></h3>
                <p>See all items <FontAwesomeIcon icon={faArrowRight}/> </p>
                <div className="row mt-3">
                    <div className="col">
                        <p className={styles.ParagraphType1}>Sales</p>
                        <p className={styles.ParagraphType2}>{props.noSales}</p>
                    </div>
                    <div className="col">
                        <p className={styles.ParagraphType1}>On SellMe Since</p>
                        <p className={styles.ParagraphType2}>{props.since}</p>
                    </div>
                </div>
        </div>
    )
};

export default ShortShopNav;