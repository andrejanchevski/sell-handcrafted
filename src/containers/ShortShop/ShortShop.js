import React,{Component} from "react";
import classes from './ShortShop.module.css'
import ShopProductDisplay from "../../components/ShopProductDisplay/ShopProducDisplay";
import ShortShopNav from "./ShortShopNav/ShortShopNav";




class ShortShop extends Component{

    state={
        items:[
            {name:"EngravedSomethingS Wallet",price:23},
            {name:"EngravedSomethingS Wallet",price:23},
            {name:"EngravedSomethingS Wallet",price:23},
            {name:"EngravedSomethingS Wallet",price:23},
            {name:"EngravedSomethingS Wallet",price:23},
            {name:"EngravedSomethingS Wallet",price:23},
        ],
        shop:{
            name:"CustomVintageShop",
            since:2015,
            noSales:223
        }
    };

    componentDidMount() {
    }
    render() {

        const items=this.state.items.map((el,index)=>{
            return <ShopProductDisplay title={el.name}  key={index} price={el.price} color={true}/>
        });

        return(
            <div className={["container-fluid",classes.Background].join(" ")}>
                <div className={classes.SubBackground}>
                   <div className="row pt-5">
                       <div className="col-4">
                           <ShortShopNav title={this.state.shop.name} since={this.state.shop.since} noSales={this.state.shop.noSales}/>
                       </div>
                       <div className="col-8">
                           <div className="row">
                               {items}
                           </div>

                       </div>

                   </div>
                </div>

            </div>
        )

    }
}


export default ShortShop;