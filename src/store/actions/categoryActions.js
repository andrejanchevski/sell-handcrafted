import * as actionTypes from '../actions/actionTypes'

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

        const categoriesMain=[
            {id:1,name:"Clothing&Shoes",superCategory:null},
            {id:5,name:"Men",superCategory:1},
            {id:14,name:"T-shirts",superCategory:5},
            {id:15,name:"Jeans",superCategory:5},
            {id:16,name:"Hoodies",superCategory:5},
            {id:6,name:"Woman",superCategory:1},
            {id:17,name:"T-shirts",superCategory:6},
            {id:18,name:"Hoodies",superCategory:6},
            {id:7,name:"Kids",superCategory:1},
            {id:2,name:"Accessories",superCategory: null},
            {id:8,name:"Wallets",superCategory:2},
            {id:9,name:"Sunglasses",superCategory:2},
            {id:10,name:"Bags",superCategory:2},
            {id:3,name:"Jewellery",superCategory: null},
            {id:11,name:"Rings",superCategory: 3},
            {id:12,name:"Necklace",superCategory: 3},
            {id:13,name:"Earrings",superCategory: 3},
            {id:4,name:"Home",superCategory: null},
        ];
        dispatch(setCategoriesAsList(categoriesMain));
        let newCat=[];
        categoriesMain.forEach(node=>{
            if(!node.superCategory) return newCat.push(node);
            const parentIndex=categoriesMain.findIndex(el=>el.id===node.superCategory);
            if(!categoriesMain[parentIndex].children){
                return categoriesMain[parentIndex].children=[node]
            }
            categoriesMain[parentIndex].children.push(node)
        });
        dispatch(setCategoriesAsTree(newCat));
    }
};