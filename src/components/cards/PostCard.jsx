import React, { useContext, useEffect, useState } from "react";
import { Link, Button, Modal, Typography, Box, Input } from "@mui/material";
import unlikedicon from "../../assets/icons/heart-gray.svg";
import likedicon from "../../assets/icons/heart-filled.svg";
import replyicon from "../../assets/icons/reply.svg";
import deleteicon from "../../assets/icons/delete.svg";
import share from "../../assets/icons/share.svg";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import Comment from "../../root/pages/Comment";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  boxShadow: 24,
  p: 4,
};

function PostCard({ id, post }) {
  const [canDelete, setCanDelete] = useState(false);
  const [liked, setLiked] = useState(false);
  const { user, fetchPosts, posts, setUser, setPosts } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showComment, setShowComment] = useState(false);

  const deletePost = async (id) => {
    // console.log("Deleting Post..")
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/delete/${post._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // console.log("Post deleted successfully");
        fetchPosts();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/like/${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
          }),
        }
      );

      if (response.ok) {
        const json = await response.json();
        // console.log(json.updatedUser);
        localStorage.setItem("user", JSON.stringify(json.updatedUser));
        setUser(json.updatedUser);
        // console.log("Post Liked Successfully");
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlike = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/unlike/${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
          }),
        }
      );

      if (response.ok) {
        const json = await response.json();
        // console.log(json.updatedUser);
        localStorage.setItem("user", JSON.stringify(json.updatedUser));
        setUser(json.updatedUser);
        // console.log("Post Unliked Successfully");
      }
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  useEffect(() => {
    if (user.email === post.email) {
    setCanDelete(true);
    }
    if (user.liked_posts.includes(post._id)) {
    setLiked(true);
    } else {
    setLiked(false);
    }
  }, [posts, user]);

  const handleReply = async () => {
    if (!user) return alert("Please login first to add a comment");
    // console.log(reply);
    try {
      const res = await fetch(
        `http://localhost:5000/api/post/comment/${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user.username,
            commentDesc: reply,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      setPosts({ ...posts, comments:[...posts.comments, data]});
      toast.success("Comment posted successfully");
      setReply("");
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsReplying(false);
    }
  };


  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  if (!user) return null;
  return (
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link //user profile pe click krne vla option
              href={`/profile/${post.username}`}
              className="relative h-11 w-11"
            >
              <img
                src={post.image}
                alt="user_community_image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>

            <div className="post-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link
              href={`/profile/${post.username}`}
              className="no-underline w-fit"
            >
              <h4 className="cursor-pointer text-bold text-light-1 no-underline">
                {post.username}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2">
              {post.postTitle}
            </p>
            <p className="mt-2 text-small-regular text-light-2">
              {post.postDesc}
            </p>
            {post.imgUrl ? (
              <>
                <img
                  key={post._id}
                  src={post.imgUrl}
                  alt="post image"
                  className="post-card_img"
                />
              </>
            ) : (
              <></>
            )}

            <div className="mt-5 flex flex-row gap-3 items-center justify-between">
              <div className="flex gap-3.5">
                <img
                  src={liked ? likedicon : unlikedicon}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                  onClick={!liked ? () => handleLike() : () => handleUnlike()}
                />
                <AddCommentOutlinedIcon
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                  style={{ color: "#404063" }}
                  onClick={handleOpen}
                />

                <p
                  className="text-subtle-medium text-gray-400 cursor-pointer"
                  onClick={handleShowComment}
                >
                  {post.comments.length} repl
                  {post.comments.length > 1 ? "ies" : "y"}
                  {showComment && (
                    <Comment
                      comments={post.comments}
                    />
                  )}
                </p>
              </div>
              <div className="flex gap-3.5">
                {canDelete ? (
                  <img
                    src={deleteicon}
                    alt="delete"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain flex justify-end"
                    onClick={() => deletePost(post._id)}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comment
          </Typography>
          <Input
            placeholder="Add Comment"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 1,
            }}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Add your comment in this field.
          </Typography>
          <Button sx={{ color: "#6875F5", mt: 2 }} onClick={handleReply}>
            Reply
          </Button>
        </Box>
      </Modal>
    </article>
  );
}

export default PostCard;
