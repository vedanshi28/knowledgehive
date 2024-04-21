import React, { useContext, useEffect } from "react";
import home from "../../assets/icons/home.svg";
import PostCard from "../../components/cards/PostCard";
//import Comment from "./Comment";
import { AppContext } from "../../context/AppContext";
import Loader from "../../shared/Loader";

function Home() {
  const { posts, fetchPosts, loading } = useContext(AppContext);
  useEffect(() => {
    fetchPosts();
  }, []);

  if(!posts) return <p>No posts yet</p>
  return (
    <>
      <div className="flex flex-1">
        <div className="common-container">
          <div className="max-w-5xl flex-start gap-3 justify-start w-full">
            <img src={home} width={36} height={36} alt="add" />
            <h3 className="h3-bold md:h3-bold text-left w-full">Home</h3>
          </div>
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <>
              {posts?.map((post) => (
                <PostCard key={post._id} post={post}/>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
