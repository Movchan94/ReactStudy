let initialState = {
    posts: [
        {message: 'Hello'},
        {message: 'Hello world'},
        {message: 'Hello lalala'},
    ],
    newPostText: 'vxdvbd'
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {message: state.newPostText};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: 'ADD-POST'}
}
export const updateNewPostTextAC = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}


export default profileReducer
