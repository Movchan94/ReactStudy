import profileReducer from "./Reducers"

export let store = {
    _state: {
        profile: {
            posts: [
                {message: 'Hello'},
                {message: 'Hello world'},
                {message: 'Hello lalala'},

            ],
            newPostText: 'vxdvbd'
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store;


