import React,{useState}from "react";
import styles from '../CreateProductForm.module.css'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/generalActions'
import Select from "react-select";



const categories=[
    {id:2334,name:"Clothing&Shoes"},
    {id:4444,name:"Accesories"},
    {id:11111,name:"Jewelry"},
    {id:876,name:"Home"}
];


const ProdInfo=(props)=>{

    const [materialNow,setMaterialNow]=useState("");
    let nizaKlasi=[styles.Block,"mt-5"];

    let nizaOptions=categories.map((el)=>{
        return{
            value:el.id,
            label:el.name
        }
    });

    let showMaterials=props.materials.map((el,index)=>{
        if(index===0){
            return <button disabled key={index}  className="btn btn-dark">{el}</button>
        }
        return <button disabled key={index}  className="btn btn-dark ml-3">{el}</button>


    });

    const inputProductNameHandler=(event)=>{
        props.onProductNameAdded(event.target.value)
    };

    const inputDescriptionHandler=(event)=>{
        props.onProductDescriptionAdded(event.target.value)
    };

    const onSelectedCategoryHandler=(selectedItem)=>{
        props.onProductCategorySelected(selectedItem);
    };
    const onMaterialAdd=(event)=>{
        if(materialNow.trim()!==""){
            props.onMaterialAdded(materialNow);
            setMaterialNow("")
        }
    };

    const materialInputHandler=(event)=>{
        setMaterialNow(event.target.value)
    };

    return (
        <div className={nizaKlasi.join(" ")}>
            <h4>ProductItem Details</h4>
            <p className={styles.MiddleText}>Tell the world all about your item and why they’ll love it.</p>
            <div className="row">
                <div className="col-2">
                        Product Title
                </div>
                <div className="col-10">
                    <input type="text"
                           onChange={inputProductNameHandler}
                           className="form-control" id="productName" aria-describedby="nameHelp"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    Product Description
                </div>
                <div className="col-10">
                    <textarea
                           onChange={inputDescriptionHandler}
                           rows="3"
                           className="form-control" id="productDescription" aria-describedby="descriptionHelp"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    Product Category
                </div>
                <div className="col-10">
                    <Select options={nizaOptions} onChange={onSelectedCategoryHandler}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    Materials
                </div>
                <div className="col-10">
                    <div className="input-group mb-3">
                        <input type="text"
                               onChange={materialInputHandler}
                               value={materialNow}
                               className="form-control"
                               aria-label="Product Materials" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button onClick={onMaterialAdd} className="btn btn-outline-secondary" type="button">Add</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-10">
                    {showMaterials}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return {
        materials:state.createProductReducer.materials
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onProductNameAdded:(productName)=>dispatch(actions.addProductName(productName)),
        onProductDescriptionAdded:(productDescription)=>dispatch(actions.addProductDescription(productDescription)),
        onProductCategorySelected:(productCategory)=>dispatch(actions.addProductCategory(productCategory)),
        onMaterialAdded:(material)=>dispatch(actions.addProductMaterial(material)),


    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProdInfo);