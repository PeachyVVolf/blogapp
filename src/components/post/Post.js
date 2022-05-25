import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    return (
        <div className='post'>
            {post.photo && (
                <img className='postImg' src={post.photo} alt='postImg'/>
            )}
            <div className='postInfo'>
                <div className='postCats'>
                    {post.categories.map(cat=>(
                        <span className='postCat'>{cat.name}</span>
                    ))}
                    
                </div>
                <Link className='link' to={`/post/${post._id}`}><span className='postTitle'>{post.title}</span></Link>
                <hr/>
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div>
    )
}

export default Post;