import { useState, useEffect } from 'react';
import './App.css';
import Post from './Posts';
import { db } from './firebase.js';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Input} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [posts, setPosts] =useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  
  // const handleClose = () => setOpen(false);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({
      id:doc.id,
        post: doc.data()
      })));
    })
  }, []);

const signUp =(event) => {

}

  return (
    <div className="app">
       <Modal
        open={open}
        onClose={() => setOpen(false)}
  >
     <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
           I am a modal
          </Typography> */}
          <form className='app__signup'>
          <center>
          <img 
          className='app__headerImage'
           src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' 
           alt=''></img>
          </center>
           <Input
           placeholder='username'
           type='text'
           value={username}
           onChange={(e) => setUsername(e.target.value)}></Input>
           <Input
           placeholder='email'
           type='text'
           value={email}
           onChange={(e) => setEmail(e.target.value)}></Input>
           <Input
           placeholder='password'
           type='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}></Input>

           <Button onClick={signUp}>Sign Up</Button>
           </form>
        </Box>
  </Modal>
      <div className='app__header'>
       
      </div>
       
       <Button onClick={() => setOpen(true)}>Sign Up</Button>

      {
        posts.map(({id,post}) => 
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
        )
      }
      {/* <Post username="cleverQazi" caption="Wow it works" imageUrl="https://www.softwarecraftsperson.com/images/react-js.jpg"></Post>
      <Post  username="clever" caption="instagram clone" imageUrl="https://images.news18.com/ibnlive/uploads/2021/08/1628397369_cat-stereotypes.jpg"></Post>
    <Post username="pomerian" caption="I am cute" imageUrl="https://www.pupvine.com/wp-content/uploads/2021/07/white-teacup-pomeranian-puppy.jpeg"></Post> */}
    </div>
  );
}

export default App;
