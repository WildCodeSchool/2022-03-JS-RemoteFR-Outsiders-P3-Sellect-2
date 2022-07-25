import API from "@services/api";
import React, { useState, useEffect } from "react";
import "../assets/GlobalStatistics.css";

function GlobalStatistics() {
  const [usersNumber, setUsersNumber] = useState(0);
  const [auditReportsNumber, setAuditReportsNumber] = useState(0);
  const [totalGainsPerYear, setTotalGainsPerYear] = useState(0);

  const getUsersNumber = () => {
    API.get(`/users-number`)
      .then((res) => setUsersNumber(res.data.number))
      .catch((err) => console.error(err));
  };

  const getAuditReportsNumber = () => {
    API.get(`/audit-reports-number`)
      .then((res) => setAuditReportsNumber(res.data.number))
      .catch((err) => console.error(err));
  };

  const getTotalGainsPerYear = () => {
    API.get(`/total-gains-per-month`)
      .then((res) => setTotalGainsPerYear(parseInt(res.data.total, 10) * 12))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsersNumber();
    getAuditReportsNumber();
    getTotalGainsPerYear();
  }, []);

  return (
    <div>
      {usersNumber !== 0 &&
        auditReportsNumber !== 0 &&
        totalGainsPerYear !== 0 && (
          <div className="global-statistics-container">
            <h1>SELLECT C'EST AVANT TOUT</h1>
            <div className="global-statistics-content">
              <div>
                <p>
                  <span className="global-statistics-number">
                    {usersNumber}
                  </span>
                  <br />
                  <span className="global-statistics-entitled">
                    utilisateurs actifs et satisfaits
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="global-statistics-number">
                    {auditReportsNumber}
                  </span>
                  <br />
                  <span className="global-statistics-entitled">
                    compte-rendus d'audit envoyés
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="global-statistics-number">
                    {totalGainsPerYear} euros
                  </span>
                  <br />
                  <span className="global-statistics-entitled">
                    d'économies réalisées par an
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default GlobalStatistics;
