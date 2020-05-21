import React,{Component} from "react";
import Aux from "react-aux";
import Carousel from '../../UI/Carousel/Carousel'
import CategoryColumns from "../../components/CategoryColumns/CategoryColumns";
import Description from "../../components/Description/Description";
import ProductShopSD from "../../components/ProductsShopSD/ProductsShopSD";
import axios from '../../custom-axios/axios'

class HomeBuilder extends Component{
    state={

    };

    componentDidMount() {
        // axios.get("api/products/all").then((resp)=>{
        //     console.log(resp)
        // }).catch(err=>{
        //     console.log(err)
        // })
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