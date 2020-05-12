import React,{useState} from "react";
import Column from './Column/Column'
import Clothing from './clothing&shoes.png'
import Accesories from './accesories.jpg'
import Jewellery from './jewellry.jpg'
import Home from './home.jpg'
import HandCraft from './handcraft.jpeg'
import All from './all.jpg'
const CategoryColumns  = (props) =>{

    const stateCat=useState({
        columnsCat:[
            {category1:"Clothing&Shoes",catPicture1:Clothing,cat1Id:"1",category2:"Accessories", catPicture2:Accesories, cat2Id:"23"},
            {category1:"All",catPicture1:All,cat1Id:"",category2:"Jewellery",catPicture2:Jewellery,cat2Id:"27"},
            {category1:"Vintage",catPicture1:HandCraft,cat1Id:"5",category2:"Home",catPicture2:Home,cat2Id:"32"}
        ]
    });

    const koloni=stateCat[0].columnsCat.map((el,index)=>{
        return <Column key={index} cat1={el.category1} cat1Id={el.cat1Id} cat2Id={el.cat2Id} catPicture1={el.catPicture1} cat2={el.category2} catPicture2={el.catPicture2} broj={index}/>
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

