import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [posts, setPosts] = useState([]); //fetch post
  const [comments, setComments] = useState([]);  //fetch comments

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser != user) setUser(parsedUser);
    }
  }, [localStorage.getItem("user")]);


  const fetchPosts = async () => {           //Fetch posts
    console.log("Fetching Posts...");
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/post/fetch');
      const data = res.data;
      setPosts(data.data);
      setComments(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during posts fetch call!");
      console.error(error);
      setLoading(false);
    }
  };

 /* const fetchComments = async () => {           //Fetch comments
    console.log("Fetching Comments...");
    setLoading(true);
    try {
      const res = await axios.get('');
      const data = res.data;
      setPosts(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during comments fetch call!");
      console.error(error);
      setLoading(false);
    }
  };
  */

  const value = {
    loading,
    setLoading,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    posts,
    fetchPosts,
    setPosts,
    comments,
    setComments
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
