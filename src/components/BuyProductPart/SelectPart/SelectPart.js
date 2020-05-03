import React,{useContext,useEffect} from "react";
import AuthContext from "../../../context/auth-context";
import Button from "../../../UI/Button/Button";
import SelectCustomized from "../../../UI/Select/Select";
import * as actions from '../../../store/actions/generalActions'
import {connect} from "react-redux";



const SelectPart=(props)=>{

    const authContext=useContext(AuthContext);


    useEffect(()=>{
        let productVariatons=authContext.productItems;
        props.onMountFirstOptions(productVariatons);
    },[]);


    const selectedOptionHandler=(selectedOption)=>{
        console.log(selectedOption);
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
        glavenObj:state.selectReducer.obj
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        onMountFirstOptions:(productItems)=>dispatch(actions.addVariations(productItems)),
        onSelectedVariant:(selectedItem)=>dispatch(actions.selectedVariant(selectedItem))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SelectPart);
