import React,{Component} from "react";
import Aux from "react-aux";
import Carousel from '../../UI/Carousel/Carousel'
import CategoryColumns from "../../components/CategoryColumns/CategoryColumns";
import Opis from "../../components/Opis/Opis";
import ProductShopSD from "../../components/ProductsShopSD/ProductsShopSD";


class HomeBuilder extends Component{
    state={

    };

    componentDidMount() {

    }

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