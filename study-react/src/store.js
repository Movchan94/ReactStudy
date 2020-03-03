import { ProfileReducer } from "./Reducers"

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
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state =  ProfileReducer(this._state, action)
        this._callSubscriber(this._state)
    }
}


window.store = store;


