import React from "react";
import styles from './CategoryList.module.css'
import {withRouter} from "react-router-dom";
const CategoryList=(props)=>{

    return(
        <ul className={styles.Lista}>
            {props.children}
        </ul>
    )
};

export default withRouter(CategoryList);