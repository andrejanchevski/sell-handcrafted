import React from "react";
import {Nav, NavDropdown} from 'react-bootstrap'
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import * as actions from '../../../store/actions/generalActions'
import NavBarDropDownCardItem from "../NavBarDropDownCardItem/NavBarDropDownCardItem";
import './dropDownMenuSize.css'
import Button from "../../../UI/Button/Button";


let productsTemp=[
    {id:222333,productName:"White Linen Shirt",price:39.00},
    {id:455677,productName:"White Linen Shirt",price:39.00},
    {id:12334,productName:"White Linen Shirt",price:39.00},
    {id:1232131,productName:"White Linen Shirt",price:39.00},
];
const NavRight=(props)=>{
    const onRegisterModalOpen=(event)=>{
        event.preventDefault();
        props.openRegisterModal()

    };
    let suma=0;

    let cartItems=productsTemp.map(el=>{
        suma=suma+el.price;
        return <NavBarDropDownCardItem key={el.id} name={el.productName} price={el.price}/>
    });


    let title=<FontAwesomeIcon icon={faCartArrowDown} size="2x"/>;
    return (
        <Nav>
            <NavDropdown title={title} className="pl-3 pr-3" id="collasible-nav-dropdown">
                {cartItems}
                <NavDropdown.Item disabled className="float-right">Total:${suma}</NavDropdown.Item>
                <NavDropdown.Item disabled>
                    <div className="row">
                        <div className="col-auto">
                            <Button type="dark">View Cart</Button>
                        </div>
                        <div className="col-auto">
                            <Button type="dark">Check Out</Button>
                        </div>

                    </div>
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="border-left border-right pl-3 pr-3" onClick={onRegisterModalOpen}><span>Hi,{props.user} <FontAwesomeIcon icon={faUser} size="2x"/></span></Nav.Link>
            <Nav.Link href="" className="pl-3 pr-3" onClick={onRegisterModalOpen}><FontAwesomeIcon icon={faStore} size="2x"/></Nav.Link>
        </Nav>
    )

};

const mapStateToProps=(state)=>{
    return{

    }

};

const mapDispatchToProps=(dispatch)=>{
    return {
        openRegisterModal:()=>dispatch(actions.openRegisterModal())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NavRight);