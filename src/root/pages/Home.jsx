import React, { useContext, useEffect, useState } from "react";
import home from "../../assets/icons/home.svg";
import PostCard from "../../components/cards/PostCard";
import { AppContext } from "../../context/AppContext";

function Home() {
  const { posts, fetchPosts, loading, selectedCategory, fetchCategoryPosts } =
    useContext(AppContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchCategoryPosts();
  }, []);

  const filterPosts = (posts, selectedCategory) => {
    if (!selectedCategory) {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  };

  useEffect(() => {
    const filtered = filterPosts(posts, selectedCategory);
    setFilteredPosts(filtered);
  }, [posts, selectedCategory]);

  if (!posts) return <p>No posts yet</p>;
  return (
    <>
      <div className="flex flex-1">
        <div className="common-container">
          <div className="max-w-5xl flex-start gap-3 justify-start w-full">
            <img src={home} width={36} height={36} alt="add" />
            <h3 className="h3-bold md:h3-bold text-left w-full">Home</h3>
          </div>
          {/*
          {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <Post key={post.id} title={post.title} content={post.content} category={post.category} />
          ))}
        </ul>
      ) : (
        <p>No posts found for this category.</p>
      )}
          */}
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <>
              {filteredPosts.length > 0 ? (
                <ul>
                  {filteredPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </ul>
              ) : (
                <>
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
