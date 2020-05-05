import React,{Component} from "react";
import {Modal} from "react-bootstrap";
import {connect} from 'react-redux'
import * as actions from "../../store/actions/generalActions";
import ModalBody from "./ModalBody/ModalBody";



class RegisterModal extends Component{

    handleClose=()=>{
        this.props.closeRegisterModal();

    };

    render() {
        return(
            <Modal show={this.props.openModal} onHide={this.handleClose} size="lg">

                <Modal.Body>
                    <ModalBody/>
                </Modal.Body>

            </Modal>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        openModal: state.registerModalReducer.modalOpen
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        closeRegisterModal:()=>dispatch(actions.closeRegisterModal())
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterModal);
