import * as actionTypes from './actionTypes'
import axios from '../../custom-axios/axios'
export const openRegisterModal=()=>{
    return{
        type:actionTypes.OPEN_REGISTER_MODAL
    };
};


export const closeRegisterModal=()=>{
    return{
        type:actionTypes.CLOSE_REGISTER_MODAL
    };
};

export const addUserFirstName=(firstName)=>{
    return{
        type:actionTypes.ADD_USER_FIRST_NAME,
        firstName:firstName
    };
};

export const addUserLastName=(lastName)=>{
    return{
        type:actionTypes.ADD_USER_LAST_NAME,
        lastName:lastName
    };
};

export const addUserEmail=(email)=>{
    return{
        type:actionTypes.ADD_USER_EMAIL,
        email:email
    };
};

export const addUserPassword=(password)=>{
    return{
        type:actionTypes.ADD_USER_PASSWORD,
        password:password
    };
};

export const confrimPassword=(cPassword)=>{
    return{
        type:actionTypes.CONFIRM_PASSWORD,
        cPassword:cPassword
    };
};

export const createUser=(user)=>{
    return dispatch=>{
        axios.post("/api/users/createUser",user,{
            headers:{
                'Content-Type':"application/json"
            }
        }).then(resp=>{
            console.log(resp.data);
           dispatch(closeRegisterModal())
        }).catch(err=>{
            console.log(err)
        })
    }
};

