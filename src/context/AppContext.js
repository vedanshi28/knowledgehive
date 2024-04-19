import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [fetchpost, setFetchPost] = useState([]); //fetch post

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser != user) setUser(parsedUser);
    }
  }, [localStorage.getItem("user")]);


  const postData = async () => {           //Fetch posts
    console.log("Fetching Posts...");
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/post/fetch');
      const data = res.data;
      setFetchPost(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      setLoading(false);
    }
  };


  const value = {
    loading,
    setLoading,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    fetchpost,
    postData
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
