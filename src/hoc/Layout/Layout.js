import React from "react";
import Aux from '../Aux/Aux'
import Footer from "../../containers/Footer/Footer";
import RegiesterModal from "../../containers/RegiesterModal/RegiesterModal";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Header from "../../containers/Header/Header";
const layout=(props)=>{

    return(
        <Aux>
            <Header/>
            <Toolbar/>
            <RegiesterModal/>
            <main>
                {props.children}
            </main>
            <Footer/>

        </Aux>
    )

};

export default layout;