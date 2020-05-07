import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";



const NavMiddle=(props)=>{

    return (
        <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Shops</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>

    )
};

export default NavMiddle;
