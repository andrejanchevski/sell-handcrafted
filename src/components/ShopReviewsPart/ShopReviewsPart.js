import React from "react";
import Review from "../../UI/Review/Review";
import {connect} from "react-redux";


const ShopReviewsPart=(props)=>{

    const comments = props.shopReviews.map((el,index)=>{
        if(index===0){
            return <Review key={el.commentID} name={el.userName} commentar={el.text} show={true}/>
        }
        return <Review key={el.commentID} name={el.userName} commentar={el.text} show={false}/>
    });
    return(
        <div className="row mt-5">
            <div className="col-3">
                <h3>Reviews</h3>
            </div>
            <div className="col-9">
                {comments}
            </div>
        </div>
    )

};
const mapStateToProps=(state)=>{
    return {
        shopReviews:state.shopReducer.shopReviews
    }
}


export default connect(mapStateToProps)(ShopReviewsPart);