
import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/Reducers";
import usersReducer from './Reducers/UsersReducer'



let reducers = combineReducers({
    profile: profileReducer,
    usersPage: usersReducer
})


let store = createStore(reducers)

export default store;
