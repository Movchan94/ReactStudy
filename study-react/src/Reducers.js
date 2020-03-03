import React from 'react';


export const ProfileReducer =(state, action)=> {
  switch(action.type){
  case 'ADD-POST':
    let newPost = {message: state.newPostText};
    state.posts.push(newPost)
    state.newPostText = '';
  return state;

  case 'UPDATE-NEW-POST-TEXT':
    state.newPostText = action.newText;
    return state;
  }
}

export const addPostAC =()=> {
  return {type:'ADD-POST'}
}
export const updateNewPostTextAC =(text)=> {
  return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}