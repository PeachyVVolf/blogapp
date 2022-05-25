import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            const res = await axios.post("/auth/register",{
                username,
                email, 
                password
            });
            res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={e=>setUsername(e.target.value)} className='registerInput' type='text' placeholder='Enter your Username...'/>
                <label>Email</label>
                <input onChange={e=>setEmail(e.target.value)} className='registerInput' type='text' placeholder='Enter your Email...'/>
                <label>Password</label>
                <input onChange={e=>setPassword(e.target.value)} className='registerInput' type='password' placeholder='Enter your Password...'/>
                <button className='registerButton' type='submit'>Register</button>
            </form>
            <button className='registerLoginButton'><Link className='link' to='/login'>Login</Link></button>
            {error && <span style={{color:'red'}}>This Email already exists.</span>}
        </div>
    )
}

export default Register;