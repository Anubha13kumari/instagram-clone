import React from 'react'
import './post.css';
import Avatar from '@mui/material/Avatar';

function Posts({ username,caption,imageUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
      <Avatar className='post__avatar' alt='Rafehqazi' src="/static/images/avatar/1.jpg" >
      </Avatar>
        <h3>{username}</h3>
        </div>
     
    <img className='post__image' src={imageUrl} alt=''/>
      
        <h4 className='post__text'><strong>{username}</strong> {caption}</h4>

      
    </div>
  )
}

export default Posts