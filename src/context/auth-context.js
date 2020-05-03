import React from "react";


const authContext=React.createContext({
    materials:[],
    longDescription:"",
    productItems:[],
    categories:[]
});


export default authContext;