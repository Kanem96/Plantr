import axios from "axios";

const getPlants = async () => {
  try {
    const plants = await axios.get(
      `https://elegant-tick-vestments.cyclic.app/plants`
    );
    console.log(plants.data);
    return plants.data;
  } catch (error) {
    console.log("getPlants", error);
    return [];
  }
};

export default getPlants;
