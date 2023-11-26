"use client";
import getPlants from "@/actions/getPlants";
import React, { createContext, useContext, useState, useEffect } from "react";

const PlantsContext = createContext();

export const PlantsProvider = ({ children }) => {
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

  const contextValue = {
    plants,
    loading,
  };

  return (
    <PlantsContext.Provider value={contextValue}>
      {children}
    </PlantsContext.Provider>
  );
};

export const usePlants = () => {
  const context = useContext(PlantsContext);
  if (!context) {
    throw new Error("usePlants must be used within a PlantsProvider");
  }
  return context;
};
