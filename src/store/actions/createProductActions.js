import * as actionTypes from './actionTypes'
import axios from '../../custom-axios/axios'

export const addProductName=(productName)=>{
    return {
        type:actionTypes.PRODUCT_NAME_ENTERED,
        productName:productName
    }
};

export const addPrimaryPhoto=(primaryPhoto)=>{
    return {
        type:actionTypes.PRIMARY_PHOTO_ADDED,
        primaryPhoto:primaryPhoto
    }
};

export const addLeftAngle=(leftAnglePhoto)=>{
    return {
        type:actionTypes.LEFT_ANGLE_ADDED,
        leftAnglePhoto:leftAnglePhoto
    }
};

export const addRightAngle=(rightAnglePhoto)=>{
    return {
        type:actionTypes.RIGHT_ANGLE_ADDED,
        rightAnglePhoto:rightAnglePhoto
    }
};

export const addDetailsPhoto=(detailsPhoto)=>{
    return {
        type:actionTypes.DETAILS_PHOTO_ADDED,
        detailsPhoto:detailsPhoto
    }
};

export const addInUsePhoto=(inUsePhoto)=>{
    return{
        type:actionTypes.IN_USE_PHOTO_ADDED,
        inUsePhoto:inUsePhoto
    }
};

export const addScenePhoto=(scenePhoto)=>{
    return{
        type:actionTypes.SCENERY_PHOTO_ADDED,
        scenePhoto:scenePhoto
    }
};

export const addProductDescription=(productDescription)=>{
    return{
        type:actionTypes.PRODUCT_DESCRIPTION_ENTERED,
        productDescription:productDescription
    }
};

export const addProductCategory=(productCategory)=>{
    return {
        type:actionTypes.PRODUCT_CATEGORY_SELECTED,
        productCategory:productCategory
    }
};

export const addProductMaterial=(material)=>{
    return{
        type:actionTypes.MATERIAL_ADDED,
        material:material
    }
};

export const addProductSKU=(productSKU)=>{
    return{
        type:actionTypes.PRODUCT_SKU_ADDED,
        productSKU:productSKU
    }
};

export const selectFirstAttribute=(selectedItem)=>{
    return{
        type:actionTypes.FIRST_ATTRIBUTE_SELECTED,
        selectedItem:selectedItem
    }
};

export const selectSecondAttribute=(selectedItem)=>{
    return{
        type:actionTypes.SECOND_ATTRIBUTE_SELECTED,
        selectedItem:selectedItem
    }
};

export const selectThirdAttribute=(selectedItem)=>{
    return{
        type:actionTypes.THIRD_ATTRIBUTE_SELECTED,
        selectedItem:selectedItem
    }
};

export const addProductVariaton=(productItem)=>{
    return {
        type:actionTypes.PRODUCT_ITEM_ADDED,
        productItem:productItem
    }
};

export const deleteProductVariaton=(productItemIndex)=>{
    return {
        type:actionTypes.DELETE_PRODUCT_ITEM,
        productItemIndex:productItemIndex
    }
};

export const sentPhotos=(productImages,productId,history,forShopName)=>{
    return dispatch=>{
        axios.post('api/Images/product?productId='+productId,
            productImages,{
                headers: {'shopName' :forShopName}
            })
            .then(res => {
                //console.log(res)
                history.push("/product/"+productId)

            });
    }
};

export const initializeStartingAttributes=(startingAttributes)=>{
    return {
        type:actionTypes.INITIALIZE_ATTRIBUTES,
        startingAttributes:startingAttributes
    }
};

export const getStartingAttributes=()=>{
    return dispatch=>{
        axios.get("/api/attributes/all").then(resp=>{
            dispatch(initializeStartingAttributes(resp.data))
        }).catch(err=>{
            console.log(err)
        })
    }
};

export const sentProduct=(product,formData,history,forShopName)=>{
    return dispatch=>{
        axios.post("/api/products/create", product, {
            headers: {
                'Content-Type': "application/json"
            }
        }).then((resp) => {
            dispatch(sentPhotos(formData,resp.data,history,forShopName))
        });
    }

};

export const setForWhichShopId=(shopId)=>{
    return{
        type:actionTypes.SET_SHOP_ID_FOR_CREATE,
        shopId:shopId
    }
}







