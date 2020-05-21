import React from "react";
import Button from "../../../UI/Button/Button";
import SelectCustomized from "../../../UI/Select/Select";
import * as actions from '../../../store/actions/generalActions'
import {connect} from "react-redux";
import {setProductPriceForShow} from "../../../store/actions/generalActions";



const SelectPart=(props)=>{


    const selectedOptionHandler=(selectedOption)=>{
        //console.log(selectedOption);
        let niza = selectedOption.value.split("/");
        let priceWithSign=niza[niza.length-1].split("");
        priceWithSign=priceWithSign.splice(1,priceWithSign.length-1);
        priceWithSign=priceWithSign.join("");
        props.setProductPrice(priceWithSign);
        props.setProductPriceForShow(priceWithSign)
        props.onSelectedVariant(selectedOption.value)
    };
    const selectedQuantityHandler=(selectedQuantity)=>{
        let newPrice=parseInt(selectedQuantity.label)*parseInt(props.priceMom);
        props.setProductPriceForShow(newPrice)
    }

    return (
        <form action="">
            <div className="row align-items-center">
                <SelectCustomized title="Variations" onSelect={selectedOptionHandler} options={props.optionsV}/>
                <SelectCustomized title="Quantity"  onSelect={selectedQuantityHandler} options={props.optionsQ}/>
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
        productItems:state.productReducer.productItems,
        priceMom:state.productReducer.price
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        onSelectedVariant:(selectedItem)=>dispatch(actions.selectedVariant(selectedItem)),
        setProductPrice:(productPrice)=>dispatch(actions.setProductPrice(productPrice)),
        setProductPriceForShow:(productPriceForShow)=>dispatch(actions.setProductPriceForShow(productPriceForShow))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SelectPart);
