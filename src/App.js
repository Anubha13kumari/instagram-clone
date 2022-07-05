import { useState, useEffect } from 'react';
import './App.css';
import Post from './Posts';
import { db } from './firebase.js';

function App() {
  const [posts, setPosts] =useState([
    {
      username:"cleverQazi", 
      caption:"Wow it works", 
      imageUrl:"https://www.softwarecraftsperson.com/images/react-js.jpg"
    },
    {
      username:"clever", 
      caption:"instagram clone",
       imageUrl:"https://images.news18.com/ibnlive/uploads/2021/08/1628397369_cat-stereotypes.jpg"
    },
    {
      username:"pomerian",
       caption:"I am cute",
       imageUrl:"https://www.pupvine.com/wp-content/uploads/2021/07/white-teacup-pomeranian-puppy.jpeg"
    }
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div className="app">
      <div className='app__header'>
        <img className='app__headerImage' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt=''></img>
      </div>
      {
        posts.map(post => 
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
        )
      }
      {/* <Post username="cleverQazi" caption="Wow it works" imageUrl="https://www.softwarecraftsperson.com/images/react-js.jpg"></Post>
      <Post  username="clever" caption="instagram clone" imageUrl="https://images.news18.com/ibnlive/uploads/2021/08/1628397369_cat-stereotypes.jpg"></Post>
    <Post username="pomerian" caption="I am cute" imageUrl="https://www.pupvine.com/wp-content/uploads/2021/07/white-teacup-pomeranian-puppy.jpeg"></Post> */}
    </div>
  );
}

export default App;
