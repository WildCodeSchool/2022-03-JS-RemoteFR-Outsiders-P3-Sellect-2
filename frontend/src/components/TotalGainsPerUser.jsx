import API from "@services/api";
import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

function TotalGainsPerUser({ user, admin }) {
  const [gains, setGains] = useState([]);
  const { isGainReady, setIsGainReady, isFileDeleted, setIsFileDeleted } =
    useContext(MainContext);

  useEffect(() => {
    API.get(`/gains/users/${user}`)
      .then((res) => {
        setGains(res.data.map((el) => el.gain).reduce((a, b) => a + b) * 12);
        setIsGainReady(false);
        setIsFileDeleted(false);
      })
      .catch((err) => console.error(err));
  }, [isGainReady, isFileDeleted]);

  return (
    <div>
      {gains !== 0 && gains.length !== 0 && (
        <div>
          {admin ? (
            <p>
              <span>Economies réalisées par an:</span>{" "}
              <span className="user-gains">{gains} euros</span>
            </p>
          ) : (
            <div className="user-gains-sentence">
              <h2>
                Vous économisez actuellement
                <span className="user-gains">&nbsp;{gains} euros</span>&nbsp;par
                an.
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TotalGainsPerUser;
