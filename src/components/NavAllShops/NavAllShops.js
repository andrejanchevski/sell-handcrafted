import React from "react";
import ListGroup from '../../UI/ListGroup/ListGroup'
import SearchSmallBar from "../../UI/SearchSmallBar/SearchSmallBar";


const NavAllShops=(props)=>{
    return (
        <div className="col-3">
            <h5 className="mb-4">Shop Categories</h5>
            <ListGroup items={props.categories}/>
            <div className="mt-4">
                <SearchSmallBar/>
            </div>
        </div>
    )
};


export default NavAllShops;