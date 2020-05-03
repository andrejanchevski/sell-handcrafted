import React from "react";
import Review from "../../UI/Review/Review";
import classes from './ReviewProductBuilder.module.css'
import InsertReviewForm from "./InsertReviewForm/InsertReviewForm";

const ReviewProductBuilder=(props)=>{

    let nizaReviews=[...props.productReviews];

     const komentari = nizaReviews.map((el)=>{
         return <Review key={el.commentID} name={el.userName} commentar={el.text} show={true}/>
    });


    return (
        <div className={["col-6",classes.Content].join(" ")}>
            {komentari}
            <InsertReviewForm/>
        </div>
    )


};

export default ReviewProductBuilder;