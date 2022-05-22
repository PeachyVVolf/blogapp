import React from 'react';
import './SinglePost.css';
import singlepostImg from '../../images/postImg.jpg';

const SinglePost = () => {
    return (
        <div className='singlepost'>
            <div className='singlepostWrapper'>
                <img className='singlepostImg' src={singlepostImg} alt='postImg' />
            </div>
        </div>
    )
}

export default SinglePost;