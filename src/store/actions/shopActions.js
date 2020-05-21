import * as actionTypes from '../actions/actionTypes'
import axios from '../../custom-axios/axios'

export const setShop=(shop)=>{
    return {
        type:actionTypes.SET_UP_SHOP,
        shop:shop
    }
}

export const setNewProducts=(products)=>{
    return {
        type:actionTypes.SET_NEW_PRODUCTS,
        products:products
    }
}

export const getShopById=(shopId)=>{
    return dispatch=>{
        axios.get("/api/shops/"+shopId).then((resp)=>{
            console.log(resp)
            dispatch(setShop(resp.data))
        })
    }
}

export const getShopProductsByPage=(shopId,page)=>{
    return dispatch=>{
        axios.get("/api/products/shop/"+shopId+"?page="+page).then(resp=>{
            dispatch(setNewProducts(resp.data.content))
            //console.log(resp)
        })
    }
}