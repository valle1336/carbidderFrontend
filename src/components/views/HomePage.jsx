import React from "react";
import { useState, useEffect } from "react";

function HomePage() {
  const [allCars, setAllCars] = useState([]);

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
      <div>Hejsan från homepage</div>
    </>
  );
}

export default HomePage;
