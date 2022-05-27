import React, { useContext, useEffect, useState } from 'react';
import './Settings.css';
import Sidebar from '../../components/sidebar/SideBar';
import { Context } from '../../context/Context';
import axios from 'axios';

const Settings = () => {

    const PF = "http://localhost:5000/images/";
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword(user.password);
    },[])

    const handlePublish = async (e) => {
        dispatch({type:"UPDATE_START"});
        e.preventDefault();
        const updatedUser = {
            username,
            email,
            password,
            userId: user._id,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put(`/user/${user._id}`, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload:res.data});
        } catch (err) {
            console.log(err);
            dispatch({type:"UPDATE_FAILURE"});
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`/user/${user._id}`, { data: { userId: user._id } })
            dispatch({type:"LOGOUT"});
        } catch (err) { }
    };

    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle' onClick={handleDelete}>Delete Account</span>
                </div>
                <form className='settingsForm' onSubmit={handlePublish}>
                    <label>Profile Picture</label>
                    <div className='settingsProfilePic'>
                        <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt='pfpPic'/>
                        <label htmlFor='fileInput'>
                            <i className="settingsProfilePicIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}} onChange={e => setFile(e.target.files[0])}></input>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder={username} onChange={e => setUsername(e.target.value)}></input>
                    <label>Email</label>
                    <input type='email' placeholder={email} onChange={e => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' onChange={e => setPassword(e.target.value)}></input>
                    <button className='settingsSubmit' type="submit">Update</button>
                    {success && <span style={{color:'green', textAlign:'center', marginTop:'20px'}}>Profile Updated</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings;