import React from "react";
import style from './style.module.css';
import userPhoto from '../../assets/image/ava.jpg';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgres, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile' + user.id}>
                        <image src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={style.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgres.some( id => id === user.id)}
                            onClick={ () => {unfollow(user.id)}}
                            >Unfollow</button>
                        : <button disabled={followingInProgres.some(id => id === user.id)}
                            onClick={ () => {follow(user.id)}}
                            >Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;