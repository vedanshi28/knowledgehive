import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [posts, setPosts] = useState([]); //fetch post
  const [comments, setComments] = useState([]);  //fetch comments
  const [profile, setProfile] = useState([]);    //fetch user profile
  const [otherUsers , setOtherUsers] = useState([]);  //fetch other user !current
  const [userPosts , setUserPosts] = useState([]);
  const [category, setCategory] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [fetchCategory, setFetchCategory] = useState([]);

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

  const fetchCategoryPosts = async () => {           //Fetch category posts
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/category/fetch');
      const data = res.data;
      setFetchCategory(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during posts fetch call!");
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
    posts,
    fetchPosts,
    setPosts,
    comments,
    setComments,
    profile,
    setProfile,
    otherUsers,
    setOtherUsers,
    userPosts,
    setUserPosts,
    selectedCategory, 
    setSelectedCategory,
    fetchCategoryPosts,
    category,
    setCategory,
    fetchCategory,
    setFetchCategory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
