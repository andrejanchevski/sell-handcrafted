import React,{useState} from "react";
import Column from './Column/Column'

const CategoryColumns  = (props) =>{

    const stateCat=useState({
        columnsCat:[
            {category1:"Clothing",category2:"Accesories"},
            {category1:"Cookies",category2:"Jewelry"},
            {category1:"Sport",category2:"HomeDecor"}
        ]
    });

    const koloni=stateCat[0].columnsCat.map((el,index)=>{
        return <Column key={index} cat1={el.category1} cat2={el.category2} broj={index}/>
    });
    return(
        <div className="container mt-5">
            <div className="row">
                {koloni}
            </div>
        </div>
    )
};


export default CategoryColumns;

