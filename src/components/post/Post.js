import React from 'react';
import './Post.css';
import postImg from '../../images/postImg.jpg';

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src={postImg} alt='postImg'/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>some random text to put as sample</span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
                Lorem ipsum sushi Ayaka-sama yamete kudasaii.
            </p>
        </div>
    )
}

export default Post;