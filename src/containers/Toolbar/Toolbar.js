import React,{Component} from "react";
import {Navbar} from "react-bootstrap";
import NavRight from "./NavRight/NavRight";
import NavMiddle from "./NavMiddle/NavMiddle";
import classes from './Toolbar.module.css'
import {connect} from "react-redux";
class Toolbar extends Component{

    componentDidMount() {
       // this.props.initCategoriesAsTree(categoriesMain);


    }

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

const mapStateToProps=(state)=>{
    return {
        categories:state.categoryReducer.categories
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);