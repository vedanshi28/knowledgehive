import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfileHeader from "../../shared/ProfileHeader";
import PostCard from "../../components/cards/PostCard";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const tabs = [
  {
    index: "1",
    label: "Posts",
    url: "/posts",
  }
];

function Profile() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [fetchingPosts, setFetchingPosts] = useState(false);
  const { setLoading, setUserPosts, userPosts } = useContext(AppContext);
  const location = useLocation();
  let filteredData;

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  async function getUserPosts() {
    console.log("Fetching User Posts...");
    setLoading(true);
    let res;

    try {
      setFetchingPosts(true);
      res = await axios.get("http://localhost:5000/api/post/fetch");
      const data = res.data;
      setUserPosts(data.data);
      //console.log(data)
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      return;
    } finally {
      setFetchingPosts(false);
    }

    filteredData = res.data.data.filter((r) => {
      if (r.username === location.pathname.split("/").at(-1)) return r;
    });
    //console.log(filteredData)
    setUserPosts(filteredData);

    setLoading(false);

    return;
  }
  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <ProfileHeader />
        </div>
        <div className="w-11/12">
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
              data-tabs="tabs"
              role="list"
            >
              {tabs.map((tab, index) => (
                <li key={index} className="z-30 flex-auto text-center">
                  <button
                    onClick={handleClick}
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-white bg-inherit active:text-violet-400 hover:text-violet-400"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-3">
              {!fetchingPosts && userPosts.length === 0 ? (
                <p>No posts yet...</p>
              ) : (
                <>
                  {userPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
