import React from "react";
import carIcon from "/VS CODE Projekt/CarBider_Frontend/carbiderfrontend/src/assets/icons/sport-car.png";

function Navbar() {
  return (
    <>
      <div class="flex justify-center mt-4 mb-10">
        <a class="font-bold text-4xl pr-2">Car Bidder</a>
        <img src={carIcon} alt="Navbar Icon" width={45} />
      </div>
    </>
  );
}

export default Navbar;
