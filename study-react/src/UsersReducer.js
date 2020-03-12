let initialState = {
    users: [
        {id: '0',
        firstname:'Vasya',
        lastname: 'Pupkin',
        followed:true
     },
        {id: '1',
        firstname:'Lena',
        lastname: 'Lalala',
        followed:false
    },
        {id: '2',
        firstname:'Sasha',
        lastname: 'Movchan',
        followed:true
     } 
    ],
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
    case 'FOLLOW': {
        return {
            ...state,
            users:state.users.map(u=> 
                {
                    if (u.id === action.userID ){
                        return {...u, followed:true }
                    }
                    return u;
                })
            
        }
    }
    case 'UNFOLLOW': {
        return {
            ...state,
            users:state.users.map(u=> 
                {
                    if (u.id === action.userID ){
                        return {...u, followed:false }
                    }
                    return u;
                })
            
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

export default usersReducer
