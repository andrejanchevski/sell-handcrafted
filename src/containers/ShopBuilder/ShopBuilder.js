import React,{Component} from "react";
import classes from './ShopBuilder.module.css'
import ShopIntroduction from "../../components/ShopIntroduction/ShopIntroduction";
import ProductsOfShop from "../../components/ProductsOfShop/ProductsOfShop";
import NavBigShopProducts from "../../components/NavBigShopProducts/NavBigShopProducts";
import AuthContext from "../../context/auth-context";
import ShopReviewsPart from "../../components/ShopReviewsPart/ShopReviewsPart";
import ShopPolicies from "../../components/ShopPolicies/ShopPolicies";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/generalActions'
import Pagination from '../../UI/Pagination/Pagination'
import {withRouter} from "react-router-dom";

class ShopBuilder extends Component{

    state={
        categories:["Clothing","Man","Hoodies"],
    };

    componentDidMount() {
        let nizaTemp=this.props.match.url.split("/")
        let toSend=nizaTemp[nizaTemp.length-1]
       this.props.getShopById(toSend);
    }


    render() {
        const onSelectSortHandler=(selectedItem)=>{
            //console.log(selectedItem)
        };
        const onPageChange=(event)=>{
            let nizaTemp=this.props.match.url.split("/");
            let toSend=nizaTemp[nizaTemp.length-1]
            let page=parseInt(event.target.textContent)
            page=page-1;
            this.props.getShopProductsByPage(toSend,page);
        }
        return(
            <div className={classes.Container}>
                <ShopIntroduction/>
                <div className="row mt-5">
                    <div className="col-3">
                        <AuthContext.Provider value={{categories: this.state.categories}}>
                            <NavBigShopProducts categories={this.state.categories} salesMade={this.state.salesMade}/>
                        </AuthContext.Provider>
                    </div>
                    <div className="col-9">
                        <ProductsOfShop onSelect={onSelectSortHandler}/>
                        <Pagination clicked={onPageChange} pages={this.props.totalPages}/>
                    </div>
                </div>
                <hr/>
                <ShopReviewsPart/>
                <hr/>
                <ShopPolicies/>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
    return {
        totalPages:state.shopReducer.totalPages
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getShopById:(shopId)=>dispatch(actions.getShopById(shopId)),
        getShopProductsByPage:(shopId,page)=>dispatch(actions.getShopProductsByPage(shopId,page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ShopBuilder));