import { Routes, Route } from "react-router-dom";
import RootLayout from "../src/root/RootLayout";
import AuthLayout from "../src/auth/AuthLayout";
import SignUp from "../src/auth/signup";
import SignIn from "../src/auth/signin";
import Home from "./root/pages/Home";

import "./index.css";
import Search from "./root/pages/Search";
import CreatePost from "./root/pages/CreatePost";
import Profile from "./root/pages/Profile";
import LandingPageLayout from "./landing-page/components/LandingPageLayout";
import UserPage from "./root/pages/UserPage";
import Temp from "./auth/Temp";

const App = () => {
  return (
    <>
    <Routes>
    <Route index element={<LandingPageLayout />} />
    </Routes>
    <main className="flex">
      <Routes>
      
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/temp" element={<Temp />} />
        </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/userprofile/:username" element={<UserPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
