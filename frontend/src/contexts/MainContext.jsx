import React, { useState, createContext } from "react";

const MainContext = createContext();
/* eslint-disable */
function MainContextProvider({ children }) {
  const [isFirstConnection, setIsFirstConnection] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [deleteFileModal, setDeleteFileModal] = useState(false);
  const [isAuditReportSent, setIsAuditReportSent] = useState(false);
  const [isContractSent, setIsContractSent] = useState(false);
  const [isFileSent, setIsFileSent] = useState(false);
  const [isFileModal, setIsFileModal] = useState(false);
  const [isNewCostReady, setIsNewCostReady] = useState(false);
  const [isGainReady, setIsGainReady] = useState(false);
  const [isFileDeleted, setIsFileDeleted] = useState(false);
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  return (
    <MainContext.Provider
      value={{
        isFirstConnection,
        setIsFirstConnection,
        deleteUserModal,
        setDeleteUserModal,
        isAuditReportSent,
        setIsAuditReportSent,
        isContractSent,
        setIsContractSent,
        isFileSent,
        setIsFileSent,
        isFileModal,
        setIsFileModal,
        deleteFileModal,
        setDeleteFileModal,
        isNewCostReady,
        setIsNewCostReady,
        isGainReady,
        setIsGainReady,
        isFileDeleted,
        setIsFileDeleted,
        isUserDeleted,
        setIsUserDeleted,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
/* eslint-enable */
export { MainContext, MainContextProvider };
