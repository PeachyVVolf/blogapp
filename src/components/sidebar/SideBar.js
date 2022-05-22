import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import userImg from '../../images/userImg.jpg';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src={userImg} alt='userImg'/>
                <p>lorem ipsum vingaurdiam leviosa</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'><Link className='link' to='/posts?catId=life'>Life</Link></li>
                    <li className='sidebarListItem'><Link className='link' to='/posts?catId=music'>Music</Link></li>
                    <li className='sidebarListItem'><Link className='link' to='/posts?catId=style'>Style</Link></li>
                    <li className='sidebarListItem'><Link className='link' to='/posts?catId=sports'>Sports</Link></li>
                    <li className='sidebarListItem'><Link className='link' to='/posts?catId=tech'>Tech</Link></li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar;