import * as actionTypes from '../actions/actionTypes'

export const setCategoriesAsTree=(categories)=>{

    return{
        type:actionTypes.SET_CATEGORY_AS_TREE,
        categories:categories
    }

};
