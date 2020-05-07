import React from "react";
import styles from './Breadcrumb.module.css'


const breadcrumb = (props)=>{
    let nizaKlasi=[];
    nizaKlasi.push("breadcrumb");
    nizaKlasi.push(styles.Container);
    let nizaKategori=["Men","Home","T-shirt","Sale"];
    const kategorii=nizaKategori.map((el,index)=>{
        return <li  key={index} className="breadcrumb-item"><a href="/">{el}</a></li>
    });

    return(
        <nav aria-label="breadcrumb" className={nizaKlasi.join(" ")}>
            {kategorii}
        </nav>
    )

};

export default breadcrumb;