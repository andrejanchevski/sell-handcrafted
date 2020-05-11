import React from "react";
import {NavLink,withRouter} from 'react-router-dom'

const CategoryListItem=(props)=>{

    return(
        <li><NavLink to={props.location.pathname+"/"+props.catName+"?id="+props.id}> {props.catName}</NavLink></li>
    )
};

export default withRouter(CategoryListItem)