import * as actionTypes from '../actions/actionTypes'
const initalState={
    price:"",
    quantity:"",
    inputAttributeOne:{},
    inputAttributeTwo:{},
    inputAttributeThree:{},
    inputAttributeOneValue:"",
    inputAttributeTwoValue:"",
    inputAttributeThreeValue:"",
    selectAttributeOne:{},
    selectAttributeTwo:{},
    selectAttributeThree:{},

};


const reducer = (state=initalState,action)=>{

    switch (action.type) {
        case actionTypes.PRICE_ADDED:
            return{
                ...state,
                price:action.price
            };
        case actionTypes.QUANTITY_ADDED:
            return{
                ...state,
                quantity:action.quantity
            };
        case actionTypes.ON_INPUT_ONE:
            return {
                ...state,
                inputAttributeOne: action.inputAttributeOne,
                inputAttributeOneValue: action.inputAttributeOne.label
            };
        case actionTypes.ON_INPUT_TWO:
            return {
                ...state,
                inputAttributeTwo: action.inputAttributeTwo,
                inputAttributeTwoValue: action.inputAttributeTwo.label
            };
        case actionTypes.ON_INPUT_THREE:
            return {
                ...state,
                inputAttributeThree: action.inputAttributeThree,
                inputAttributeThreeValue: action.inputAttributeThree.label
            };
        case actionTypes.ON_SELECT_ONE:
            return{
                ...state,
                selectAttributeOne: action.selectAttributeOne
            };
        case actionTypes.ON_SELECT_TW0:
            return{
                ...state,
                selectAttributeTwo: action.selectAttributeTwo
            };
        case actionTypes.ON_SELECT_THREE:
            return{
                ...state,
                selectAttributeThree: action.selectAttributeThree
            };
        case actionTypes.CLEAR_ADD:
            return{
                price:"",
                quantity:"",
                inputAttributeOne:{},
                inputAttributeTwo:{},
                inputAttributeThree:{},
                inputAttributeOneValue:"",
                inputAttributeTwoValue:"",
                inputAttributeThreeValue:"",
                selectAttributeOne:{},
                selectAttributeTwo:{},
                selectAttributeThree:{},
            };
        default:
            return state

    }
};


export default reducer;

