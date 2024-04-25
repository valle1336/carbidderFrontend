import React, { useState } from "react";
import carIcon from "../footer/sport-car.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
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
            <li className="mr-6">
              <Link to="/MyProfile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
