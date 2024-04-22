import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ProfileHeader from "../../shared/ProfileHeader";
import PostCard from "../../components/cards/PostCard";
import { AppContext } from "../../context/AppContext";

const tabs = [
  {
    index: "1",
    label: "Posts",
    url: "/posts",
  },
  {
    index: "2",
    label: "Replies",
    url: "/replies",
  },
];

function Profile() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { posts, loading } = useContext(AppContext);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <ProfileHeader />
        </div>
        <div className="w-2/3">
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
                    {loading ? (
                      <p>Loading posts...</p>
                    ) : (
                      <>
                        {posts.map((post) => (
                          <PostCard key={post._id} posts={posts} />
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
export default Profile;
