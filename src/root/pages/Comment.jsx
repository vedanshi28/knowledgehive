import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../context/AppContext';
import { useState, useContext } from 'react';
import CommentCard from '../../components/cards/CommentCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:600,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY:'auto',
  pt: 2,
  px: 4,
  pb: 3,
};

  

export default function Comment({comments,lastComment}) {
  const [open, setOpen] = useState(true);
  const { loading } = useContext(AppContext);
  // console.log(posts);
  // console.log(posts.comments);
  const fiveComments=comments.sort((a, b) => b.createdAt - a.createdAt)
  const topFiveComments=fiveComments.slice(0,5);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, scrollbarWidth:'none' }}>
          <h1 id="parent-modal-title" className='font-bold'>Comments</h1>
          
          {loading ? (
            <p>Loading comments...</p>
          ) : (
            <>
           
        {topFiveComments?.map((comment,index) => (
          <CommentCard key={index} comment={comment} />
        ))}
            
          </>
          )}
        </Box>
      </Modal>
   
  );
}