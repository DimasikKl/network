import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale' alt=''/>
        
            <div className={s.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to='/login'>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header;