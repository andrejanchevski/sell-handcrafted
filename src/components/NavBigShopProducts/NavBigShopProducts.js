import React from "react";
import Aux from "react-aux";
import ListGroup from "../../UI/ListGroup/ListGroup";
import SearchSmallBar from "../../UI/SearchSmallBar/SearchSmallBar";
const NavBigShopProducts = (props)=>{
    return(
        <Aux>
            <h4 className="mb-4">Items</h4>
            <SearchSmallBar/>
            <ListGroup items={props.categories}/>
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