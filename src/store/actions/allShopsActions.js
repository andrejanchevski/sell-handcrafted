import axios from "../../custom-axios/axios";
import * as actionTypes from '../actions/actionTypes'

export const setAllShops=(shops)=>{
    return {
        type:actionTypes.SET_ALL_SHOPS,
        shops:shops
    }
}
export const setShopsTotalPages=(totalPages)=>{
    return {
        type:actionTypes.SET_SHOPS_TOTAL_PAGES,
        totalPages:totalPages
    }
}
export const setShopsFromFilters=(shops,totalPages,page)=>{
    return {
        type:actionTypes.SET_SHOPS_FROM_FILTERS,
        shops:shops,
        totalPages:totalPages,
        page:page
    }
}

export const getShopsFromFilters=(page)=>{
    return dispatch=>{
        let pageNew=page-1
        axios.get("/api/shops/allShops?page="+pageNew).then(resp=>{
            dispatch(setShopsFromFilters(resp.data.content,resp.data.totalPages,resp.data.page))
            console.log(resp)
        })

    }
}

export const getAllShops=()=>{
    return dispatch=>{
        axios.get("/api/shops/allShops").then(resp=>{
            dispatch(setAllShops(resp.data.content))
            dispatch(setShopsTotalPages(resp.data.totalPages))
            //console.log(resp)
        })
    }
}
