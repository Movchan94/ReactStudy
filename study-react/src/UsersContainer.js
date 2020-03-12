import React from 'react';
import {connect} from "react-redux";
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}


const usersContainer = connect(mapStateToProps)(Users)

export default usersContainer;