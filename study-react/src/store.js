export let store = {
    _state:  {
        posts:[
            {message:'Hello'},
            {message:'Hello world'},
            {message:'Hello lalala'},

        ],
        newPostText : 'vxdvbd'
    },
    _callSubscriber(){
        console.log('state changed')
    },


    getState(){
        return this._state
    },
    addPost(){
        let newPost = {message: this._state.newPostText};
        this._state.posts.push(newPost)
        this._state.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {message: this._state.newPostText};
            this._state.posts.push(newPost)
            this._state.newPostText = '';
            this._callSubscriber(this._state)

        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}
window.store = store;


