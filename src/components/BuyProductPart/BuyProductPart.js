import React from "react";
import styles from './BuyProductPart.module.css'
import Rating from "../../UI/Rating/Rating";
import SelectPart from "./SelectPart/SelectPart";
import TextToogle from "../../UI/TextToogle/TextToogle";
import {connect} from 'react-redux'

const BuyProductPart=(props)=>{

    return(
        <div className={["col-6",styles.Content].join(" ")}>
                <div className="row mt-2">
                    <div className="col-7 ">
                        <a href="/" className={["mr-2",styles.ShopLink].join(" ")}>{props.shopTitle}</a>
                    </div>
                    <div className="col">
                        <Rating show rating={props.shopRating} ratings={props.shopRatings} color="yellow"/>
                    </div>
                </div>
                <hr/>
                    <h3 className="mt-2">{props.productName}</h3>
                    <h3 className="mt-3">${props.priceForShow}</h3>
                    {/*<p className={styles.ShortDescription}>{props.shortDesc}</p>*/}
                    <SelectPart/>
                    <TextToogle title="Description"/>
                    <TextToogle title="Materials"/>
                    <div className="row mt-3">
                        <div className="col">
                            <p className={styles.ParagraphType1}>Ready to ship in</p>
                            <p className={styles.ParagraphType2}>1-2 business days</p>
                        </div>
                        <div className="col">
                            <p className={styles.ParagraphType1}>From</p>
                            <p className={styles.ParagraphType2}>Macedonia</p>
                        </div>
                        <div className="col">
                            <p className={styles.ParagraphType1}>Cost to ship</p>
                            <p className={styles.ParagraphType2}>100 DEN</p>
                        </div>
                    </div>
                    <div>
                        <p className="shipSmallT">Meet your seller</p>
                        <div className="row">
                            <div className="col-auto">
                                <img src="https://via.placeholder.com/70" className="mt-1 rounded-circle" alt=""/>
                            </div>
                            <div className="col">
                                <p className={styles.ParagraphType1}>Mario Mitrevski</p>
                                <p className={styles.ParagraphType2}>Owner of <a href="/">{props.title}</a></p>
                            </div>
                        </div>
                    </div>

        </div>
    )
};

const mapStateToProps=(state)=>{
    return {
        productName:state.productReducer.productName,
        productPrice:state.productReducer.price,
        priceForShow: state.productReducer.priceForShow
    }
};

const mapDispatchToProps=(dispatc)=>{
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BuyProductPart);