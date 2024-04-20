import React, { useContext } from "react";
import Link from "@mui/material/Link";
import heart from "../../assets/icons/heart-gray.svg";
import reply from "../../assets/icons/reply.svg";
import deleteicon from "../../assets/icons/delete.svg";
import share from "../../assets/icons/share.svg";
import { AppContext } from "../../context/AppContext";

function PostCard({ id, post }) {
  //const isPostImg = author.isImg;
  //const {setFetchPost} =useContext(AppContext);
  if (post) {
    console.log(post.username);
    console.log(post.email);
    console.log(post.postTitle);
    console.log(post.postDesc);
    console.log(post.imgUrl);
    console.log(post.name);
  }

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
                  key={post.id}
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
                  src={heart}
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/comment/${id}`}>
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

                <img
                  src={deleteicon}
                  alt="delete"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                  onClick={handleDelete(post.email, post.id)}
                />
              </div>

              {/*       {isComment && comments.length > 0 && (
                <Link href={`/post/${id}`}>
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

          <Link href={`/post/${id}`}>
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
