//import { currentUser } from "@clerk/nextjs";
//import { redirect } from "next/navigation";
import React from "react";
import home from "../../assets/icons/home.svg"
import PostCard from "../../components/cards/PostCard";
import { posts,user } from "../../constant";
import Comment from "./Comment";


function Home() {

  return (
    <>
      <div className="flex flex-1">
        <div className="common-container">
          <div className="max-w-5xl flex-start gap-3 justify-start w-full">
            <img src={home} width={36} height={36} alt="add" />
            <h3 className="h3-bold md:h3-bold text-left w-full">Home</h3>
          </div>
          {posts.length === 0 ? (
          <p className='no-result'>No threads found</p>
        ) : (
          <>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                username={user.username}
                parentId={post.id}
                text={post.text}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.comment}
                isComment={post.isComment}
              />
            ))}
          </>
        )}

         <div className="mt-7">
           <Comment />
        </div>
        
         </div>
      </div>
    </>
  );
}

export default Home;
