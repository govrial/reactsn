import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from "redux-form";


let reducersPackage = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducersPackage,  applyMiddleware(thunkMiddleware));


export default store;