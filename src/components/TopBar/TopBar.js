import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../images/userImg.jpg';
import './TopBar.css';

function TopBar() {
    const user=false;
    return (
        <div className='topBar'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-youtube"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link className='link' to='/'>HOME</Link></li>
                    <li className='topListItem'><Link className='link' to='/about'>ABOUT</Link></li>
                    <li className='topListItem'><Link className='link' to='/contact'>CONTACT</Link></li>
                    <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
                    <li className='topListItem'>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? <img className='topImage' src={userImg} alt="" />
                : 
                (
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to='/login'>LOGIN</Link></li>
                        <li className='topListItem'><Link className='link' to='/register'>REGISTER</Link></li>
                    </ul>
                )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;