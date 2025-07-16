import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create a Context
export const AppContext = createContext();

// 2. Create a Provider Component
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(true);        // state variable
  const [isSeller, setIsSeller] = useState(false); // state variable
  const [showUserLogin, setShowUserLogin] = useState(false); // state variable

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom Hook (typo fixed from "useAppConetxt" to "useAppContext")
export const useAppContext = () => {
  return useContext(AppContext);
};
