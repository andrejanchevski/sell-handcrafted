import * as actionTypes from '../actions/actionTypes'

const initalState={
    modalOpen:false,
    userFirstName:"",
    userLastName:"",
    userEmail:"",
    userPassword:"",
    confirmPassword:""
};

const reducer = (state=initalState,action)=>{

    switch (action.type) {
        case actionTypes.OPEN_REGISTER_MODAL:
            return{
                ...state,
                modalOpen:true
            };
        case actionTypes.CLOSE_REGISTER_MODAL:
            return{
                modalOpen:false
            };
        case actionTypes.ADD_USER_FIRST_NAME:
            return {
                ...state,
                userFirstName: action.firstName
            };
        case actionTypes.ADD_USER_LAST_NAME:
            return {
                ...state,
                userLastName: action.lastName
            };
        case actionTypes.ADD_USER_EMAIL:
            return {
                ...state,
                userEmail: action.email
            };
        case actionTypes.ADD_USER_PASSWORD:
            return {
                ...state,
                userPassword: action.password
            };
        case actionTypes.CONFIRM_PASSWORD:
            return{
                ...state,
                confirmPassword: action.cPassword

            };
        default:
            return state
    }



};


export default reducer;