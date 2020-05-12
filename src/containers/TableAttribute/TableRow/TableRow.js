import React from 'react'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/generalActions'




const TableRow=(props)=>{
    let atributi=props.attributes.map((el,index)=>{
        return <td key={index}>{el.attributeValue}</td>
    });

    const deleteProductItem=(event,index)=>{
        event.preventDefault();
        props.deleteProductItem(index);

    };
    return(

        <tr>
            <td>{props.number}</td>
            {atributi}
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td><button className="btn btn-light" onClick={(event)=>deleteProductItem(event,props.number)}><FontAwesomeIcon icon={faTimes}/></button></td>
        </tr>
    )
};

const mapStateToProps=(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return {

        deleteProductItem:(productItemIndex)=>dispatch(actions.deleteProductVariaton(productItemIndex)),

    }
};



export default connect(mapStateToProps,mapDispatchToProps,)(TableRow);
