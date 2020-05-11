import React,{Component} from "react";
import NavAllShops from "../../components/NavAllShops/NavAllShops";
import AllShops from "../../components/AllShops/AllShops";
import styles from './ListShopsBuilder.module.css'
class ListShopsBuilder extends Component{


    state={
        categories:["Clothing&Shoes","Sport","Home"],
        shops:[
            {id:"22222233",shopName:"SportMyShop",category:"Sport",shopRating:3.8,shopRatings:223,shopDescription:"Let's go now together"},
            {id:"2233",shopName:"TogetherShop",category:"Accesories",shopRating:4.3,shopRatings:125,shopDescription:"askdaskdsadsadsadsajdjsad jasddsjkldjlkasjlkdljkaljkdas"},
            {id:"23321",shopName:"SportMyShop",category:"Sport",shopRating:3.8,shopRatings:223,shopDescription:"Let's go now together"},
            {id:"12121",shopName:"SportMyShop",category:"Sport",shopRating:3.8,shopRatings:223,shopDescription:"Let's go now together"},
            {id:"121",shopName:"SportMyShop",category:"Sport",shopRating:3.8,shopRatings:223,shopDescription:"Let's go now together"},
        ]
    };

    render() {
        let klasi=["container",styles.Content];
        return (
            <div className={klasi.join(" ")}>
                <div className="row">
                    <NavAllShops categories={this.state.categories}/>
                    <AllShops shops={this.state.shops}/>
                </div>
            </div>
        );
    }
}

export default ListShopsBuilder;