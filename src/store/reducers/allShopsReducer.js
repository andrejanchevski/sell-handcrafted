import * as actionTypes from '../actions/actionTypes'

const initalState={
    shops:[],
    totalPages:1,
    page:0
}

const reducer=(state=initalState,action)=>{

    switch (action.type) {

        case actionTypes.SET_ALL_SHOPS:
            return {
                ...state,
                shops: action.shops
            }
        case actionTypes.SET_SHOPS_TOTAL_PAGES:
            return{
                ...state,
                totalPages:3
                //totalPAges:action.totalPages
            }
        case actionTypes.SET_SHOPS_FROM_FILTERS:
            return {
                ...state,
                shops:action.shops,
                totalPages: 3,
                page:action.page+1
            }

        default:
            return state;
    }
}


export default reducer;