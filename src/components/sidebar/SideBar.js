import React from 'react';
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
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
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