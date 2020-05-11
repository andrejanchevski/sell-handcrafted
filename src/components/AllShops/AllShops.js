import React from "react";
import ShopListDisplay from '../ShopListDisplay/ShopListDisplay'
import Select from "react-select";
import Aux from "react-aux";
import styles from './AllShops.module.css'

const options=[
    {value:"LowestRating",label:"Lowest Rating"},
    {value:"HighestRating",label:"Highest Rating"}
];

const AllShops=(props)=>{


    let shops=props.shops.map(el=>{
        return  <ShopListDisplay key={el.id} name={el.shopName} desc={el.shopDescription} shopRating={el.shopRating} shopRatings={el.shopRatings} shopCategory={el.category}/>
    });
    return(
        <Aux>
            <div className="col-9">
                <Select options={options} className={styles.SelectWidth}/>
                {shops}
            </div>
        </Aux>
    )
};

export default AllShops;