import React, {useEffect} from "react";
import Aux from "react-aux"
import Footer from "../../containers/Footer/Footer";
import RegisterModal from "../../containers/RegiesterModal/RegiesterModal";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Header from "../../containers/Header/Header";
import {connect} from 'react-redux'
import * as actions from "../../store/actions/generalActions";

const layout=(props)=>{


    // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
       props.initCategories();

   },[]);

    return(
        <Aux>
                <Header/>
                <Toolbar/>
                <RegisterModal/>
                <main>
                    {props.children}
                </main>
                <Footer/>
        </Aux>
    )

};
const mapStateToProps=(state)=>{
    return{
        categories:state.categoryReducer.categories
    }

};

const mapDispatchToProps=(dispatch)=>{
    return {
        initCategories:()=>dispatch(actions.initCategories())
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(layout);