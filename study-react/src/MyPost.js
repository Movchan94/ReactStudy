import React from 'react';
import Post from "./Post";
import {addPostAC, updateNewPostTextAC} from './Reducers'



const MyPost =(props)=> {
 let postElements =  props.state.posts.map(m => <Post message = {m.message}/>)

 let newPostText = React.createRef()

 let addPost =()=>{
     props.dispatch(addPostAC())
 }
 let onPostChange =()=>{
     let text = newPostText.current.value;
     let action = updateNewPostTextAC(text)
     props.dispatch(action)
     console.log(text)
 }
 return (
     <div>
      <textarea onChange={onPostChange} value = {props.state.newPostText} ref = {newPostText} />
      <button onClick={addPost}>Отправить</button>
      {postElements}
     </div>
 )

}
export default MyPost;
