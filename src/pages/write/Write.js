import React from 'react';
import './Write.css';
import postImg from '../../images/postImg.jpg';

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src={postImg} alt=''/>
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}></input>
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write;