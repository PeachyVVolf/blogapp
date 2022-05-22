import React from 'react';
import './TopBar.css';

function TopBar() {
    return (
        <div className='topBar'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-youtube"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImage' src="https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;