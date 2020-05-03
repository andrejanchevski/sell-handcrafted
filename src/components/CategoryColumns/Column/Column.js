import React from "react";
import './Column.css'
const column=(props)=>{
    if(props.broj%2!==0){
        return (
            <div className="col">
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x430" alt=""/>
                    <button className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x250" alt=""/>
                    <button className="btn thisButton btn-light">{props.cat2}</button>
                </div>
            </div>
        );
    }else
    {
        return (
            <div className="col">
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x250" alt=""/>
                    <button className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x430" alt=""/>
                    <button className="btn thisButton btn-light">{props.cat2}</button>
                </div>
            </div>
        );
    }

};

export default column;