import React, { useContext } from "react";
import { useState, useEffect } from "react";
import PostCard from "../../components/cards/PostCard";
import UserProfileHeader from "../../shared/UserProfileHeader";

import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";

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

function UserPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  const { user, loading, setOtherUsers, otherUsers, posts} = useContext(AppContext)
	const { username } = useParams();
	const [fetchingdata, setFetchingData] = useState(true);

	useEffect(() => {
		const getUser = async () => {
			if (!user) return;
			setFetchingData(true);
			try {
				const res = await fetch(`http://localhost:5000/api/user/profile/${username}`);
				const data = await res.json();
				setOtherUsers(data);
        //console.log(data)
			} catch (error) {
				console.log("Error", error.message, "error");
				setOtherUsers([]);
			} finally {
				setFetchingData(false);
			}
		};

		getUser();
	}, [ username ]);
  //console.log(otherUsers)


  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <UserProfileHeader otherUsers={otherUsers}/>
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
export default UserPage;
