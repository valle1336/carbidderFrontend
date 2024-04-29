import React from "react";
import { useState, useEffect } from "react";

function MyProfile() {
  const [myUser, setMyUser] = useState([]);

  const fetchMyUser = async () => {
    const response = await fetch("http://localhost:8080/users/myProfile/353");
    const jsonData = await response.json();

    setMyUser(jsonData);
  };

  useEffect(() => {
    fetchMyUser();
  }, []);

  console.log(myUser);

  return (
    <>
      <div>My Profile Page!</div>
      <ul>
        {myUser.map((user) => (
          <li key={user.id}>
            <p>{user.username}</p>
            <p>{user.role}</p>
            <p>{user.points}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default MyProfile;
