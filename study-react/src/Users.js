import React from 'react';



const Users =(props)=> {
   if (props.users.length ===0){
    props.setUsers([
      {id: '0',
      firstname:'Vasya',
      lastname: 'Pupkin',
      followed:false
   },
      {id: '1',
      firstname:'Lena',
      lastname: 'Lalala',
      followed:false
  },
      {id: '2',
      firstname:'Sasha',
      lastname: 'Movchan',
      followed:true
   } 
     ])
   }

  return <div>
    {
      props.users.map(u => <div key ={u.id}>
        <span>
          <div>
            {u.followed 
            ? <button onClick = {()=> {props.unfollow(u.id)}}>Unfollow</button> 
            : <button onClick = {()=> {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
        <div>
          {u.firstname} 
          {u.lastname}
        </div>
        </span>
      </div>
        )
     
    }
  </div>
}
export default Users;
