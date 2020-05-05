import React, {Component} from "react";
import styles from './CreateProductForm.module.css'
import PhotosBlock from "./PhotosBlock/PhotosBlock";
import ProdInfo from "./ProdInfo/ProdInfo";
import PricingAndInventory from "./PricingAndInventory/PricingAndInventory";



class CreateProductForm extends Component{
    render() {
        return (
            <div className={styles.Background}>
                <form action="">
                    <PhotosBlock/>
                    <ProdInfo/>
                    <PricingAndInventory/>
                </form>



            </div>
        );
    }
}


export default CreateProductForm;