import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isFirstConnection, setIsFirstConnection] = useState(false);
  const [userData, setUserData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [sponsor, setSponsor] = useState("");
  const [isAuditReportSent, setIsAuditReportSent] = useState(false);
  const [isContractSent, setIsContractSent] = useState(false);
  const [isFileSent, setIsFileSent] = useState(false);
  const [isFileModal, setIsFileModal] = useState(false);

  return (
    <MainContext.Provider
      value={{
        isFirstConnection,
        setIsFirstConnection,
        userData,
        setUserData,
        deleteModal,
        setDeleteModal,
        sponsor,
        setSponsor,
        isAuditReportSent,
        setIsAuditReportSent,
        isContractSent,
        setIsContractSent,
        isFileSent,
        setIsFileSent,
        isFileModal,
        setIsFileModal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
