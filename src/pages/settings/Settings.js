import React from 'react';
import './Settings.css';
import Sidebar from '../../components/sidebar/SideBar';
import userImg from '../../images/userImg.jpg';

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsProfilePic'>
                        <img src={userImg} alt='pfpPic'/>
                        <label htmlFor='fileInput'>
                            <i className="settingsProfilePicIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}></input>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Ahmad'></input>
                    <label>Email</label>
                    <input type='email' placeholder='some@gmail.com'></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings;