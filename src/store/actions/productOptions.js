import * as actionTypes from './actionTypes'

export const addVariations=(productItems)=>{
    return{
        type:actionTypes.ADD_FIRST_OPTIONS,
        productItems:productItems
    };
};

export const selectedVariant=(selectedItem)=>{
    return{
        type:actionTypes.SELECTED_VARIATION,
        selectedItem:selectedItem
    }
};