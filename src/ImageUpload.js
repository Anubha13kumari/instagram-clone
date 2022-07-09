import React, { useState } from 'react'
import { Button } from '@mui/material';
import {storage, db} from './firebase.js';
import firebase from 'firebase';


function ImageUpload(username) {
    const [caption, setCaption] =useState('');
    const [image, setImage]= useState('');
    const [progress,setProgress] =useState(0);
    const [url, setUrl]=useState('');

    const handleChange=(e)=> {
      if(e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

    const handleUpload = () => {
      const uploadTask =storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state__changed",
        (snapshot) => {
          // progress function.....
          const progress= Math.round(
            (snapshot.bytesTransffered / snapshot.totalBytes) *100
          );
          setProgress(progress);
        },
        (error) => {
          // error function
          console.log(error);
          alert(error.message);
        },
        () => {
          // complete function....
          storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // post image inside db
            db.collection("posts").add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              caption:caption,
              imageUrl:url,
              username:username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
        }
      )
    }
  return (
    <div>
      <process value={progress} max="100"></process>
        <input type='text' placeholder='enter the caption....' onChange={event =>setCaption(event.target.value)} value={caption}></input>
        <input type='file' onChange={handleChange}/>
        <Button onClick={handleUpload}>
          Upload
        </Button>
        </div>
  )
}

export default ImageUpload