import * as actionTypes from '../actions/actionTypes'

const initalState={
    userId:'f8cb6375-e443-43a1-a526-e5796fc186c5',
    shopId:'',
    productName:"",
    productDescription:"",
    productPhotos:[],
    productCategoryId:"",
    materials:[],
    productSKU:"",
    productItemCreationDTOS:[],
    chosenAttributes:[],
    startingAttributes:[]
};


const reducer = (state=initalState,action)=>{

    switch (action.type) {
        case actionTypes.PRODUCT_NAME_ENTERED:
            return{
                ...state,
                productName: action.productName
            };
        case actionTypes.PRIMARY_PHOTO_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.primaryPhoto)
            };
        case actionTypes.LEFT_ANGLE_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.leftAnglePhoto)
            };
        case actionTypes.RIGHT_ANGLE_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.rightAnglePhoto)
            };
        case actionTypes.DETAILS_PHOTO_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.detailsPhoto)
            };
        case actionTypes.IN_USE_PHOTO_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.inUsePhoto)
            };
        case actionTypes.SCENERY_PHOTO_ADDED:
            return{
                ...state,
                productPhotos: state.productPhotos.concat(action.scenePhoto)
            };
        case actionTypes.PRODUCT_DESCRIPTION_ENTERED:
            return{
                ...state,
                productDescription: action.productDescription
            };
        case actionTypes.PRODUCT_CATEGORY_SELECTED:
            return {
                ...state,
                productCategoryId: action.productCategory.value
            };
        case actionTypes.MATERIAL_ADDED:
            return{
                ...state,
                materials: state.materials.concat(action.material)
            };
        case actionTypes.PRODUCT_SKU_ADDED:
            return{
                ...state,
                productSKU: action.productSKU
            };
        case actionTypes.FIRST_ATTRIBUTE_SELECTED:
            return{
                ...state,
                chosenAttributes: state.chosenAttributes.concat(action.selectedItem)
            };
        case actionTypes.SECOND_ATTRIBUTE_SELECTED:
            return{
                ...state,
                chosenAttributes: state.chosenAttributes.concat(action.selectedItem)
            };
        case actionTypes.THIRD_ATTRIBUTE_SELECTED:
            return{
                ...state,
                chosenAttributes: state.chosenAttributes.concat(action.selectedItem)
            };
        case actionTypes.PRODUCT_ITEM_ADDED:
            return{
                ...state,
                productItemCreationDTOS: state.productItemCreationDTOS.concat(action.productItem)
            };
        case actionTypes.DELETE_PRODUCT_ITEM:
            return {
                ...state,
                productItemCreationDTOS: state.productItemCreationDTOS.filter((value,index)=>index!==action.productItemIndex)
            };
        case actionTypes.INITIALIZE_ATTRIBUTES:
            return{
                ...state,
                startingAttributes: action.startingAttributes
            };
        case actionTypes.SET_SHOP_ID_FOR_CREATE:
            return{
                ...state,
                shopId: action.shopId
            }

        default:
            return state;
    }



};

export default reducer;