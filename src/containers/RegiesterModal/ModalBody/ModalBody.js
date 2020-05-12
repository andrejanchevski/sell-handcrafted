import React from "react";
import Customers from '../happy-customers.png'
import styles from './ModalBody.module.css'
import Button from "../../../UI/Button/Button";
import * as actions from '../../../store/actions/generalActions'
import {connect} from 'react-redux'
const ModalBody=(props)=>{
    let niza=["row",styles.Content];
    let disabled;
    const inputFirstNameHandler=(event)=>{
        props.onNameAdded(event.target.value)
    };
    const inputLastNameHandler=(event)=>{
        props.onLastNameAdded(event.target.value)
    };
    const inputEmailHandler=(event)=>{
        props.onEmailAdded(event.target.value)
    };
    const inputPasswordHandler=(event)=>{
        props.onPasswordAdded(event.target.value)
    };
    const onCancelHandler=(event)=>{
        props.closeRegisterModal();
    };
    const onInputConfirmHandler=(event)=>{
        props.onPasswordConfirmed(event.target.value)
    };
    const checkValidity=()=>{
        disabled = props.userFirstName.trim() !== "" && props.userEmail.trim() !== ""  && props.userPassword !== "" && props.userPassword===props.confirmPassword;
    };
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let user={
            ...props.user
        };
        delete user.modalOpen;
        delete user.confirmPassword;
        props.createUser(user)

    };
    checkValidity();
    return (
        <div className={niza.join(" ")}>
            <div className="col">
               <img src={Customers} className="img-fluid" alt=""/>
            </div>
            <div className="col">
                <form action="" onSubmit={onSubmitHandler}>
                    <div className="text-center">
                        <h3>Register</h3>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="form-group">
                                <input
                                    type="text"
                                    onChange={inputFirstNameHandler}
                                    className="form-control" id="exampleInputName"
                                       aria-describedby="nameHelp" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <input
                                    type="text"
                                    onChange={inputLastNameHandler}
                                    className="form-control"
                                    id="exampleInputLastName"
                                       aria-describedby="lastNameHelp" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            onChange={inputEmailHandler}
                            className="form-control" id="exampleInputEmail"
                               aria-describedby="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            onChange={inputPasswordHandler}
                            className="form-control" id="exampleInputPassword"
                               aria-describedby="passwordHelp" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               onChange={onInputConfirmHandler}
                               className="form-control" id="exampleInputConfirmPassword"
                               aria-describedby="confirmPasswordHelp" placeholder="Confirm Password"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button type="dark"
                                    disabled={!disabled}
                                    size="block" use="submit">Register</Button>
                        </div>
                        <div className="col">
                            <Button
                                clicked={onCancelHandler}
                                type="light" size="block">Close</Button>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        userFirstName:state.registerModalReducer.firstName,
        userLastName:state.registerModalReducer.lastName,
        userEmail:state.registerModalReducer.email,
        userPassword:state.registerModalReducer.password,
        confirmPassword: state.registerModalReducer.confirmPassword,
        user:state.registerModalReducer
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        onNameAdded:(firstName)=>dispatch(actions.addUserFirstName(firstName)),
        onLastNameAdded:(lastName)=>dispatch(actions.addUserLastName(lastName)),
        onEmailAdded:(email)=>dispatch(actions.addUserEmail(email)),
        onPasswordAdded:(password)=>dispatch(actions.addUserPassword(password)),
        onPasswordConfirmed:(cPassword)=>dispatch(actions.confrimPassword(cPassword)),
        closeRegisterModal:()=>dispatch(actions.closeRegisterModal()),
        createUser:(user)=>dispatch(actions.createUser(user))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ModalBody);