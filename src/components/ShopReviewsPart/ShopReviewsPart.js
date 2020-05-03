import React from "react";
import Review from "../../UI/Review/Review";


const ShopReviewsPart=(props)=>{

    const komentari = props.reviews.map((el,index)=>{
        if(index===0){
            return <Review key={el.commentID} name={el.userName} commentar={el.text} show={true}/>
        }
        return <Review key={el.commentID} name={el.userName} commentar={el.text} show={false}/>


    });
    return(
        <div className="row mt-5">
            <div className="col-3">
                <h3>Review</h3>
            </div>
            <div className="col-9">
                {komentari}
            </div>
        </div>
    )

};

export default ShopReviewsPart;