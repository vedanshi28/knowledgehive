import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constant";
import Button from "@mui/material/Button";
import profile from "../assets/icons/profile-placeholder.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setProfile, loading, setLoading } = useContext(AppContext);

  const fetchProfile = async () => {
    //Fetch user profile
    console.log("Fetching User Profile...");
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/user/profile/${user.username}`
      );
      const data = res.data;
      console.log(data);
      setProfile(data.data);
      setLoading(false);
      navigate(`/profile/${user.username}`);
    } catch (error) {
      console.log("Error occurred during user profile fetch call!");
      console.error(error);
      setLoading(false);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="" className="flex gap-3 items-center">
          <h1 className="font-bold text-2xl">Knowledge Hive</h1>
        </Link>

        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={fetchProfile}
        >
          <img
            src={profile}
            alt="profile"
            className="h-14 w-14 rounded-full"
            onClick={fetchProfile}
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">{user.username}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => {
          navigate("/");
          // setIsLoggedIn(false);
          localStorage.removeItem("user");
          localStorage.removeItem("isLoggedIn");
        }}
      >
        <LogoutIcon />
        <p className="small-medium lg:base-medium" onClick={handleSignOut}>
          Logout
        </p>
      </Button>
    </nav>
  );
};

export default LeftSideBar;
