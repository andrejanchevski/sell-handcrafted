import React from "react";
import styles from './ImageProductPart.module.css'
import Rating from "../../UI/Rating/Rating";

const ImageProductPart=(props)=>{
    return (
        <div className="col-6">
            <div className="row">
                <div className="col-auto d-flex flex-column">
                    <img src="https://via.placeholder.com/80" className="mt-2" alt="..."/>
                    <img src="https://via.placeholder.com/80" className="mt-2" alt="..."/>
                    <img src="https://via.placeholder.com/80" className="mt-2" alt="..."/>
                    <img src="https://via.placeholder.com/80" className="mt-2" alt="..."/>
                </div>
                <div className="col-auto">
                    <img src="https://via.placeholder.com/420x650" className="mt-2" alt="..."/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-auto">
                    <p className={styles.ParagraphType1}>Product Rating</p>
                    <Rating show={false} rating={props.productRating} />
                </div>
                <div className="col">
                    <p className={styles.ParagraphType1}>Total Reviews</p>
                    <p className={styles.ParagraphType2}>{props.productRatings}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
};


export default ImageProductPart;