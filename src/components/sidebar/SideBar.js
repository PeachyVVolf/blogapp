import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import axios from 'axios';
import userImg from '../../images/userImg.jpg';
import { Context } from '../../context/Context';

const SideBar = () => {
    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        const getCat = async ()=>{
            const res = await axios.get('/categories');
            setCat(res.data);
        }
        getCat();
    },[]);

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                {user ? (
                    <Fragment>
                        <img src={user && PF+user.profilePic} alt='userImg'/>
                        <p>{user && user.username}</p>
                    </Fragment>
                ):(
                    <span style={{margin:'30px 0px'}}>Login to see your details</span>
                )}
            </div>
            {/* <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cat.map(c => (
                        <li className='sidebarListItem'><Link className='link' to={`/?cat=${c.name}`}>{c.name}</Link></li>
                    ))}
                </ul>
            </div> */}
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