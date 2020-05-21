import * as actionTypes from '../actions/actionTypes'
const initalState={
    shopId:"",
    shopName:"",
    shopLogoImage:"",
    shopDescription:"",
    shopCategoryId:"",
    createdDate:"",
    totalPages:0,
    currentPage:"",
    products:[],
    shopReviews: []
}

const reducer=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.SET_UP_SHOP:
            return {
                ...state,
                shopId: action.shop.shopId,
                shopName:action.shop.shopName,
                shopLogoImage:action.shop.shopLogoImage,
                shopDescription: action.shop.shopDescription,
                createdDate:action.shop.createdDate,
                shopCategoryId: action.shop.categoryId,
                //totalPages:action.shop.products.totalPages,
                totalPages: 2,
                currentPage: action.shop.products.page,
                products: action.shop.products.content
            }
        case actionTypes.SET_NEW_PRODUCTS:
            return{
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}

export default reducer;