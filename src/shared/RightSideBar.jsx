import React from "react";
import UserCard from "../components/cards/UserCard";
import { communities, similarminds } from "../constant";
import Button from "@mui/material/Button";
import Breadcrumbs from '@mui/material/Breadcrumbs';
  

function RightSideBar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <Button className="user-card_btn" onClick={""}>
          Create Communities &nbsp; <i class="fa-solid fa-plus"></i>
        </Button>
        <h3 className="text-heading4-medium text-light-1 mt-6">
          Suggested Categories
        </h3>

        <div className="mt-7 flex w-[350px] flex-col gap-9 text-indigo-400">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <div className="inline flex-col">
               <button className="bg-indigo-400 rounded-2xl w-10 text-center px-3 py-1 mx-1 my-1 font-medium text-black text-xs h-6">All</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-black text-xs h-6">Computer Science</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-black text-xs h-6">Information Technology</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-black text-xs h-6 mt-2">Artifical Intelligence</button>
              </div>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>
        <div className="mt-7 flex w-[350px] flex-col gap-10 text-indigo-400">
          {similarminds.map((person) => (
            <UserCard
              key={person.id}
              id={person.id}
              name={person.name}
              username={person.username}
              imgUrl={person.image}
              personType="User"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;
