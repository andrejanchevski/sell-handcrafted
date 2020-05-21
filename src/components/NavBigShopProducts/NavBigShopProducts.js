import React from "react";
import Aux from "react-aux";
import ListGroup from "../../UI/ListGroup/ListGroup";
import SearchSmallBar from "../../UI/SearchSmallBar/SearchSmallBar";
import Button from "../../UI/Button/Button";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/generalActions'
import {withRouter} from "react-router-dom";

const NavBigShopProducts = (props)=>{
    const onAddProductHandler = (event)=>{
        event.preventDefault();
        //console.log(props.shopId)
        props.setShopIdForProductCreate(props.shopId)

        let chosenCategory=props.categoriesMain.filter((value)=>value.categoryId===props.shopCategoryId);
        props.history.push("/create-product/"+chosenCategory[0].categoryName+"?shopName="+props.shopName);
        // console.log(props.shopCategoryId)
        // console.log(props.categoriesMain)
    }


    return(
        <Aux>
            <h4 className="mb-4">Items</h4>
            <SearchSmallBar/>
            <ListGroup items={props.categories}/>
            <hr/>
            <p> Sales</p>
            <p>Items</p>
            <Button type="dark" clicked={onAddProductHandler}>Add product</Button>
            <hr/>
            <a href="/">Edit Shop</a>
            <br/>
            <a href="/">Report shop</a>
        </Aux>
    )
};
const mapStateToProps=(state)=>{
    return {
        shopId: state.shopReducer.shopId,
        shopName:state.shopReducer.shopName,
        shopCategoryId: state.shopReducer.shopCategoryId,
        categoriesMain: state.categoryReducer.categories
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setShopIdForProductCreate:(shopId)=>dispatch(actions.setForWhichShopId(shopId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NavBigShopProducts));