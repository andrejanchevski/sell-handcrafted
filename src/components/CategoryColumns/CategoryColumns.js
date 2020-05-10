import React,{useState} from "react";
import Column from './Column/Column'


const CategoryColumns  = (props) =>{

    const stateCat=useState({
        columnsCat:[
            {category1:"Clothing&Shoes",category2:"Accessories"},
            {category1:"All",category2:"Jewellry"},
            {category1:"Vintage",category2:"Home"}
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

