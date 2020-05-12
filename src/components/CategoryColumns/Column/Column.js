import React from "react";
import './Column.css'
import {withRouter} from "react-router-dom";




const column=(props)=>{
    const onClickRedirect=(event,to,id)=>{
        event.preventDefault();
        //console.log(id);
        if(id===""){
            props.history.push("/categories/"+to);
        }else
        {
            props.history.push("/categories/"+to+"?="+id);
        }


    };
    if(props.broj%2!==0){
        return (
            <div className="col">
                <div className="block mt-3">
                    <img src={props.catPicture1} alt="" className="img-fluid" style={{height:"410px"}}/>
                    <button
                        onClick={(event)=>onClickRedirect(event,props.cat1,props.cat1Id)}
                        className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src={props.catPicture2} alt="" className="img-fluid" style={{height:"250px"}}/>
                    <button
                        className="btn thisButton btn-light"
                        onClick={(event)=>onClickRedirect(event,props.cat2,props.cat2Id)}
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
                    <img src={props.catPicture1} alt="" className="img-fluid" style={{height:"250px"}}/>
                    <button
                        onClick={(event)=>onClickRedirect(event,props.cat1,props.cat1Id)}
                        className="btn thisButton btn-light">{props.cat1}</button>
                </div>
                <div className="block mt-3">
                    <img src={props.catPicture2} alt="" className="img-fluid" style={{height:"410px"}}/>
                    <button
                        onClick={(event,to)=>onClickRedirect(event,props.cat2,props.cat2Id)}
                        className="btn thisButton btn-light">{props.cat2}</button>
                </div>
            </div>
        );
    }

};

export default withRouter(column);