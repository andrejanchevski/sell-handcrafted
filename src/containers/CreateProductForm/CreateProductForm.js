import React, {Component} from "react";
import styles from './CreateProductForm.module.css'
import PhotosBlock from "./PhotosBlock/PhotosBlock";
import ProdInfo from "./ProdInfo/ProdInfo";
import PricingAndInventory from "./PricingAndInventory/PricingAndInventory";
import Button from "../../UI/Button/Button";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/generalActions'
import {withRouter} from "react-router-dom";


class CreateProductForm extends Component{
    componentDidMount() {
        this.props.getStartingAttributes();
    }
    render() {
        let niza=[styles.Background,"mt-4"];
        let disabled=true;
        if(this.props.productItemCreationDTOS.length!==0){
            disabled=false
        }
        const onFormProductSubmit=(event)=>{
            event.preventDefault();
            let formData= new FormData();
            this.props.product.productPhotos.forEach((photo)=>{
                //console.log(photo);
                formData.append('productImages',photo)
            });
            let wholeProduct={
                ...this.props.product
            };
            delete wholeProduct.chosenAttributes;
            delete wholeProduct.productPhotos;
            delete wholeProduct.startingAttributes;
            let forShopName=this.props.location.search.split("=")[1];
            this.props.sentProduct(wholeProduct,formData,this.props.history,forShopName);
        };
        return (
            <div className={niza.join(" ")}>
                <form action="" onSubmit={onFormProductSubmit}>
                    <PhotosBlock/>
                    <ProdInfo shopCategory={this.props.match.params.categoryName}/>
                    <PricingAndInventory/>
                    <Button type="dark" use="submit" size="large" disabled={disabled}>Save and Continue</Button>
                </form>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return {
        product:state.createProductReducer,
        productItemCreationDTOS:state.createProductReducer.productItemCreationDTOS,
        categories:state.categoryReducer.categories
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        sentProduct:(productToSend,formData,history,forShopName)=>dispatch(actions.sentProduct(productToSend,formData,history,forShopName)),
        getStartingAttributes:()=>dispatch(actions.getStartingAttributes())

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CreateProductForm));