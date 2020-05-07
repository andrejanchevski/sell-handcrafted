import React from "react";
import Aux from "react-aux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import ListGroup from "../../UI/ListGroup/ListGroup";
const NavBigShopProducts = (props)=>{
    return(
        <Aux>
            <h4 className="mb-4">Items</h4>
            <form className="form-inline md-form form-sm">
                <button className="btn btn-light"><FontAwesomeIcon icon={faSearch}/></button>
                <input className="form-control form-control-sm w-75 " type="text" placeholder="Search items"
                       aria-label="Search"/>
            </form>
            <ListGroup categories={props.categories}/>
            <hr/>
            <p>{props.salesMade} Sales</p>
            <p>{props.shopItems} Items</p>
            <hr/>
            <a href="/">Edit Shop</a>
            <br/>
            <a href="/">Report shop</a>
        </Aux>
    )
};


export default NavBigShopProducts;