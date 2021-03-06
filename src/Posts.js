import React, { useEffect, useState } from 'react'
import './post.css';
import Avatar from '@mui/material/Avatar';
import { db } from './firebase';
import firebase from 'firebase';

function Posts({ postId,user, username,caption,imageUrl }) {
  const [comments, setComments] =useState([]);
  const [comment, setComment] =useState([]);

  useEffect( ()=> {
    let unsubscribe;
    if(postId) {
     unsubscribe=db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy('timestamp','desc')
      .onSnapshot((snapshot) => {
      setComments(snapshot.docs.map((doc) =>doc.data()));
      });
    }
    return ()=>{
      unsubscribe();
    };
  },[postId]);

  const postComment = (event)=>{
  event.preventDefault();

  db.collection("posts").doc(postId).collection("comments").add({
    text:comment,
    username:user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  setComments([]);
  }

  return (
    <div className='post'>
      <div className='post__header'>
      <Avatar 
      className='post__avatar' 
      alt='Rafehqazi'
      src="/static/images/avatar/1.jpg" >
      </Avatar>
        <h3>{username.username}</h3>
        </div>
       
    <img className='post__image' src={imageUrl} alt=''/>
      
        <h4 className='post__text'><strong>{username.username}</strong> {caption}</h4>

        <div className='post__comments'>
          <h6 style={{color:808080}}>Comments</h6>
          {comments.map((comment) => (
            <p>
              <strong style={{marginRight:3}}>{comment.username}</strong> {comment.text}
            </p>
          ))}
        </div>

        {user && (
         <form className='post__commentbox'>
          <input
          className='post__input'
          type='text'
          placeholder='Add a comment..'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          />
          <button
          disabled={!comment}
          className="post__button"
          type='submit'
          onClick={postComment}>Post
          </button>
          </form>
         )}
      
    </div>
  )
}

export default Posts