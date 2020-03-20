
import MyPost from "./MyPost";
import {addPostAC, updateNewPostTextAC} from "../Reducers/Reducers";
import {connect} from "react-redux";

/*
const MyPostContainer = () => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    let postChange = (text) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action)
                    }
                    let state = store.getState()

                    return (
                        <MyPost
                            addPost={addPost}
                            postChange={postChange}
                            posts={state.profile.posts}/>
                    )
                }
            }
        </storeContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText:state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        postChange: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
