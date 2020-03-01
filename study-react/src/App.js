import React from 'react';
import './App.css';
import MyPost from "./MyPost";


const App =(props)=> {

  return (
    <div className="App">
     <MyPost
         state = {props.state}
         dispatch = {props.dispatch}
       />
    </div>
  );
}

export default App;
