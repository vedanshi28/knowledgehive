import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../context/AppContext";
import { useState, useContext } from "react";
import CommentCard from "../../components/cards/CommentCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 600,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "auto",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Comment({ comments, commentLength }) {
  const [open, setOpen] = useState(true);
  const { loading,posts } = useContext(AppContext);
  const timestamp=comments.date;
  
  const fiveComments = comments.sort((a, b) => b.timestamp - a.timestamp);
  const topFiveComments = fiveComments.slice(-5);

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
      <Box sx={{ ...style, width: 500, scrollbarWidth: "none" }}>
        <h1 id="parent-modal-title" className="font-bold text-xl">
          Comments
        </h1>

        {commentLength == 0 ? (
          <h2 className="text-gray-400 mt-10">No comments yet</h2>
        ) : (
          <>
            {topFiveComments?.map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))}
          </>
        )}
      </Box>
    </Modal>
  );
}
