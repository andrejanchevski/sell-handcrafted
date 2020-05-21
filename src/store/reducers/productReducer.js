import * as actionTypes from '../actions/actionTypes'
const initalState={
    photos:[],
    productRating:0,
    productRatings:0,
    productName:"",
    price:0,
    productReviews: [],
    productDescription:"",
    productItems:[],
    priceForShow:0

};


const reducer=(state=initalState,action)=>{

    switch (action.type) {
        case actionTypes.SET_UP_PRODUCT:
            return{
                ...state,
                photos:action.product.imagesUrls,
                productName:action.product.productName,
                productReviews: action.product.productReviews,
                productItems:action.product.productItems,
                price:action.product.price,
                productDescription: action.product.productDescription,
                priceForShow: action.product.price
            };
        case actionTypes.SET_UP_PRODUCT_PRICE:
            return{
                ...state,
                price:action.productPrice
            };
        case actionTypes.SET_UP_PRODUCT_PRICE_FOR_SHOW:
            return {
                ...state,
                priceForShow: action.productPriceForShow
            }
        default:
            return state

    }

};

export default reducer;