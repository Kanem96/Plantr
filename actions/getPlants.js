import axios from "axios";

const getPlants = async () => {
  try {
    const plants = await axios.get(
      `https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}`
    );
    console.log(plants.data);
    return plants.data;
  } catch (error) {
    console.log("getPlants", error);
    return [];
  }
};

export default getPlants;
