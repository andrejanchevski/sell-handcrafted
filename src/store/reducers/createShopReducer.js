import * as actionTypes from '../actions/actionTypes'

const initalState={
    shopName:"",
    shortDesc:"",
    mainCategory:"",
    shopUTN:"",
    shopBankAccountNumber:"",
    shopProfilePicture:"",
    shopCoverPhoto:""

};


const reducer=(state=initalState,action)=>{

    switch (action.type) {
        case actionTypes.SHOP_NAME_ENTERED:
            return {
                ...state,
                shopName:action.shopName
            };
        case actionTypes.SHOP_SHORT_DESC_ENTERED:
            return{
                ...state,
                shortDesc: action.shopDesc
            };
        case actionTypes.SHOP_CATEGORY_SELECTED:
            return{
                ...state,
                mainCategory: action.shopCategory
            };
        case actionTypes.SHOP_UTN_ADDED:
            return{
                ...state,
                shopUTN: action.shopUTN
            };
        case actionTypes.SHOP_BA_ADDED:
            return {
                ...state,
                shopBankAccountNumber: action.shopBA
            };
        case actionTypes.SHOP_PROFILE_PICTURE_ADDED:
            return{
                ...state,
                shopProfilePicture: action.shopProfilePicture
            };
        case actionTypes.SHOP_COVER_PHOTO_ADDED:
            return{
                ...state,
                shopCoverPhoto: action.shopCoverPhoto
            };
        default:
            return state

    }
};


export default reducer;