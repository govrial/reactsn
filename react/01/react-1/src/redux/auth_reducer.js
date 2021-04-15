import { authAPI } from "../api/Api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                ...action.data,
                


            }
        
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({type:SET_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {

    authAPI.me().then(response => { 
        
        if (response.data.resultCode === 0 ) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
          
        } else {
            let action = stopSubmit("login", {email: "Invalid email address"})
            dispatch(action)    
        }
        
         
     })
}

export const login = (email, password, rememberMe, ) => (dispatch) => {

    dispatch(stopSubmit('login', {_error: "Invalid email address or password"}))   
    
    authAPI.login(email, password, rememberMe).then(response => { 
        
        if (response.data.resultCode === 0 ) {
          dispatch(getAuthUserData())
          
        } else {
           let messages = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit('login', {_error: messages})) 
        }
        
         
     })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => { 
        
        if (response.data.resultCode === 0 ) {
            dispatch(setAuthUserData(null, null, null, false));
          
        }
        
         
     })
}

export default authReducer;