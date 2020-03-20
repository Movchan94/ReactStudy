import {connect} from "react-redux";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC
} from '../Reducers/UsersReducer'
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../Preloader'
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    changeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            changeCurrentPage={this.changeCurrentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
        </>
    }

}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default usersContainer;
