import React,{Component} from "react";
import classes from './ListProductsBuilder.module.css'
import ProductMainFilter from "../../components/ProductMainFilter/ProductsMainFilter";
import {Link, withRouter} from "react-router-dom";

class ListProductsBuilder extends Component{

    componentDidMount() {
        console.log("mounted glavna")

    }

    render() {
        let niza=[classes.Background,"mt-4"];


        return <div className={niza.join(" ")}>
            <div className="row">
                <div className="col-3">
                    <ProductMainFilter/>
                </div>
                <div className="col-9">

                </div>

            </div>

        </div>
    }
}

export default withRouter(ListProductsBuilder);