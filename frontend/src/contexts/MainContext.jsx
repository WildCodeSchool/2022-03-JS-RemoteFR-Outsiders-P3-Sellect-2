import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstConnection, setIsFirstConnection] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isFirstConnection,
        setIsFirstConnection,
        userData,
        setUserData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
