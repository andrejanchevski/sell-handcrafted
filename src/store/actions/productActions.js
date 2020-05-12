import axios from "../../custom-axios/axios";
import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions/generalActions'


export const setProduct=(product)=>{

    return {
        type: actionTypes.SET_UP_PRODUCT,
        product: product
    }
};

export const setProductPrice=(productPrice)=>{
    return{
        type:actionTypes.SET_UP_PRODUCT_PRICE,
        productPrice:productPrice
    }
};
export const getProductById=(productId)=>{

    return dispatch=>{
        axios.get("/api/products/"+productId).then((resp)=>{
            dispatch(setProduct(resp.data));
            dispatch(actions.addVariations(resp.data.productItems));
            console.log(resp)
        }).catch((err)=>{

        })
    }
};
