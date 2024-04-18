import React from "react";
import UserCard from "../components/cards/UserCard";
import { communities,similarminds } from "../constant";
import Button from "@mui/material/Button";

function RightSideBar() {
  //const user = await currentUser();
  //if (!user) return null;

  //const similarMinds = await fetchUsers({
  //  userId: user.id,
   // pageSize: 4,
  //});

  //const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
      <Button
        className='user-card_btn'
        onClick={''}
      >
        Create Communities &nbsp; <i class="fa-solid fa-plus"></i>
      </Button>
        <h3 className='text-heading4-medium text-light-1 mt-6'>
          Suggested Communities
        </h3>

        <div className='mt-7 flex w-[350px] flex-col gap-9 text-indigo-400'>
          
               {communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType='Community'
                />
              ))}
        
            <p className='!text-base-regular text-light-3'>
              No communities yet
            </p>
          
        </div>
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
        <div className='mt-7 flex w-[350px] flex-col gap-10 text-indigo-400'>
          
            { similarminds.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType='User'
                />
              ))}
            <p className='!text-base-regular text-light-3'>No users yet</p>
         
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;