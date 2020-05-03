import React from "react";
import ProductsShopsCard from "./ProductsShopsCard/ProductsShopsCard";


const ProductShopSD = (props)=>{

    return (
        <div className="container mt-5">
            <div className="row">
                <ProductsShopsCard shortText="You can stroll around various product as long as you want. Help Yourself" btnText="Check out products"/>
                <ProductsShopsCard shortText="Our community offers you a wide range of shops where u can choose any product you want! Choose your shop." btnText="Check out shops"/>
            </div>

        </div>
    );


};

export default ProductShopSD;