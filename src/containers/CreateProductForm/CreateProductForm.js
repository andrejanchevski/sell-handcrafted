import React, {Component} from "react";
import styles from './CreateProductForm.module.css'
import PhotosBlock from "./PhotosBlock/PhotosBlock";
import ProdInfo from "./ProdInfo/ProdInfo";
import PricingAndInventory from "./PricingAndInventory/PricingAndInventory";
import Button from "../../UI/Button/Button";
import {connect} from 'react-redux'



class CreateProductForm extends Component{
    render() {

        let niza=[styles.Background,"mt-4"];
        let disabled=true;
        if(this.props.productItems.length!==0){
            disabled=false
        }

        const onFormProductSubmit=(event)=>{
            event.preventDefault();
            console.log(this.props.productItems)
        };
        return (
            <div className={niza.join(" ")}>
                <form action="" onSubmit={onFormProductSubmit}>
                    <PhotosBlock/>
                    <ProdInfo/>
                    <PricingAndInventory/>
                    <Button type="dark" use="submit" size="large" disabled={disabled}>Save and Continue</Button>
                </form>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return {
        productItems:state.createProductReducer.productItems
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateProductForm);