import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Name: {currentUser.displayName}</h1>
    </div>
  );
};

export default Profile;
