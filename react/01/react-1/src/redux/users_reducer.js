import { userAPI } from "../api/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
          ],
          pageSize: 10,
          totalUsersCount: 0,
          currentPage: 2,
          isFatching: true,
          followingInProgress: [
                    2,3
          ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
           return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userID) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            
        }        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userID) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        
            
    
    case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
    }

    case TOGGLE_IS_FATCHING: {
        return {...state, isFatching: action.isFatching}
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {...state, followingInProgress: action.isFatching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id != action.userID)}
    }

    default:
        return state;
    }

}

export const followSuccess = (userID) => {
    return (
        {type:FOLLOW, userID}
    )

}

export const unfollowSuccess = (userID) => {
    return (
        {type:UNFOLLOW, userID}
    )
}

export const setUsers = (users) => {
    return (
        {type: SET_USERS, users}
    )
}

export const setCurrentPage = (currentPage) => {
    return (
        {type: SET_CURRENT_PAGE, currentPage: currentPage}
    )
}

export const setUsersTotalCount = (totalUsersCount) => {
    return (
        {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}
    )
}

export const toggleIsFatching = (isFatching) => ({type: TOGGLE_IS_FATCHING, isFatching})

export const toggleFollowingProgress = (isFatching, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFatching, userID})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFatching(true));

       userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFatching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        })
}
}

export const follow = (userID) => {
    return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));

    
    userAPI.follow(userID)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
}
}

export const unfollow = (userID) => {
    return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));

    
    userAPI.unfollow(userID)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
}
}

export default usersReducer;
