import React,{useState} from "react";
import {connect} from 'react-redux'
import styles from '../CreateProductForm.module.css'
import * as actions from '../../../store/actions/generalActions'
import Button from "../../../UI/Button/Button";
import Select from "react-select";
import TableAttribute from "../../TableAttribute/TableAttribute";

const attributes=[
    {name:"size_EU",value:"M"},
    {name:"size_EU",value:"L"},
    {name:"size_EU",value:"XL"},
    {name:"size_EU",value:"S"},
    {name:"color",value:"red"},
    {name:"color",value:"blue"},
    {name:"color",value:"yellow"},
    {name:"color",value:"green"},
    {name:"LENGTH_CM",value:"100"},
    {name:"LENGTH_CM",value:"130"},
    {name:"LENGTH_CM",value:"150"},
];
const PricingAndInventory=(props)=>{

    const [tableOpen,setTableOpen]=useState(false)
    let nizaKlasi=[styles.Block,"mt-5"];
    let disabled;
    let tabela=null;
    const distinctAttributes=[...new Set(attributes.map(x=>x.name))];
    let attributeOptions=distinctAttributes.map(el=>{
        return {
            label:el,
            value:el
        }
    });
    if(tableOpen){
        tabela=<TableAttribute/>
    }else{
        tabela=null
    }

    const onFirstSelectHandler=(selectedItem)=>{
        props.onFirstItemSelect(selectedItem)
    };
    const onSecondSelectHandler=(selectedItem)=>{
        props.onSecondItemSelect(selectedItem)

    };
    const onThirdSelectHandler=(selectedItem)=>{
        props.onThirdItemSelect(selectedItem)
    };

    const generateTable=(event)=>{
        event.preventDefault();
        setTableOpen(true);

    };
    const productSKUHandler=(event)=>{
        props.onSKUAdded(event.target.value)
    };

    const checkValidity=()=>{
        disabled = props.attributes.length === 0;
    };

    checkValidity();

    return(
        <div className={nizaKlasi.join(" ")}>
            <h4>Inventory and Pricing</h4>
            <div className="row mt-4">
                <div className="col-2">
                    ProductSKU
                </div>
                <div className="col-10">
                    <input type="text"
                           onChange={productSKUHandler}
                           className="form-control w-25" id="productSKU" aria-describedby="SKUHelp"/>
                </div>
            </div>
            <hr/>
            <div>
                Choose product attributes
            </div>
            <div className="row mt-3 mb-4">
                <div className="col">
                    <Select  options={attributeOptions} onChange={onFirstSelectHandler}/>
                </div>
                <div className="col">
                    <Select  options={attributeOptions} onChange={onSecondSelectHandler}/>
                </div>
                <div className="col">
                    <Select options={attributeOptions} onChange={onThirdSelectHandler} />
                </div>
            </div>
            <Button type="dark" disabled={disabled} clicked={generateTable}>Let's add variants</Button>
            {tabela}
        </div>
    )

};

const mapStateToProps=(state)=>{
    return{
        attributes:state.createProductReducer.chosenAttributes


    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onSKUAdded:(productSKU)=>dispatch(actions.addProductSKU(productSKU)),
        onFirstItemSelect:(selectedItem)=>dispatch(actions.selectFirstAttribute(selectedItem)),
        onSecondItemSelect:(selectedItem)=>dispatch(actions.selectSecondAttribute(selectedItem)),
        onThirdItemSelect:(selectedItem)=>dispatch(actions.selectThirdAttribute(selectedItem)),
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(PricingAndInventory);