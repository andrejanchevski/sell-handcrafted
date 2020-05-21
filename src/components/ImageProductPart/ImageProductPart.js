import React from "react";
import styles from './ImageProductPart.module.css'
import Rating from "../../UI/Rating/Rating";
import {connect} from "react-redux";

const ImageProductPart=(props)=>{

    if(props.photos.length!==0){
        //console.log(props.photos);
    }
    const smallPictures=props.photos.map((el,index)=>{
        return <img src={el} key={index} className="mt-2 img-fluid" style={{width:"100%",height:"80px"}} alt="small"/>
    });

    return (
        <div className="col-6">
            <div className="row">
                <div className="col-2 d-flex flex-column">
                    {smallPictures}
                </div>
                <div className="col-10">
                    <img src={props.photos[0]}  style={{height:"550px",width:"100%"}} className="mt-2 img-fluid" alt="primaryPhoto"/>
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


const mapStateToProps=(state)=>{
    return {
        photos:state.productReducer.photos,
        productRating:state.productReducer.productRating,
        productRatings:state.productReducer.productRatings
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ImageProductPart);