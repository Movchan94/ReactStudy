import React from 'react';
import * as axios from 'axios'
import avaUSER from './../src/avaUSER.jpg'


class  Users extends React.Component {

  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }
 
render(){
  let pagesCount = this.props.totalCount / this.props.pageSize;
  console.log(pagesCount)
  let pages = [];
  for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
  }
return <div>
  <div>
    {pages.map(p => {
     return <span>{p}</span>
    })}
  </div>
{
  this.props.users.map(u => <div key ={u.id}>
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
        ? <button onClick = {()=> {this.props.unfollow(u.id)}}>Unfollow</button> 
        : <button onClick = {()=> {this.props.follow(u.id)}}>Follow</button>}
      </div>
    </span>

  </div>
    )
}
</div>
}

} 
     
export default Users;
