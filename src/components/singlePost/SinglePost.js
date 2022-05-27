import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './SinglePost.css';
import axios from 'axios';

const SinglePost = () => {
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const [data, setData] = useState({});
    const [title, settitle] = useState(" ")
    const [desc, setdesc] = useState(" ")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/post/${pathId}`);
            setData(res.data);
            settitle(data.title);
            setdesc(data.desc);
        }
        getPost();
    }, [pathId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/post/${data._id}`, { data: { username: user.username } })
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/post/${data._id}`,  { username: user.username, title, desc } );
            window.location.reload();
        } catch (err) { }
    }

    return (
        <div className='singlepost'>
            <div className='singlepostWrapper'>
                {data.photo && (
                    <img className='singlepostImg' src={PF + data.photo} alt='postImg' />
                )}{
                    updateMode ? 
                        <input type="text" defaultValue={data.title} className=" singlepostTitleInput" onChange={e => settitle(e.target.value)}
                            autoFocus
                        ></input> : 
                        (
                            <h1 className='singlepostTitle'>{data.title}
                                {data.username === user?.username && (

                                    <div className='singlepostEdit'>
                                        <i className="singlepostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlepostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                                    </div>
                                )}
                            </h1>
                        )
                    }
                <div className='singlepostInfo'>
                    <span className='singlepostAuthor'>Author: <Link className='link' to={`/?user=${data.username}`}><b>{data.username}</b></Link></span>
                    <span className='singlepostDate'>{new Date(data.createdAt).toDateString()}</span>
                </div>
                {updateMode ? 
                    (<textarea className="singlepostDescInput" defaultValue={data.desc} onChange={e => setdesc(e.target.value)}></textarea>)
                    : 
                    (
                        <p className='singlepostDesc'>

                            {data.desc}
                        </p>
                    )
                }
                {updateMode && (
                    <button className='singlePostBtn' onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SinglePost;