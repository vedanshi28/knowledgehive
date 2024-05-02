import React, { useContext, useEffect } from "react";
import profile from "../assets/icons/profile-placeholder.svg";
import { AppContext } from "../context/AppContext";
import userprofile from "../assets/icons/userprofile.png"

function UserProfileHeader({ otherUsers }) {
  //console.log(otherUsers);
  const { userProfile, getUser } = useContext(AppContext);

  useEffect(() => {
    getUser();
  }, []);
  console.log(userProfile);
  console.log(otherUsers);

  const desc = userProfile
    .filter((user) => user.name === otherUsers.name)
    .map((user) => user.userdesc);

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

        <p className="mt-6 max-w-lg text-base-regular text-light-2">{desc}</p>
      </div>
    </div>
  );
}

export default UserProfileHeader;
