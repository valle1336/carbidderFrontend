import React, { useState, useEffect } from "react";
import carIcon from "../footer/sport-car.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navbar() {
  const { id } = useParams();
  const [myUser, setMyUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchMyUser = async () => {
    const response = await fetch(`http://localhost:8080/users/myProfile/${id}`);
    const jsonData = await response.json();

    setMyUser(jsonData);
  };

  useEffect(() => {
    fetchMyUser();
  }, []);

  useEffect(() => {
    if (myUser && myUser.id) {
      setIsLoggedIn(true);
    }
  }, [myUser]);

  console.log(myUser);
  console.log(isLoggedIn);

  return (
    <>
      {myUser && (
        <div class="flex items-center mt-4 mb-10 border-b border-gray-600">
          <img src={carIcon} alt="Car Icon" width={70} />
          <Link class="flex font-bold text-4xl mb-4">Car Bidder</Link>
          <div className="flex justify-end w-screen">
            <ul className="flex items-center font-bold">
              <li className="mr-6">
                <Link to="/Create">Create</Link>
              </li>
              <li className="mr-6">
                <Link to="/MyCars">My Cars</Link>
              </li>
              {isLoggedIn ? (
                <li className="mr-6">
                  <Link to={`/myProfile/${myUser.id}`}>Profile</Link>
                </li>
              ) : (
                <li className="mr-6">
                  <Link to="/login">Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
