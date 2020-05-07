import React,{Component} from "react";
import Aux from "../../hoc/Aux/Aux";
import Carousel from '../../UI/Carousel/Carousel'
import CategoryColumns from "../../components/CategoryColumns/CategoryColumns";
import Opis from "../../components/Opis/Opis";
import ProductShopSD from "../../components/ProductsShopSD/ProductsShopSD";
import axios from 'axios'

class HomeBuilder extends Component{
    state={

    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/categories/all").then((resp)=>{
            console.log(resp.data)
        })
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