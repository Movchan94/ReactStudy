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

            let stateCopy = {...state}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}

            stateCopy.newPostText = action.newText;
            return stateCopy;
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
