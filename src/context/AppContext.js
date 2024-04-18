import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser != user) setUser(parsedUser);
    }
  }, [localStorage.getItem("user")]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
