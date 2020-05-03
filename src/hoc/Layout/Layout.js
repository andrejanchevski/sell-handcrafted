import React from "react";
import Aux from '../Aux/Aux'
import Footer from "../../containers/Footer/Footer";
import RegiesterModal from "../../containers/RegiesterModal/RegiesterModal";
import Toolbar from "../../containers/Toolbar/Toolbar";
const layout=(props)=>{

    return(
        <Aux>
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