import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <MainContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
