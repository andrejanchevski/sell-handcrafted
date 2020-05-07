import React,{Component} from "react";
import {Navbar} from "react-bootstrap";
import NavRight from "./NavRight/NavRight";
import NavMiddle from "./NavMiddle/NavMiddle";
import classes from './Toolbar.module.css'


class Toolbar extends Component{

    render() {
        return(
            <Navbar  collapseOnSelect className={classes.Content} expand="lg" bg="white">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavMiddle/>
                    <NavRight user="Andrej"/>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Toolbar;