import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MyProfile() {
  const { id } = useParams();
  const [myUser, setMyUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users/myProfile/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setMyUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <div>My Profile Page!</div>
      {myUser && ( //Koden efter && körs enbart om värderna inte är undefined och är det undefined ignoreras det helt.
        <div>
          <h2>User Details</h2>
          <p>Username: {myUser.username}</p>
        </div>
      )}
    </>
  );
}
export default MyProfile;
