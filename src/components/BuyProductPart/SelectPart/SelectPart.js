import React from "react";
import Button from "../../../UI/Button/Button";
import SelectCustomized from "../../../UI/Select/Select";
import * as actions from '../../../store/actions/generalActions'
import {connect} from "react-redux";



const SelectPart=(props)=>{


    const selectedOptionHandler=(selectedOption)=>{
        console.log(selectedOption);
        let niza = selectedOption.value.split("/");
        let priceWithSign=niza[niza.length-1].split("");
        priceWithSign=priceWithSign.splice(1,priceWithSign.length-1);
        priceWithSign=priceWithSign.join("");
        props.setProductPrice(priceWithSign);
        props.onSelectedVariant(selectedOption.value)
    };

    return (
        <form action="">
            <div className="row align-items-center">
                <SelectCustomized title="Variatons" onSelect={selectedOptionHandler} options={props.optionsV}/>
                <SelectCustomized title="Quantity" options={props.optionsQ}/>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <Button type="dark" size="block">Buy</Button>
                </div>
                <div className="col">
                    <Button type="outlineDark" size="block">Add to Cart</Button>
                </div>
            </div>

        </form>

    )
};
const mapStateToProps=state=>{
    return{
        optionsV:state.selectReducer.optionsVariations,
        optionsQ:state.selectReducer.optionsQuantity,
        sOpv:state.selectReducer.selectedOptionVaration,
        sopQ:state.selectReducer.selectedOptionQuantity,
        glavenObj:state.selectReducer.obj,
        productItems:state.productReducer.productItems
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        onSelectedVariant:(selectedItem)=>dispatch(actions.selectedVariant(selectedItem)),
        setProductPrice:(productPrice)=>dispatch(actions.setProductPrice(productPrice))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SelectPart);
