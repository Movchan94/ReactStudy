import React from 'react';
import Post from "./Post";


const MyPost =(props)=> {
 let postElements =  props.state.posts.map(m => <Post message = {m.message}/>)

 let newPostText = React.createRef()

 let addPost =()=>{
 // props.addPost()
     props.dispatch({type:'ADD-POST'})
 }
 let onPostChange =()=>{
     let text = newPostText.current.value;
    // props.updateNewPostText(text)
     props.dispatch({type:'UPDATE-NEW-POST-TEXT'})
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
