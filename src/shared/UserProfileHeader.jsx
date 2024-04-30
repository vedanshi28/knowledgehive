import React from "react";
import profile from "../assets/icons/profile-placeholder.svg";

function UserProfileHeader({ otherUsers }) {
  //console.log(otherUsers);
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <div className="flex items-center gap-3">
            <div className="h-15 w-15 object-cover flex justify-center">
              <img
                src={profile}
                alt="logo"
                fill
                className="rounded-full object-cover shadow-2xl"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-left text-heading3-bold text-light-1">
                {otherUsers.name}
              </h2>
              <p className="text-base-medium text-gray-1 text-violet-400">
                {otherUsers.username}
              </p>
            </div>
          </div>
          
        </div>

        <p className="mt-6 max-w-lg text-base-regular text-light-2">
          I'm Vedanshi Mishra pursuing Btech in Information Technology from
          IIST, Indore 🧑‍💻🎓
        </p>
      </div>
    </div>
  );
}

export default UserProfileHeader;
