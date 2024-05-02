import * as React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "@mui/material";
import userprofile from "../../assets/icons/userprofile.png"

export default function CommentCard({ comment }) {
  const { posts } = useContext(AppContext);
  return (
    <>
      <article className="flex w-full flex-col rounded-xl bg-dark p-7">
        <div className="flex items-start justify-between">
          <div className="flex w-full flex-1 flex-row gap-4">
            <div className="flex flex-col items-center">
              <Link //user profile pe click krne vla option
                href={`/profile/${comment.username}`}
                className="relative h-11 w-11"
              >
                <img
                  src={userprofile}
                  alt="user_community_image"
                  fill
                  className="cursor-pointer rounded-full"
                />
              </Link>

              <div className="post-card_bar" />
            </div>

            <div className="flex w-full flex-col">
              <Link
                href={`/profile/${comment.username}`}
                className="no-underline w-fit"
              >
                <h4 className="cursor-pointer text-bold text-light-1 no-underline">
                  {comment.username}
                </h4>
              </Link>
              <p className="mt-2 text-small-regular text-light-2">
                {comment.commentDesc}
              </p>

              <div className="mt-5 flex flex-row gap-3 items-center justify-between">
                <div className="flex gap-3.5">
                  <p className="text-sm text-gray-400 cursor-pointer">
                    {comment.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
