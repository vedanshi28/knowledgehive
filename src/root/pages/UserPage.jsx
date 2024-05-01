import React, { useContext } from "react";
import { useState, useEffect } from "react";
import PostCard from "../../components/cards/PostCard";
import UserProfileHeader from "../../shared/UserProfileHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const tabs = [
  {
    index: "1",
    label: "Posts",
    url: "/posts",
  }
];

function UserPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  const { setOtherUsers, otherUsers, setLoading, setUserPosts, userPosts } =
    useContext(AppContext);
  const location = useLocation();
  let filteredData;

  async function fetchUser() {
    console.log("Fetching User...");
    setLoading(true);
    let username = location.pathname.split("/").at(-1);
    // console.log(username);

    const response = await fetch(
      `http://localhost:5000/api/user/profile/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);

    if (response.ok) {
      const json = await response.json();
      setOtherUsers(json.data);
      // console.log(json.data);

      if (json.success) {
        console.log("success");
      } else {
        console.log("failure");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

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
          <UserProfileHeader otherUsers={otherUsers} />
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
                    onClick={() => handleClick(index)}
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-white bg-inherit active:text-violet-400 hover:text-violet-400"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-5">
              <div className="block opacity-100">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                  <a href={tabs[activeTabIndex].url}>
                    {!fetchingPosts && userPosts.length === 0 ? (
                      <p>No posts yet...</p>
                    ) : (
                      <>
                        {userPosts.map((post) => (
                          <PostCard key={post._id} post={post} />
                        ))}
                      </>
                    )}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
