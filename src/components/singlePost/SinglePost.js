import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SinglePost.css';
import axios from 'axios';

const SinglePost = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const [data, setData] = useState({});

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get(`/post/${pathId}`);
            setData(res.data);
        }
        getPost();
    },[pathId])

    return (
        <div className='singlepost'>
            <div className='singlepostWrapper'>
                {data.photo && (
                    <img className='singlepostImg' src={data.photo} alt='postImg' />
                )}
                <h1 className='singlepostTitle'>{data.title}
                    <div className='singlepostEdit'>
                        <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlepostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className='singlepostInfo'>
                    <span className='singlepostAuthor'>Author: <Link className='link' to={`/?user=${data.username}`}><b>{data.username}</b></Link></span>
                    <span className='singlepostDate'>{new Date(data.createdAt).toDateString()}</span>
                </div>
                <p className='singlepostDesc'>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost;