import React from 'react';
import Post from "./Post";



const MyPost = (props) => {

    let postElements = props.posts.map(m => <Post message={m.message}/>)

    let newPostText = React.createRef()

    let onAddPost = () => {
        props.addPost()
        newPostText.current.value = ''
    }
    let onPostChange = () => {
        let text = newPostText.current.value;
        props.postChange(text)
    }
    return (
        <div>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostText}/>
            <button onClick={onAddPost}>Отправить</button>
            {postElements}
        </div>
    )

}
export default MyPost;
