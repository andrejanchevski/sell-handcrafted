import React from "react";
import {connect} from 'react-redux'
import styles from './SmallList.module.css'
import {Link,withRouter} from "react-router-dom";
const SmallList=(props)=>{


    let listItems=null;
    if(props.title==="Categories"){
        if(props.categories.length!==0){
            listItems=props.categories.slice(0,4).map((el)=>{
                return <li className="pb-2" key={el.id}><Link to={"/categories/"+el.name+"?="+el.id}>{el.name}</Link></li>
            });
        }
    }else{
        listItems=[
            <li className="pb-2" key="123123"><Link to="/">Home</Link></li>,
            <li className="pb-2" key='1232'><Link to="/categories/All">Products</Link></li>,
            <li className="pb-2" key="213213"><Link to="">Shops</Link></li>,
            <li className="pb-2" key="2332222"><Link to="/">Contact</Link></li>
        ]
    }


    return (


        <div className="col">
            <ol className={styles.Lista}>
                <p>{props.title}</p>
                {listItems}
            </ol>
        </div>

    )
};

const mapStateToProps=(state)=>{
    return{
        categories:state.categoryReducer.categories
    }
};

export default connect(mapStateToProps)(withRouter(SmallList))