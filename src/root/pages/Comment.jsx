import React from "react";
import reply from "../../assets/icons/reply.svg"
import { Link } from "@mui/material";

const Comment = ({author,id}) => (
    <div
      className='w-full flex flex-col rounded-xl bg-dark-2 p-7'>
      <div className="w-full flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">

            <div className="post-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link
              href={`/profile/${author}`}
              className="no-underline w-fit"
            >
              <h4 className="cursor-pointer text-bold text-light-1">
                Luffy
              </h4>
            </Link>


            <p className="mt-2 text-small-regular text-light-2">
                  hello
                </p>
                
            

            <div className= "mb-10 flex flex-col gap-3">
              <div className="flex gap-3.5">
                
                <Link href={`/comment/${id}`}>
                  <img
                    src={reply}
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Comment;
  