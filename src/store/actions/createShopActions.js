import * as actionTypes from './actionTypes'
import axios from '../../custom-axios/axios'
import {closeRegisterModal} from "./registerModalActions";

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

export const createShop=(shop)=>{
    return dispatch=>{
        axios.post("/api/shops/create",shop,{
            headers:{
                'Content-Type':"application/json",
                'userId':'2f4d8412-17a4-4290-aa6f-92034f5d8488'
            }
        }).then(resp=>{
            console.log(resp)
        }).catch(err=>{
            console.log(err)
        })
    }
}