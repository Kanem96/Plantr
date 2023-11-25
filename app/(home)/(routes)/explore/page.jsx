"use client";
import getPlants from "@/actions/getPlants";
import React, { useEffect, useState } from "react";

const ExplorePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const allPlants = await getPlants();
        setPlants(allPlants);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plants:", error);
        setPlants([]);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(plants) ? (
        plants.map((plant) => <p key={plant.id}>{plant.id}</p>)
      ) : (
        <p>Plants data is not an array</p>
      )}
    </>
  );
};

export default ExplorePlants;
