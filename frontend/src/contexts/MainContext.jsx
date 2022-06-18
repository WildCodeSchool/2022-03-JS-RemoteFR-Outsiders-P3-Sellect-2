import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstConnection, setIsFirstConnection] = useState(false);

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isFirstConnection,
        setIsFirstConnection,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
