import React,{Component} from "react";
import Aux from "react-aux";
import Carousel from '../../UI/Carousel/Carousel'
import CategoryColumns from "../../components/CategoryColumns/CategoryColumns";
import Description from "../../components/Description/Description";
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
                <Description/>
                <ProductShopSD/>
            </Aux>
        )
    }
}


export default HomeBuilder;