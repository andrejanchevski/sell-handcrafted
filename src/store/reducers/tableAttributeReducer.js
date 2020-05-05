import * as actionTypes from '../actions/actionTypes'
const initalState={
    fromInput:[],
    fromSelect:[],
    price:"",
    quantity:""
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
        case actionTypes.SELECTED_ITEM:
            return{
                ...state,
                fromSelect: state.fromSelect.concat(action.selectedItem)
            };
        case actionTypes.TYPED_ITEM:
            return {
                ...state,
                fromInput: state.fromInput.concat(action.typedItem)
            };
        default:
            return state

    }
};


export default reducer;

