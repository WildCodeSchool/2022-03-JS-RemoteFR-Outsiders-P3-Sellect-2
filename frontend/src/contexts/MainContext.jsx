import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isFirstConnection, setIsFirstConnection] = useState(false);
  const [userData, setUserData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [contracts, setContracts] = useState([]);

  return (
    <MainContext.Provider
      value={{
        isFirstConnection,
        setIsFirstConnection,
        userData,
        setUserData,
        deleteModal,
        setDeleteModal,
        contracts,
        setContracts,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
