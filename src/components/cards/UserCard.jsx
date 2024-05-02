import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import userprofile from "../../assets/icons/userprofile.png"

function UserCard({ id, user }) {
  const { otherUsers, setLoading, setOtherUsers, getUser} = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, []);


async function fetchUser() {
    console.log("Fetching User...");
    setLoading(true);
    let username = location.pathname.split("/").at(-1);
    // console.log(username);

    const response = await fetch(
      `http://localhost:5000/api/user/profile/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);

    if (response.ok) {
      const json = await response.json();
      setOtherUsers(json.data);
      //console.log(json.data);

      if (json.success) {
        console.log("success");
      } else {
        console.log("failure");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
  }

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-12 w-12">
          <img
            src={userprofile}
            alt="user_logo"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{user.name}</h4>
          <p className="text-small-medium text-gray-1">@{user.username}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        href={`/userprofile/${user.username}`}
      >
        View
      </Button>
    </article>
  );
}

export default UserCard;
