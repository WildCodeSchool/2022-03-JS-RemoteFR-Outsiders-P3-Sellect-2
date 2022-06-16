import React from "react";

function UserCard({ user }) {
  return (
    <div>
      <p>
        Nom : {user.firstname} {user.lastname}
      </p>
      <p>Adresse email : {user.email}</p>
      <p>Téléphone : {user.phoneNumber}</p>
    </div>
  );
}

export default UserCard;
