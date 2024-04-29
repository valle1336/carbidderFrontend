import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCars, setAllCars] = useState([]);

  const fetchAllCars = async () => {
    const response = await fetch("http://localhost:8080/cars/getAll");
    const jsonData = await response.json();

    setAllCars(jsonData);
  };

  useEffect(() => {
    fetchAllCars();
  }, []);

  console.log(allCars);

  return (
    <>
      <div>Hejsan från homepage</div>
      <ul>
        {allCars.map((car) => (
          <Link to={`/ViewCar/${car.id}`}>
            <li key={car.id}>
              <p>Title: {car.title}</p>
              <p>Description: {car.description}</p>
              <p>Current Bid: {car.currentBid}</p>
              <p>Buyout price: {car.buyOutPrice}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
