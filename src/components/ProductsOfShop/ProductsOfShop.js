import React from "react";
import ShopProductDisplay from "../ShopProductDisplay/ShopProducDisplay";
import Aux from "../../hoc/Aux/Aux";
import Select from "react-select";
import styles from './ProductsofShop.module.css'

const options=[
    {value:"LowestPrice",label:"LowestPrice"},
    {value:"HighestPrice",label:"HighestPrice"}
];

const ProductsOfShop=(props)=>{

    let produkti=props.products.map((el)=>{
        return <ShopProductDisplay title={el.title} price={el.price} key={el.id} color={false}/>
    });
    return(
        <Aux>
            <div className={styles.SelectWidth}>
                <Select
                    value={props.selectedOption}
                    onChange={props.onSelect}
                    options={options}
                />
            </div>
            <div className="row mt-3">
                {produkti}
            </div>
        </Aux>

    )

};


export default ProductsOfShop