import React,{Component} from "react";
import Aux from "react-aux";
// import Breadcrumb from "../../UI/BreadCrumbs/BreadCrumbs";
import ShortShop from "../ShortShop/ShortShop";
import classes from './ProductBuilder.module.css'
import ImageProductPart from "../../components/ImageProductPart/ImageProductPart";
import BuyProductPart from "../../components/BuyProductPart/BuyProductPart";
import AuthContext from "../../context/auth-context";
import ReviewProductBuilder from "../ReviewProductBuilder/ReviewProductBuilder";
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import * as actions from '../../store/actions/generalActions'

class ProductBuilder extends Component{

    componentDidMount() {
        this.props.getProductById(this.props.match.url.split("/")[2]);
    }
    state={
        materials:["silk","cotton"],
       shop:{
            shopID:223232323,
            shopName:"CustomVintageShop",
            products:[],
            shopRating:4.5,
            shopReviews:234
       },
       productReviews:[
           {commentID:222,userId:223323,userName:"Andrej_23",text:"Something something something sajoajsdoasjdao ajsdoasjdoiajsdoiaj aoijdoiajsiodjoasjdoisajd"},
           {commentID:223,userId:223211,userName:"Andrej_44",text:"Something something something aijsdoiasjdioasjdoias joiajdaois joaisj daoisjdoijasdiojasoij "},
           {commentID:224,userId:223323,userName:"Andrej_13",text:"Something something something daijdaiosdjiaosjd oij doijaoijsoiasjdoiasjd o jdoiajsiojdaiosjda"},
           {commentID:225,userId:223323,userName:"Andrej_87",text:"Something something something asdjasiodjoiasjdosaij andrej andrej oliver dvaeset id va"}
       ]
    };
    render() {
        return(
            <Aux>
                {/*<Breadcrumb/>*/}
                <div className={classes.Background}>
                    <div className="row">
                        <ImageProductPart/>
                        <AuthContext.Provider value={{materials: this.state.materials,longDescription: this.state.longDesc,productItems: this.state.productItems}}>
                            <BuyProductPart
                                shopRating={this.state.shop.shopRating}
                                shopRatings={this.state.shop.shopReviews}
                                shortDesc={this.state.shortDesc}
                                shopTitle={this.state.shop.shopName}
                            />
                        </AuthContext.Provider>
                        <ReviewProductBuilder productReviews={this.state.productReviews}/>
                    </div>
                </div>
                <ShortShop/>
            </Aux>
        );
    }
}

const mapStateToProps=(state)=>{
    return {

    }

};

const mapDispatchToProps=(dispatch)=>{
    return {
        getProductById:(productId)=>dispatch(actions.getProductById(productId))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProductBuilder));