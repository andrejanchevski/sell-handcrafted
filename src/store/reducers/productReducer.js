import * as actionTypes from '../actions/actionTypes'
const initalState={
    photos:[],
    productRating:0,
    productRatings:0,
    productName:"",
    price:0,
    productReviews: [],
    productDescription:"",
    productItems:[]

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
            };
        case actionTypes.SET_UP_PRODUCT_PRICE:
            return{
                ...state,
                price:action.productPrice
            };
        default:
            return state

    }

};

export default reducer;