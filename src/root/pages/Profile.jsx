//import Image from "next/image";
//import { currentUser } from "@clerk/nextjs";
//import { redirect } from "next/navigation";
import React from "react";
import { useState } from "react";
import { TabPanel } from "@mui/base/TabPanel";

import { profileTabs } from "../../constant";
import ProfileHeader from "../../shared/ProfileHeader";

import Tabs from "@mui/material/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { Tab } from "@mui/base/Tab";
import PostCard from "../../components/cards/PostCard";
import { posts,user } from "../../constant";

//import ThreadsTab from "@/components/shared/ThreadsTab";
//import ProfileHeader from "@/components/shared/ProfileHeader";
//import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//import { fetchUser } from "@/lib/actions/user.actions";
const tabs = [
  {
    index: "1",
    label: "Posts",
    url:"/posts"
  },
  {
    index: "2",
    label: "Liked Posts",
    url: "/liked-posts",
  },
];
function Profile() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };
  //const user = await currentUser();
  //if (!user) return null;

  //const userInfo = await fetchUser(params.id);
  //if (!userInfo?.onboarded) redirect("/onboarding");

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
                  {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                currentUserId={user.username}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.children}
                isComment={post.isComment}
              />
            ))}
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
