import React, { useState } from "react";
import carIcon from "/Users/Alex Paulsson/VSCode Projekt/carbiderfrontend/src/assets/icons/sport-car.png";
import { Link } from "react-router-dom";

function Navbar() {
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
