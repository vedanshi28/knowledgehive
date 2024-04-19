import React from "react";
import Link from "@mui/material/Link";
import heart from "../../assets/icons/heart-gray.svg";
import reply from "../../assets/icons/reply.svg";
import share from "../../assets/icons/share.svg";

function PostCard({
  id,
  username,
  parentId,
  text,
  author,
  community,
  createdAt,
  comments,
  isComment,
}) {
  const isPostImg = author.isImg;
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${author.name}`}
              className="relative h-11 w-11"
            >
              <img
                src={author.image}
                alt="user_community_image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>

            <div className="post-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link
              href={`/profile/${author.name}`}
              className="no-underline w-fit"
            >
              <h4 className="cursor-pointer text-bold text-light-1">
                {author.name}
              </h4>
            </Link>


            <p className="mt-2 text-small-regular text-light-2">
                  {text.title}
                </p>
                <p className="mt-2 text-small-regular text-light-2">
                  {text.desc}
                </p>
            {isPostImg ? (
              <>
                
                <img
                  key={author.id}
                  src={author.imgUrl}
                  alt="post image"
                  className="post-card_img"
                />
              </>
            ) : (
              <>
                
              </>
            )}

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
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
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/post/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* 
        <DeletePost/>
        */}
      </div>

      {!isComment && comments.length > 0 && (
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
    </article>
  );
}

export default PostCard;
