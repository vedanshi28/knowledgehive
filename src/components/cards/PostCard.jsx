import React, { useContext, useEffect, useState } from "react";
import Link from "@mui/material/Link";
import unlikedicon from "../../assets/icons/heart-gray.svg";
import likedicon from "../../assets/icons/heart-filled.svg"
import reply from "../../assets/icons/reply.svg";
import deleteicon from "../../assets/icons/delete.svg";
import share from "../../assets/icons/share.svg";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function PostCard({ _id, post }) {
  const [canDelete, setCanDelete] = useState(false);
  const {user} = useContext(AppContext);

  const deletePost = async (id) => {
    console.log("Deleting Post..")
    try {
      const response = await fetch(`http://localhost:5000/api/post/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Post deleted successfully");
      }

      // Update the state with the filtered posts (without the deleted one)
      // setFetchPost(post.filter((post) => post.email !== user.email));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleDelete = (email, id) => {
    // if(user.email==post.email){
    deletePost(id);
    //}
  };

  useEffect(()=>{
    if(user.email === post.email){
      setCanDelete(true);
    }
  },[])

  return (
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link                    //user profile pe click krne vla option
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

            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <img
                  src={liked?likedicon:unlikedicon}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                  onChange={handleLikeAndUnlike}
                />
                <Link href={`/comment/${_id}`}>
                  <img
                    src={reply}
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>

                <img
                  src={share}
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />

                {
                  canDelete?(<img
                    src={deleteicon}
                    alt="delete"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                    onClick={()=>handleDelete(post.email, post._id)}
                  />):null
                }

                
              </div>

              {/*       {isComment && comments.length > 0 && (
                <Link href={`/post/${_id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
        */}
            </div>
          </div>
        </div>
        {/* 
        <DeletePost/>
        */}
      </div>

      {/*  {!isComment && comments.length > 0 && (
        <div className="ml-1 mt-3 flex items-center gap-2">
          {comments.slice(0, 2).map((comment, index) => (
            <img
              key={index}
              src={comment.author.image}
              alt={`user_${index}`}
              width={24}
              height={24}
              className={`${index !== 0 && "-ml-5"} rounded-full object-cover`}
            />
          ))}

          <Link href={`/post/${_id}`}>
            <p className="mt-1 text-subtle-medium text-gray-1">
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </p>
          </Link>
        </div>
        
      )}
      */}
    </article>
  );
}

export default PostCard;
