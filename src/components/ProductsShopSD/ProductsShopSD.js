import React from "react";
import ProductsShopsCard from "./ProductsShopsCard/ProductsShopsCard";
import Products from './products.png'
import Shops from './shops.jpg'

const ProductShopSD = (props)=>{

    return (
        <div className="container mt-5">
            <div className="row">
                <ProductsShopsCard productsPic={Products} shortText="You can stroll around various product as long as you want. Help Yourself" btnText="Check out products" id="products"/>
                <ProductsShopsCard shopsPic={Shops} shortText="Our community offers you a wide range of shops where u can choose any product you want! Choose your shop."  id="shops" btnText="Check out shops"/>
            </div>

        </div>
    );


};

export default ProductShopSD;