import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import axios from 'axios';
import userImg from '../../images/userImg.jpg';

const SideBar = () => {
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
                <img src={userImg} alt='userImg'/>
                <p>lorem ipsum vingaurdiam leviosa</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cat.map(c => (
                        <li className='sidebarListItem'><Link className='link' to={`/?cat=${c.name}`}>{c.name}</Link></li>
                    ))}
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