import React,{Component} from "react";
import {connect} from 'react-redux'
import styles from './TableAttribute.module.css'
import Select from "react-select";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as actions from "../../store/actions/generalActions"
import TableRow from "./TableRow/TableRow";

class TableAttribute extends Component{
    render() {
        let tableRows=this.props.productItemCreationDTOS.map((el,index)=>{
            return <TableRow key={index} number={index} price={el.price} quantity={el.quantity} attributes={el.productItemAttributes}/>
        });
        let niza=[styles.Content,"mt-5"];
        let distinctAttributes=[...new Set(this.props.attributes.map(x=>x.label))];
        const leaders=distinctAttributes.map((el)=>{
            return <th key={el} scope="col">{el}</th>
        });
        const priceInputHandler=(event)=>{
            this.props.onPriceAdded(event.target.value);
        };
        const quantityInputHandler=(event)=>{
            this.props.onQuantityAdded(event.target.value);
        };
        const onSelect=(selectedItem,index)=>{
            switch (index) {
                case 0:
                    this.props.selectOneAdding(selectedItem);
                    break;
                case 1:
                    this.props.selectTwoAdding(selectedItem);
                    break;
                case 2:
                    this.props.selectThreeAdding(selectedItem);
                    break;
                default:
                    return
            }

        };

        const onInput=(event,el,index)=>{
            switch (index) {
                case 0:
                    this.props.inputOneAdding({label:event.target.value,value:el});
                    break;
                case 1:
                    this.props.inputTwoAdding({label:event.target.value,value:el});
                    break;
                case 2:
                    this.props.inputThreeAdding({label:event.target.value,value:el});
                    break;
                default:
                    return
            }

        };

        const polinja=distinctAttributes.map((el,index)=>{
            if(el.startsWith("SIZE") || el==="COLOR"){
                let options=this.props.existingAttributes.map((el1)=>{
                    if(el1.attributeName===el){
                        return{
                            label:el1.attributeValue,
                            value:el
                        }
                    }
                });
                if(index===0){
                    return <td key={el}><Select options={options.filter((value)=>value!==undefined)} value={this.props.selectAttributeOne} onChange={(selectedItem)=>onSelect(selectedItem,index)}/></td>
                }
                if(index===1){
                    return <td key={el}><Select options={options.filter((value)=>value!==undefined)} value={this.props.selectAttributeTwo} onChange={(selectedItem)=>onSelect(selectedItem,index)}/></td>

                }
                if(index===2){
                    return <td key={el}><Select options={options.filter((value)=>value!==undefined)} value={this.props.selectAttributeThree} onChange={(selectedItem)=>onSelect(selectedItem,index)}/></td>

                }
            }else{
                if(index===0){
                    return <td key={el} className="w-auto"><input type="number" className="form-control" value={this.props.inputAttributeOneValue} onChange={(event)=>onInput(event,el,index)} id={el+"Input"}/></td>
                }
                if(index===1){
                    return <td key={el} className="w-auto"><input type="number" className="form-control" value={this.props.inputAttributeTwoValue} onChange={(event)=>onInput(event,el,index)} id={el+"Input"}/></td>
                }
                if(index===2){
                    return <td key={el} className="w-auto"><input type="number" className="form-control" value={this.props.inputAttributeThreeValue} onChange={(event)=>onInput(event,el,index)} id={el+"Input"}/></td>
                }


            }
        });


        const addProductVariaton=(event)=>{
            event.preventDefault();
            let attributes=[this.props.selectAttributeOne,this.props.selectAttributeTwo,this.props.selectAttributeThree,this.props.inputAttributeOne,this.props.inputAttributeTwo,this.props.inputAttributeThree];
             attributes=attributes.filter(value=>Object.keys(value).length!==0);
             attributes=attributes.map((el)=>{
                 return {
                     attributeName:el.value,
                     attributeValue:el.label
                 }
             });
             let objToSend={
                 price:this.props.price,
                 quantity:this.props.quantity,
                 productItemAttributes:attributes
             };
             this.props.productVariantAdding(objToSend);
             this.props.clearAll()

        };
        return (
            <div className={niza.join(" ")}>
                <table className=" table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        {leaders}
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Add/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                        <tr>
                            <td className="w-auto"/>
                            {polinja}
                            <td className='w-auto'>
                                <input type="text" className="form-control"  value={this.props.quantity} onChange={quantityInputHandler} id="quantityInput"/>
                            </td>
                            <td className="w-auto">
                                <input type="text" className="form-control" value={this.props.price} onChange={priceInputHandler} id="priceInput"/>
                            </td>
                            <td className="w-auto"><button className="btn btn-light" onClick={addProductVariaton}><FontAwesomeIcon icon={faPlus}/></button></td>
                        </tr>
                    </tbody>

                </table>

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        attributes:state.createProductReducer.chosenAttributes,
        existingAttributes:state.createProductReducer.startingAttributes,
        price:state.tableAttributeReducer.price,
        quantity: state.tableAttributeReducer.quantity,
        inputAttributeOne:state.tableAttributeReducer.inputAttributeOne,
        inputAttributeTwo: state.tableAttributeReducer.inputAttributeTwo,
        inputAttributeThree: state.tableAttributeReducer.inputAttributeThree,
        selectAttributeOne: state.tableAttributeReducer.selectAttributeOne,
        selectAttributeTwo: state.tableAttributeReducer.selectAttributeTwo,
        selectAttributeThree: state.tableAttributeReducer.selectAttributeThree,
        inputAttributeOneValue: state.tableAttributeReducer.inputAttributeOneValue,
        inputAttributeTwoValue: state.tableAttributeReducer.inputAttributeTwoValue,
        inputAttributeThreeValue: state.tableAttributeReducer.inputAttributeThreeValue,
        productItemCreationDTOS:state.createProductReducer.productItemCreationDTOS
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onPriceAdded:(price)=>dispatch(actions.addPrice(price)),
        onQuantityAdded:(quantity)=>dispatch(actions.addQuantity(quantity)),
        inputOneAdding:(inputAttributeOne)=>dispatch(actions.addOnInputOne(inputAttributeOne)),
        inputTwoAdding:(inputAttributeTwo)=>dispatch(actions.addOnInputTwo(inputAttributeTwo)),
        inputThreeAdding:(inputAttributeThree)=>dispatch(actions.addOnInputThree(inputAttributeThree)),
        selectOneAdding:(selectAttributeOne)=>dispatch(actions.addOnSelectOne(selectAttributeOne)),
        selectTwoAdding:(selectAttributeTwo)=>dispatch(actions.addOnSelectTwo(selectAttributeTwo)),
        selectThreeAdding:(selectAttributeThree)=>dispatch(actions.addOnSelectThree(selectAttributeThree)),
        productVariantAdding:(productItem)=>dispatch(actions.addProductVariaton(productItem)),
        clearAll:()=>dispatch(actions.clear())

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TableAttribute);