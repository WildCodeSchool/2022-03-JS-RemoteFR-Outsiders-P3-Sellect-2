import API from "@services/api";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import FileStructureModel from "./FileStructureModel";

function UserFiles() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const { contracts, setContracts } = useContext(MainContext);
  const [auditReports, setAuditReports] = useState([]);

  useEffect(() => {
    API.get(`/files/users/${userId}`)
      .then((res) => {
        setAuditReports(
          res.data.filter((el) => el.category.includes("Compte-rendu d'audit"))
        );
        setContracts(
          res.data.filter((el) => !el.category.includes("Compte-rendu d'audit"))
        );
      })
      .catch((err) => console.error(err));
  }, [contracts]);

  return (
    <div>
      {auditReports.length !== 0 && <h2>Compte-rendus d'audits</h2>}
      <ul>
        {auditReports &&
          auditReports.reverse().map((auditReport) => {
            return (
              <li key={auditReport.id}>
                <FileStructureModel file={auditReport} />
              </li>
            );
          })}
      </ul>
      {contracts.length !== 0 && <h2>Contrats</h2>}
      <ul>
        {contracts &&
          contracts.reverse().map((contract) => {
            return (
              <li key={contract.id}>
                <FileStructureModel file={contract} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UserFiles;
