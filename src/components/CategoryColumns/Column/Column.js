import React from "react";
import './Column.css'
import {withRouter} from "react-router-dom";




const column=(props)=>{
    const onClickRedirect=(event,to)=>{
        event.preventDefault();
        props.history.push("/categories/"+to)
    };

    if(props.broj%2!==0){
        return (
            <div className="col">
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x430" alt=""/>
                    <button
                        onClick={(event)=>onClickRedirect(event,props.cat1)}
                        className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x250" alt=""/>
                    <button
                        className="btn thisButton btn-light"
                        onClick={(event)=>onClickRedirect(event,props.cat2)}
                    >{props.cat2}
                    </button>
                </div>
            </div>
        );
    }else
    {
        return (
            <div className="col">
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x250" alt=""/>
                    <button
                        onClick={(event)=>onClickRedirect(event,props.cat1)}
                        className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src="https://via.placeholder.com/370x430" alt=""/>
                    <button
                        onClick={(event,to)=>onClickRedirect(event,props.cat2)}
                        className="btn thisButton btn-light">{props.cat2}</button>
                </div>
            </div>
        );
    }

};

export default withRouter(column);