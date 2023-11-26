import axios from "axios";

const getPlant = async (id) => {
  try {
    const plant = await axios.get(
      `https://perenual.com/api/species/details/${id}?key=${process.env.PERENUAL_API_KEY}`
    );
    console.log(plant.data);
    return plant.data;
  } catch (error) {
    console.log("getPlant", error);
    return [];
  }
};

export default getPlant;
