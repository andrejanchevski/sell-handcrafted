import * as actionTypes from './actionTypes'
import axios from '../../custom-axios/axios'


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

export const sentShopPhotos=(shopImages,shopId,history)=>{
    return dispatch=>{
        axios.post('api/Images/shop?userId=f8cb6375-e443-43a1-a526-e5796fc186c5',
            shopImages,{
                headers: {'shopId' :shopId}
            })
            .then(res => {
               // console.log(res)
                history.push("/shop/"+shopId)

            });
    }
};

export const addShopCoverPhoto=(coverPhoto)=>{
    return{
        type:actionTypes.SHOP_PROFILE_PICTURE_ADDED,
        shopCoverPhoto:coverPhoto
    }
};

export const createShop=(shop,formData,history)=>{
    return dispatch=>{
        axios.post("/api/shops/create",shop,{
            headers:{
                'Content-Type':"application/json",
                'userId':'f8cb6375-e443-43a1-a526-e5796fc186c5'
            }
        }).then(resp=>{
            dispatch(sentShopPhotos(formData,resp.data,history))
        }).catch(err=>{
            console.log(err)
        })
    }
};