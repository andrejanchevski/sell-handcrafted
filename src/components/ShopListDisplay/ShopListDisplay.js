import React from "react";
import Button from "../../UI/Button/Button";
import Rating from "../../UI/Rating/Rating";
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";


const ShopListDisplay=(props)=>{

    let kategorija=""
    if(props.categories.length!==0){
        kategorija=props.categories.filter(value=>value.categoryId===props.shopCategory)
        kategorija=kategorija[0].categoryName;
    }

    const openShop=(event)=>{
        event.preventDefault();
        props.history.push("/shop/"+props.shopId)

    }
    return(
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-auto">
                        <img src={props.shopImage}  style={{height:"100%",width:"170px"}} className="img-fluid" alt="primaryPhoto"/>
                    </div>
                    <div className="col">
                        <h4>{props.name}</h4>
                        <p>{props.desc}</p>
                        <br/>
                        <h5>{kategorija}</h5>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <Rating color="yellow" rating={props.shopRating} ratings={props.shopRatings} show/>
                            <Button type="dark" customPush="lg" clicked={openShop}>View Shop</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps=state=>{
    return {
        categories:state.categoryReducer.categories
    }
}

export default connect(mapStateToProps)(withRouter(ShopListDisplay));
