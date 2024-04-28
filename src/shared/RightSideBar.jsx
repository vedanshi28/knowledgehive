import React, { useContext } from "react";
import UserCard from "../components/cards/UserCard";
import { communities, similarminds } from "../constant";
import Button from "@mui/material/Button";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
  
function RightSideBar() {
 const navigate = useNavigate();
 const {category , setCategory} = useContext(AppContext);


const handleClick=(category)=>{
  setCategory(category);
  navigate('/home');
 }
 //console.log(category)

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
               <button className="bg-indigo-400 rounded-2xl w-10 text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"  onClick={()=>handleClick('All')} >All</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"  onClick={()=>handleClick('Computer Science')}>Computer Science</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6"    onClick={()=>handleClick('Information Technology')}>Information Technology</button>
               <button className="bg-indigo-400 rounded-2xl text-center px-3 py-1 mx-1 my-1 font-medium text-white text-xs h-6 mt-2"    onClick={()=>handleClick('Artifical Intelligence')}>Artifical Intelligence</button>
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
