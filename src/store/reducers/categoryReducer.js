import * as actionTypes from '../actions/actionTypes'

const initalState={
    categories:[],
    categoriesList:[]
};


const reducer=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.SET_CATEGORY_AS_TREE:
            return{
                ...state,
                categories:action.categories
            };
        case actionTypes.SET_CATEGORY_AS_LIST:
            return {
                ...state,
                categoriesList: action.categoriesList
            };
        default:
            return state

    }

};


export default reducer;