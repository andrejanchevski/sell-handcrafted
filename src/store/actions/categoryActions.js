import * as actionTypes from '../actions/actionTypes'
import axios from '../../custom-axios/axios'
export const setCategoriesAsTree=(categories)=>{

    return{
        type:actionTypes.SET_CATEGORY_AS_TREE,
        categories:categories
    }
};

export const setCategoriesAsList=(categoriesList)=>{
    return{
        type:actionTypes.SET_CATEGORY_AS_LIST,
        categoriesList:categoriesList
    }
};


export const initCategories=()=>{
    return dispatch=>{

        let categoriesMain;
        axios.get("/api/categories/all").then((resp)=>{
            dispatch(setCategoriesAsList(resp.data));
            let newCat=[];
            categoriesMain=resp.data;
            categoriesMain.forEach(node=>{
                if(!node.superCategoryId) return newCat.push(node);
                const parentIndex=categoriesMain.findIndex(el=>el.categoryId===node.superCategoryId);
                if(!categoriesMain[parentIndex].children){
                    return categoriesMain[parentIndex].children=[node]
                }
                categoriesMain[parentIndex].children.push(node)
            });
            dispatch(setCategoriesAsTree(newCat));
        }).catch((err)=>{
            console.log(err)
        });




    }
};