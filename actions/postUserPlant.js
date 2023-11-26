import axios from "axios";

const postUserPlant = async (userId, plant) => {
  try {
    const postedPlant = await axios.post(
      `https://elegant-tick-vestments.cyclic.app/users/${userId}/plants`,
      plant
    );
    console.log(postedPlant, "in postUSER");
    return postedPlant;
  } catch (error) {
    console.log("postPlant", error);
    return [];
  }
};

export default postUserPlant;
