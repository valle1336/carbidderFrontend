import React, { useState } from "react";
import carIcon from "/VS CODE Projekt/CarBider_Frontend/carbiderfrontend/src/assets/icons/sport-car.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [allCars, setAllCars] = useState();

  const fetchAllCars = async () => {
    const response = await fetch("http://localhost:8080/getAllCars");
    const jsonData = await response.json();

    setAllCars(jsonData);
    console.log(allCars);
  };

  useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <>
      <div class="flex items-center mt-4 mb-10 border-b border-gray-600">
        <Link class="flex font-bold text-4xl mb-4">
          <img src={carIcon} alt="Navbar Icon" className="mr-2" width={70} />
          Car Bidder
        </Link>
        <div className="flex justify-end w-screen">
          <ul className="flex items-center font-bold">
            <li className="mr-6">
              <Link to="/createAd">Create</Link>
            </li>
            <li className="mr-6">
              <Link to="/myCars">My Cars</Link>
            </li>
            <li className="mr-6">
              <Link to="/myProfile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
