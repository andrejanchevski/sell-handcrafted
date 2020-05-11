import React,{Component} from "react";
import classes from './ListProductsBuilder.module.css'
import ProductMainFilter from "../../components/ProductMainFilter/ProductsMainFilter";
import {withRouter} from "react-router-dom";
import AllProducts from "../../components/AllProducts/AllProducts";

class ListProductsBuilder extends Component{

    componentDidMount() {
        //console.log("glavna")
    }

    render() {
        let niza=[classes.Background,"mt-4"];


        return <div className={niza.join(" ")}>
            <div className="row">
                <div className="col-3">
                    <ProductMainFilter/>
                </div>
                <div className="col-9">
                    <AllProducts/>
                </div>

            </div>

        </div>
    }
}

export default withRouter(ListProductsBuilder);