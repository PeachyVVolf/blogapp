import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './TopBar.css';

function TopBar() {
    const {user, dispatch }=useContext(Context);

    const PF = "http://localhost:5000/images/";

    const handleLogOut = () => {
        dispatch({type:"LOGOUT"});
    }
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
                    {user && (
                    <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
                    )}
                </ul>
            </div>
            <div className='topRight'>
                {!user ? 
                <Fragment>
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to='/login'>LOGIN</Link></li>
                        <li className='topListItem'><Link className='link' to='/register'>REGISTER</Link></li>
                    </ul>
                </Fragment> :
                <Fragment>
                    <Link to='/settings'><img className='topImage' src={PF + user.profilePic} alt="" /></Link>
                    <ul className='topList'>
                        <li className='topListItem' onClick={handleLogOut}>LOGOUT</li>
                    </ul>
                </Fragment>
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;