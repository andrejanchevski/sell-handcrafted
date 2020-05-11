import React from "react";
import Button from "../../UI/Button/Button";
import Rating from "../../UI/Rating/Rating";


const ShopListDisplay=(props)=>{
    return(
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-auto">
                        <img src="https://via.placeholder.com/170" alt=""/>
                    </div>
                    <div className="col">
                        <h4>{props.name}</h4>
                        <p>{props.desc}</p>
                        <br/>
                        <h5>{props.shopCategory}</h5>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <Rating color="yellow" rating={props.shopRating} ratings={props.shopRatings} show/>
                            <Button type="dark" customPush="lg">View Shop</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default ShopListDisplay;
