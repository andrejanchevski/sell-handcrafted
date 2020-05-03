import React,{Component} from "react";
import {connect} from 'react-redux'
import * as actions from "../../store/actions/generalActions";


class Toolbar extends Component{

    openRegisterModal=()=>{
        this.props.openRegisterModal();
    };

    render() {
        return(
            <div>
                <button
                    className="btn btn-light"
                    onClick={this.openRegisterModal}
                >Register</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

        openRegisterModal:()=>dispatch(actions.openRegisterModal())

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);