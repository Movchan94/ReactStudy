
import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers";
import usersReducer from './UsersReducer'



let reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer
})


let store = createStore(reducers)

export default store;
