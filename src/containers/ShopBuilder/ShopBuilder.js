import React,{Component} from "react";
import classes from './ShopBuilder.module.css'
import ShopIntroduction from "../../components/ShopIntroduction/ShopIntroduction";
import ProductsOfShop from "../../components/ProductsOfShop/ProductsOfShop";
import NavBigShopProducts from "../../components/NavBigShopProducts/NavBigShopProducts";
import AuthContext from "../../context/auth-context";
import ShopReviewsPart from "../../components/ShopReviewsPart/ShopReviewsPart";
import ShopPolicies from "../../components/ShopPolicies/ShopPolicies";

class ShopBuilder extends Component{


    state={
        name:"CustomVintageShop",
        shopRating:4.5,
        shopReviews: 413,
        yearJoined:2018,
        salesMade:56,
        shopOwner:"Mario Mitrevski",
        products:[
            {
                id:234554,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:2345334,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:24,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:31312,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:2312312,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:87644,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:124633,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
            {
                id:94444,
                title:"EngravedWatch with Two Fiber Inch",
                price:35
            },
        ],
        categories:["Clothing","Man","Hoodies"],
        shopCommentars:[
            {commentID:222,userId:223323,userName:"Andrej_23",text:"Something something something sajoajsdoasjdao ajsdoasjdoiajsdoiaj aoijdoiajsiodjoasjdoisajd"},
            {commentID:223,userId:223211,userName:"Andrej_44",text:"Something something something aijsdoiasjdioasjdoias joiajdaois joaisj daoisjdoijasdiojasoij "},
            {commentID:224,userId:223323,userName:"Andrej_13",text:"Something something something daijdaiosdjiaosjd oij doijaoijsoiasjdoiasjd o jdoiajsiojdaiosjda"},
            {commentID:225,userId:223323,userName:"Andrej_87",text:"Something something something asdjasiodjoiasjdosaij andrej andrej oliver dvaeset id va"}
        ]

    };



    render() {
        const onSelectSortHandler=(selectedItem)=>{
            console.log(selectedItem)
        };
        let counter=this.state.products.length;
        return(
            <div className={classes.Container}>
                <ShopIntroduction shopRating={this.state.shopRating} shopRatings={this.state.shopReviews} storeName={this.state.name} year={this.state.yearJoined} salesNo={this.state.salesMade} shopOwner={this.state.shopOwner}/>
                <div className="row mt-5">
                    <div className="col-2">
                        <AuthContext.Provider value={{categories: this.state.categories}}>
                            <NavBigShopProducts categories={this.state.categories} salesMade={this.state.salesMade} shopItems={counter}/>
                        </AuthContext.Provider>

                    </div>
                    <div className="col-10">
                        <ProductsOfShop products={this.state.products} onSelect={onSelectSortHandler}/>
                    </div>
                </div>
                <hr/>
                <ShopReviewsPart reviews={this.state.shopCommentars}/>
                <hr/>
                <ShopPolicies/>




            </div>
        );
    }

}


export default ShopBuilder;