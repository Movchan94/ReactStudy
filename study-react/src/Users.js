import React from 'react';
import * as axios from 'axios'
import avaUSER from './../src/avaUSER.jpg'


const Users =(props)=> {
      
   if (props.users.length ===0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
   }

  return <div>
    {
      props.users.map(u => <div key ={u.id}>
    <span>
        <div>
        <img src = {u.photos.small !=null ? u.photos.small : avaUSER} />
        </div>
        <div>
        {u.name} 
        </div>
        </span>
        <span>
          <div>
            {u.followed 
            ? <button onClick = {()=> {props.unfollow(u.id)}}>Unfollow</button> 
            : <button onClick = {()=> {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
    
      </div>
        )
    }
  </div>
}
export default Users;
