import API from "@services/api";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import FileCard from "./FileCard";
import "../assets/common.css";
import "../assets/Userfiles.css";

function UserFiles({ user }) {
  const [contracts, setContracts] = useState([]);
  const [auditReports, setAuditReports] = useState([]);
  const {
    isContractSent,
    setIsContractSent,
    isAuditReportSent,
    setIsAuditReportSent,
    isNewCostReady,
    setIsNewCostReady,
  } = useContext(MainContext);

  useEffect(() => {
    API.get(`/files/users/${user}`)
      .then((res) => {
        setAuditReports(
          res.data.filter((el) => el.category.includes("Compte-rendu d'audit"))
        );
        setContracts(
          res.data.filter((el) => !el.category.includes("Compte-rendu d'audit"))
        );
        setIsAuditReportSent(false);
        setIsContractSent(false);
        setIsNewCostReady(false);
      })
      .catch((err) => console.error(err));
  }, [isAuditReportSent, isContractSent, isNewCostReady]);

  return (
    <div className="userfile">
      {auditReports.length !== 0 && <h2>Compte-rendus d'audits</h2>}
      <ul>
        {auditReports &&
          auditReports
            .map((auditReport) => {
              return (
                <li key={auditReport.id}>
                  <FileCard
                    file={auditReport}
                    files={auditReports}
                    setFiles={setAuditReports}
                    admin={sessionStorage.getItem("isAdmin")}
                  />
                </li>
              );
            })
            .reverse()}
      </ul>
      {contracts.length !== 0 && <h2>Contrats</h2>}
      <ul>
        {contracts &&
          contracts
            .map((contract) => {
              return (
                <li key={contract.id}>
                  <FileCard
                    file={contract}
                    files={contracts}
                    setFiles={setContracts}
                    admin={sessionStorage.getItem("isAdmin")}
                  />
                </li>
              );
            })
            .reverse()}
      </ul>
    </div>
  );
}

export default UserFiles;
