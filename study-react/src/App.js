import React from 'react';
import './App.css';





function App() {

  let newPostElement = React.createRef()
  let addNewPost =()=>{
    let text = newPostElement.current.value
  console.log(text)
}


  return (
    <div className="App">
  <textarea ref = {newPostElement}>gfgfg</textarea>
      <button onClick={addNewPost} placeholder= 'ldfld'></button>
    </div>
  );
}

export default App;
