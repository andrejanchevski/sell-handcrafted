import React from "react";
import ShopListDisplay from '../ShopListDisplay/ShopListDisplay'
import Select from "react-select";
import Aux from "react-aux";
import styles from './AllShops.module.css'
import {connect} from 'react-redux'
import Pagination from "../../UI/Pagination/Pagination";
import * as actions from '../../store/actions/generalActions'
const options=[
    {value:"LowestRating",label:"Lowest Rating"},
    {value:"HighestRating",label:"Highest Rating"}
];

const AllShops=(props)=>{

    let shops=[]

    if(props.shops.length!==0){
        shops=props.shops.map(el=>{
            return  <ShopListDisplay key={el.shopId}
                                     shopId={el.shopId}
                                     name={el.shopName}
                                     desc={el.shopDescription}
                                     shopRating={0}
                                     shopRatings={0}
                                     shopCategory={el.shopCategory}
                                     shopImage={el.shopLogo}/>
        });
    }

    const onPageChange=(event)=>{
        props.getShopsFromFilters(event.target.textContent);
        if(sessionStorage.getItem('filters')===null){
            let obj={
                pageFilterForShops:event.target.textContent
            }
            sessionStorage.setItem('filters',JSON.stringify(obj))
        }else{

            let newObject={
                ...JSON.parse(sessionStorage.getItem('filters')),
                pageFilterForShops: event.target.textContent
            }

            sessionStorage.setItem('filters',JSON.stringify(newObject))
        }
    }
    return(
        <Aux>
            <div className="col-9">
                <Select options={options} className={styles.SelectWidth}/>
                {shops}
                <Pagination clicked={onPageChange} page={props.page} pages={props.totalPages}/>
            </div>
        </Aux>
    )
};

const mapStateToProps=(state)=>{
    return {
        shops:state.allShopsReducer.shops,
        totalPages:state.allShopsReducer.totalPages,
        page:state.allShopsReducer.page
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getShopsFromFilters:(page)=>dispatch(actions.getShopsFromFilters(page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllShops);