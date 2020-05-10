import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const SearchSmallBar=(props)=>{
    return(
        <form className="form-inline md-form form-sm">
            <button className="btn btn-light"><FontAwesomeIcon icon={faSearch}/></button>
            <input className="form-control form-control-sm w-75 " type="text" placeholder="Search items"
                   aria-label="Search"/>
        </form>
    )
};

export default SearchSmallBar;