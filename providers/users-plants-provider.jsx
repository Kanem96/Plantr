"use client";

import getUser from "@/actions/getUser";
import { createContext, useContext, useEffect, useState } from "react";

const UsersPlantsContext = createContext();

export const UsersPlantsProvider = ({ children }) => {
  const [usersPlants, setUsersPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsersPlants = async () => {
      const user = await getUser(1);
      const plants = user.plants;
      setUsersPlants(plants);
      setLoading(false);
    };

    fetchUsersPlants();
  }, []);

  const contextValue = {
    usersPlants,
    loading,
  };

  return (
    <UsersPlantsContext.Provider value={contextValue}>
      {children}
    </UsersPlantsContext.Provider>
  );
};

export const useUsersPlants = () => {
  const context = useContext(UsersPlantsContext);

  if (!context) {
    throw new Error("useUsersPlants must be used within a UsersPlantsProvider");
  }

  return context;
};
