import React,{useState} from "react";
import Aux from 'react-aux'
import Slider from "@material-ui/core/Slider";
import './ProductsMainFilter.css'
import {connect} from 'react-redux'
import SearchSmallBar from "../../UI/SearchSmallBar/SearchSmallBar";
import ShowCategories from "../ShowCategories/ShowCategories";
import {withRouter} from "react-router";

const ProductMainFilter=(props)=>{

    const [value,setValue]=useState([25,175]);
    const handleChange=(event,newValue)=>{
        setValue(newValue)
    };
    const onLastChange=(event,newValue)=>{
        console.log(event);
        console.log(value)
        //tuka povikot
    };
    return(
        <Aux>
            <h5 className="mb-2"><strong>Categories</strong></h5>
            <ShowCategories/>
            <hr/>
            <h5 className="mb-2"><strong>Filters</strong></h5>
            <div className="mt-4">
                <p>Price:</p>
                <Slider
                    max={250}
                    value={value}
                    onChangeCommitted={onLastChange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
                <div className="row">
                    <div className="col">
                        Range:
                    </div>
                    <div className="col">
                        ${value[0]}-${value[1]}
                    </div>
                </div>
            </div>
            <hr/>
            <SearchSmallBar/>

        </Aux>
    )

};

const mapStateToProps=(state)=>{
    return{
    }
};

const mapDispatchToProps=dispatch=>{
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProductMainFilter))