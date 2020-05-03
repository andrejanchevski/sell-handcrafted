import * as actionTypes from './actionTypes'

export const addShopName=(shopName)=>{
    return{
        type:actionTypes.SHOP_NAME_ENTERED,
        shopName:shopName
    };
};


export const addShopDesc=(shopDesc)=>{
    return{
        type:actionTypes.SHOP_SHORT_DESC_ENTERED,
        shopDesc:shopDesc
    };
};

export const addShopCategory=(shopCategory)=>{
    return{
        type:actionTypes.SHOP_CATEGORY_SELECTED,
        shopCategory:shopCategory
    };
};

export const addShopUTN=(shopUTN)=>{
    return{
        type:actionTypes.SHOP_UTN_ADDED,
        shopUTN:shopUTN
    }
};

export const addShopBA=(shopBA)=>{
    return{
        type:actionTypes.SHOP_BA_ADDED,
        shopBA:shopBA
    }
};

export const addShopProfilePicture=(profilePicture)=>{
    return{
        type:actionTypes.SHOP_PROFILE_PICTURE_ADDED,
        shopProfilePicture:profilePicture
    }
};

export const addShopCoverPhoto=(coverPhoto)=>{
    return{
        type:actionTypes.SHOP_PROFILE_PICTURE_ADDED,
        shopCoverPhoto:coverPhoto
    }
};