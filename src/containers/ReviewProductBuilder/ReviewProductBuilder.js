import React from "react";
import Review from "../../UI/Review/Review";
import classes from './ReviewProductBuilder.module.css'
// import InsertReviewForm from "./InsertReviewForm/InsertReviewForm";
import {connect} from 'react-redux'

const ReviewProductBuilder=(props)=>{


     const komentari =props.productReviews.map((el)=>{
         return <Review key={el.commentID} name={el.userName} commentar={el.text} show={true}/>
    });

    return (
        <div className={["col-6",classes.Content].join(" ")}>
            {komentari}
            {/*<InsertReviewForm/>*/}
        </div>
    )


};

const mapStateToProps=(state)=>{
    return {
        productReviews:state.productReducer.productReviews
    }
}

export default connect(mapStateToProps)(ReviewProductBuilder);