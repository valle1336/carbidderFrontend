import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ViewCar() {
  const { id } = useParams();
  const [car, setCar] = useState();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/cars/viewCar/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch car");
        }
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCar();
  }, [id]);

  console.log(car);

  return (
    <>
      {car && ( //Koden efter && körs enbart om värderna inte är undefined och är det undefined ignoreras det helt.
        <div>
          <h2>Car Details</h2>
          <p>Title: {car.title}</p>
          <p>Description: {car.description}</p>
          <p>Current Bid: {car.currentBid}</p>
          <p>Buyout price: {car.buyOutPrice}</p>
        </div>
      )}
    </>
  );
}

export default ViewCar;
