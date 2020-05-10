import React from "react";
import {NavLink,withRouter} from 'react-router-dom'

const CategoryListItem=(props)=>{

    return(
        <li><NavLink to="/categories/Clothing&Shoes"> {props.catName}</NavLink></li>
    )
};

export default withRouter(CategoryListItem)