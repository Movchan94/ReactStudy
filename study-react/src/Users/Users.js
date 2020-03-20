import React from 'react';
import styled from "./Users.module.css";
import avaUSER from "./avaUSER.jpg";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    console.log(pagesCount)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styled.UsersContainer}>

        <div className={styled.Pagination}>
            {pages.map(p => {
                return <span onClick={() => {
                    props.changeCurrentPage(p)
                }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={styled.imgUser} src={u.photos.small != null ? u.photos.small : avaUSER}/>
                </div>
                <div>
                    {u.name}
                </div>
            </span>
                <span>
                  <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                  </div>
                </span>
            </div>
             )
        }
    </div>
}

export default Users;
