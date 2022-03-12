import React, { useState } from 'react';
import {MenuList } from './MenuList';
import './NavBar.css';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const menuList = MenuList.map(({url,title},index)=>{
            return(
                <li className='list-unstyled' key={index}>
                    <NavLink className='link' activeClassName='active' exact to={url} >{title}
                    </NavLink>
                </li>
            )
    })
    const [menuShow, setMenuShow] = useState(true);
    const onMenuClickHandler = () =>{
        setMenuShow(!menuShow)
    }
    return (
        <nav>
            <div className="logo-menu-icon">
                <div className="logo">
                    EXPO <span>INFO</span>
                </div>
                <div className="menu-icon" onClick={onMenuClickHandler}> 
                <i className={menuShow ? 'fa fa-bars' : 'fas fa-times'}></i>
                </div>
            </div>
            {menuShow &&
            <div className={menuShow ? "menu-list close" : 'menu-list'}>
                {menuList}
            </div>
            }
        </nav>
    );
};

export default NavBar;