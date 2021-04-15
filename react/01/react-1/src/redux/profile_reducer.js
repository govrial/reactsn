import { userAPI, profileAPI } from "../api/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
      { id: 1, message: 'Hello my dear friend', name: 'Dima K', likecounts: '25' },
      { id: 2, message: 'Oh shit, here we go again', name: 'Danya Kondrulin', likecounts: '251' },
      { id: 3, message: 'Omaevu de shinderu', name: 'Vlad Kondrulin', likecounts: '456' },
    ],
    profile: null, 
    status: "" 
  };

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1, message: action.newPostText, name: 'Dima M', likecounts: 222,
              }
              return {  
                ...state,
              postsData: [...state.postsData, newPost],
               
            }
              
        }
      
        case SET_USER_PROFILE: {
          return {
              ...state, profile: action.profile
          }
        }

        case SET_STATUS: {
          return {
            ...state, 
            status: action.status
          }
        }
              
        
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
      type: ADD_POST, newPostText 
    }
  }
  


  export const setStatus = (status) => {
    return {
      type: SET_STATUS, status
    }
  }

export const setUserProfile =  (profile) => {
  return{
    type: SET_USER_PROFILE, profile
  }
}

export const getUserProfile =  (userId) => (dispatch) => {
  userAPI.getProfile(userId).then(response => {
   dispatch( setUserProfile(response.data));
})
}

export const getStatus =  (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
   dispatch( setStatus(response.data));
})
}

export const updateStatus =  (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
   dispatch( setStatus(status));
})
}


export default profileReducer;