import React from 'react';
import './Header.css';
import headerImg from '../../images/headerImg.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitlesSm'>React & Node</span>
                <span className='headerTitlesLg'>Blog</span>
            </div>
            <img className='headerImg' src={headerImg} alt='headerImg' />
        </div>
    )
}

export default Header;