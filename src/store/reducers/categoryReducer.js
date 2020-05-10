import * as actionTypes from '../actions/actionTypes'

const initalState={
    categories:[]
};


const reducer=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.SET_CATEGORY_AS_TREE:
            return{
                ...state,
                categories:action.categories
            };
        default:
            return state

    }

};


export default reducer;