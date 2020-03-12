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
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users],
            }
        }
        default:
            return state;
    }
}

export const followAC = () => {
    return {type: 'FOLLOW'}
}

export const unfollowAC = () => {
    return {type: 'UNFOLLOW'}
}

export default usersReducer
