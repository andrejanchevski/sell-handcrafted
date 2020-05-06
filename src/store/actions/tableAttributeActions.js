import * as actionTypes from './actionTypes'



export const addPrice=(price)=>{
    return{
        type:actionTypes.PRICE_ADDED,
        price:price
    }
};

export const addQuantity=(quantity)=>{
    return{
        type:actionTypes.QUANTITY_ADDED,
        quantity:quantity
    }
};

export const addOnInputOne=(inputAttributeOne)=>{
    return {
        type:actionTypes.ON_INPUT_ONE,
        inputAttributeOne:inputAttributeOne
    }
};

export const addOnInputTwo=(inputAttributeTwo)=>{
    return {
        type:actionTypes.ON_INPUT_TWO,
        inputAttributeTwo:inputAttributeTwo
    }
};

export const addOnInputThree=(inputAttributeThree)=>{
    return {
        type:actionTypes.ON_INPUT_THREE,
        inputAttributeThree:inputAttributeThree
    }
};

export const addOnSelectOne=(selectAttributeOne)=>{
    return{
        type:actionTypes.ON_SELECT_ONE,
        selectAttributeOne:selectAttributeOne
    }
};

export const addOnSelectTwo=(selectAttributeTwo)=>{
    return{
        type:actionTypes.ON_SELECT_TW0,
        selectAttributeTwo:selectAttributeTwo
    }
};

export const addOnSelectThree=(selectAttributeThree)=>{
    return{
        type:actionTypes.ON_SELECT_THREE,
        selectAttributeThree:selectAttributeThree
    }
};

export const clear=()=>{
    return{
        type:actionTypes.CLEAR_ADD
    }
};