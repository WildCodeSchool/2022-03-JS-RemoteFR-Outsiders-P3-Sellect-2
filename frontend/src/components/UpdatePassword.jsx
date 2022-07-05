import API from "@services/api";
import React, { useState } from "react";

function UpdatePassword({ setModal }) {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    } else {
      API.put(`/password/users/${userId}`, {
        password,
      })
        .then(() => {
          setTimeout(() => {
            setModal(true);
          }, 500);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <h2>Changer mon mot de passe:</h2>
      <form onSubmit={handleUpdatePassword}>
        <div>
          <input
            type="password"
            required
            placeholder="Nouveau mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Confirmer nouveau mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && (
            <span className="error">
              Les mots de passe ne correspondent pas
            </span>
          )}
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdatePassword;
