import { Outlet } from "react-router-dom";

import Topbar from "../shared/TopBar";
import Bottombar from "../shared/BottomBar";
import LeftSidebar from "../shared/LeftSideBar";
import RightSideBar from "../shared/RightSideBar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <RightSideBar />
      <Bottombar />
    </div>
  );
};

export default RootLayout;
