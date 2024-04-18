import React from "react";
import Link from "@mui/material/Link";
import profile from "../assets/icons/profile-placeholder.svg";
import edit from "../assets/icons/edit.svg";

//interface Props {
//  accountId: string;
//  authUserId: string;
//  name: string;
//  username: string;
//  imgUrl: string;
//  bio: string;
//  type?: string;
//}

function ProfileHeader() {
  
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
                Vedanshi
              </h2>
              <p className="text-base-medium text-gray-1 text-violet-400">
                @vedanshi
              </p>
            </div>
          </div>
          <Link href="/profile/edit">
            <div className="flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2 ">
              <img src={edit} alt="edit" width={16} height={16} />

              <p className="text-light-2 max-sm:hidden">Edit</p>
            </div>
          </Link>
        </div>

        <p className="mt-6 max-w-lg text-base-regular text-light-2">
          I'm Vedanshi Mishra pursuing Btech in Information Technology from
          IIST, Indore 🧑‍💻🎓
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;
