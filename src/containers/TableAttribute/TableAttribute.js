import React,{Component} from "react";
import {connect} from 'react-redux'
import styles from './TableAttribute.module.css'
import Select from "react-select";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as actions from "../../store/actions/generalActions"

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
class TableAttribute extends Component{
    render() {


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
        const onSelect=(selectedItem)=>{
            this.props.onItemSelected(selectedItem);
        };

        const onInput=(event,el)=>{
            this.onItemTyped({label:event.target.value,value:el})
        };

        const polinja=distinctAttributes.map((el,index)=>{
            if(el.startsWith("size") || el==="color"){
                let options=attributes.map(el1=>{
                    if(el1.name===el){
                        return{
                            label:el1.value,
                            value:el
                        }
                    }
                });
                return <td key={el}><Select options={options.filter((value)=>value!==undefined)} onChange={onSelect}/></td>
            }else{
                return <td key={el} className="w-auto"><input type="text" className="form-control" onChange={(event)=>onInput(event,el)} id={el+"Input"}/></td>
            }
        });
        return (
            <div className={niza.join(" ")}>
                <table className=" table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        {leaders}
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Add</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-auto"/>
                            {polinja}
                            <td className='w-auto'>
                                <input type="text" className="form-control" onChange={quantityInputHandler} id="quantityInput"/>
                            </td>
                            <td className="w-auto">
                                <input type="text" className="form-control" onChange={priceInputHandler} id="priceInput"/>
                            </td>
                            <td className="w-auto"><button className="btn btn-light"><FontAwesomeIcon icon={faPlus}/></button></td>

                        </tr>
                    </tbody>

                </table>

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        attributes:state.createProductReducer.chosenAttributes

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onPriceAdded:(price)=>dispatch(actions.addPrice(price)),
        onQuantityAdded:(quantity)=>dispatch(actions.addQuantity(quantity)),
        onItemSelected:(selectedItem)=>dispatch(actions.selectItem(selectedItem)),
        onItemTyped:(typedItem)=>dispatch(actions.typeItem(typedItem))


    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TableAttribute);