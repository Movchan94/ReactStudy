import React from 'react';
import { Link } from 'react-router-dom';


const Navbar =(props)=> {
  return (
    <div>
  <div><Link to = 'posts'>Posts</Link></div>
  
  <div><Link to = 'users'>Users</Link></div>
  </div>
  )
}
export default Navbar;
