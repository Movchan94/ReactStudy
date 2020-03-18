
import {connect} from "react-redux";
import Users from './Users'
import {followAC,unfollowAC,setUsersAC} from './UsersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userID) =>{
            dispatch(followAC(userID))
        },
        unfollow:(userID) =>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users) =>{
            dispatch(setUsersAC(users))
        },
    }
}


const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer;