import React from 'react';
import './App.css';
import MyPostContainer from "./MyPostContainer";
import {Route} from 'react-router-dom'
import UsersContainer from './UsersContainer';
import Navbar from './Navbar'

const App =()=> {

  return (
    <div className="App">
     
      <Navbar/>

      <Route exact path="/posts">
        <MyPostContainer/>
      </Route>

      <Route exact path="/users">
        <UsersContainer/>
      </Route>
     
     
    </div>
  );
}

export default App;
