import React,{Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from '../../UI/Carousel/Carousel'
import CategoryColumns from "../../components/CategoryColumns/CategoryColumns";
import Opis from "../../components/Opis/Opis";
import ProductShopSD from "../../components/ProductsShopSD/ProductsShopSD";

class HomeBuilder extends Component{
    state={

    };

    render() {
        return(
            <Aux>
                <Carousel/>
                <CategoryColumns/>
                <Opis/>
                <ProductShopSD/>
            </Aux>
        )
    }
}


export default HomeBuilder;