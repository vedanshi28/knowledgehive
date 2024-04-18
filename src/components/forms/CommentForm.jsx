import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { author: 'Anonymous', text: commentText };
    onSubmit(newComment);
    setCommentText(''); // Clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={commentText} onChange={handleChange} />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
