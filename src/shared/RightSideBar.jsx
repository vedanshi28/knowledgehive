import React, { useContext, useEffect } from "react";
import UserCard from "../components/cards/UserCard";
import { similarminds } from "../constant";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { AppContext } from "../context/AppContext";

function RightSideBar() {
  const {  setCategory, userProfile , getUser } = useContext(AppContext);

  const handleClick = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    getUser();
  }, []);
  //console.log(userProfile)

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-col justify-start">
        
        <h3 className="text-heading4-medium text-light-1 mt-6">
          Suggested Categories
        </h3>

        <div className="mt-7 flex w-[350px] flex-col gap-9 text-indigo-400">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <div className="inline flex-col">
                <button
                  className="bg-indigo-400 rounded-2xl w-10 text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"
                  onClick={() => handleClick("all")}
                >
                  All
                </button>
                <button
                  className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"
                  onClick={() => handleClick("cse")}
                >
                  Computer Science
                </button>
                <button
                  className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"
                  onClick={() => handleClick("it")}
                >
                  Information Technology
                </button>
                <button
                  className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6 mt-2"
                  onClick={() => handleClick("ai")}
                >
                  Artifical Intelligence
                </button>
              </div>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>
        <div className="mt-7 flex w-[350px] flex-col gap-10 text-indigo-400">
          {userProfile?.map((user) => (
            <UserCard
              key={user._id}
              user={user}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;
