import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import styles from './NavMIddle.module.css'



const NavMiddle=(props)=>{

    let nizaKlasi=["mr-auto",styles.Content];
    const onHomeClickHandler=(event)=>{
        event.preventDefault();
        props.history.push("/")
    };

    const onProductsClickHandler=(event)=>{
        event.preventDefault();
        props.history.push("/categories/All")
    };

    const onShopsClickHandler=(event)=>{
        event.preventDefault();
        props.history.push("/shops")
    };
    const onContactClickHandler=(event)=>{
        event.preventDefault();
        props.history.push("/contact")
    };
    return (
        <Nav className={nizaKlasi.join(" ")}>
            <Nav.Link onClick={onHomeClickHandler}>Home</Nav.Link>
            <Nav.Link onClick={onProductsClickHandler}>Products</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={onShopsClickHandler}>Shops</Nav.Link>
            <Nav.Link onClick={onContactClickHandler}>Contact</Nav.Link>
        </Nav>

    )
};

export default withRouter(NavMiddle);
