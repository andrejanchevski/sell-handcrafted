import * as actionTypes from './actionTypes'


export const selectItem=(selectedItem)=>{
    return{
        type:actionTypes.SELECTED_ITEM,
        selectedItem:selectedItem
    }
};

export const typeItem=(typedItem)=>{
    return{
        type:actionTypes.TYPED_ITEM,
        typedItem:actionTypes.TYPED_ITEM
    }
};

export const addPrice=(price)=>{
    return{
        type:actionTypes.PRICE_ADDED,
        price:price
    }
};

export const addQuantity=(quantity)=>{
    return{
        type:actionTypes.PRICE_ADDED,
        quantity:quantity
    }
};