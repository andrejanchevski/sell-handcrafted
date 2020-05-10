import React from "react";


const authContext=React.createContext({
    materials:[],
    longDescription:"",
    productItems:[],
    categories:[],
    mainCategories:[]
});


export default authContext;