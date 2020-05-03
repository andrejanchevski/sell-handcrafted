import React, {useState} from "react";
import './ProductDisplay.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Rating from "../../UI/Rating/Rating";
import PropTypes from 'prop-types'

const ProductDisplay=(props)=>{

    return (
        <div className="col-auto">
            <div className="card booking-card mt-3">
                <div className="view overlay">
                    <img className="card-img-top" src="https://via.placeholder.com/900x800" alt="ProduktSlika"/>
                </div>
                <div className="card-body">
                    <h4 className="card-title textFamily">
                        <a href="/">{props.title}</a>
                    </h4>
                    <Rating rating={props.rating} ratings={props.ratings} show={true} color="yellow"/>
                    <p className="mb-2">$ • {props.price}</p>
                    <p className="card-text size1">{props.shortDesc}</p>
                    <hr className="my-4"/>
                    <div className="row ">
                        <button className="btn btn-dark ml-2 mr-2" title="View More">
                            <FontAwesomeIcon icon={faExpand}/>
                        </button>
                        <button className="btn btn-dark  ml-2 mr-2" title="Favorites">
                            <FontAwesomeIcon icon={faHeart}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDisplay.propTypes = {
    title:PropTypes.string.isRequired,
    price:PropTypes.number,
    shortDesc:PropTypes.string,
    rating:PropTypes.number,
    ratings:PropTypes.number
}


export default ProductDisplay;


