let initialState = {
    users: [],
    pageSize: 10,
    totalCount:  0,
    currentPage: 2,
    isFetching: true
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })

            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_TOTAL_COUNT': {
            return {
                ...state,
                totalCount: action.count
            }
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return {type: 'FOLLOW', userID}
}

export const unfollowAC = (userID) => {
    return {type: 'UNFOLLOW', userID}
}

export const setUsersAC = (users) => {
    return {type: 'SET_USERS', users}
}
export const setCurrentPageAC = (currentPage) => {
    return {type: 'SET_CURRENT_PAGE', currentPage}
}
export const setTotalCountAC = (totalCount) => {
    return {type: 'SET_TOTAL_COUNT', count:totalCount}
}
export const setIsFetchingAC = (isFetching) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching}
}
export default usersReducer
