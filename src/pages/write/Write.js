import React, { useContext, useState, useEffect } from 'react';
import './Write.css';
import postImg from '../../images/postImg.jpg';
import axios from 'axios';
import { Context } from '../../context/Context';

const Write = () => {

    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const [cat, setCat] = useState([]);

    const handlePublish = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username: user.username,
            categories: cat
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.post("/post", newPost);
            window.location.replace("/post/"+res.data._id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='write'>
            <img className='writeImg' src={file? URL.createObjectURL(file) : postImg} alt=''/>
            <form className='writeForm' onSubmit={handlePublish}>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}} onChange={e => setFile(e.target.files[0])}></input>
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                {/* <div className='writeFormGroup'>
                    <input type='text' placeholder='Category' className='writeInput' onChange={e => setCat(e.target.value)}></input>
                </div> */}
                <button className='writeSubmit' type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write;