import React from "react";
import ShopProductDisplay from "../ShopProductDisplay/ShopProducDisplay";
import Aux from "react-aux";
import Select from "react-select";
import styles from './ProductsofShop.module.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const options=[
    {value:"LowestPrice",label:"LowestPrice"},
    {value:"HighestPrice",label:"HighestPrice"}
];

const ProductsOfShop=(props)=>{

    // let produkti=props.products.map((el)=>{
    //     return <ShopProductDisplay title={el.title} price={el.price} key={el.id} color={false}/>
    // });
    let produkti=[];
    if(props.products.length!==0){
        produkti=props.products.map(el=>{
            return <Link to={"/product/"+el.productId} key={el.productId}><ShopProductDisplay title={el.productName} price={el.price} key={el.productId} imageURL={el.imageURL} color={false}/></Link>
        })
    }
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

const mapStateToProps=state=>{
    return{
        products:state.shopReducer.products
    }
}

export default connect(mapStateToProps)(ProductsOfShop);