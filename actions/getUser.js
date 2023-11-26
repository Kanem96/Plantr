import axios from "axios";

const getUser = async (userId) => {
  try {
    const user = await axios.get(
      `https://elegant-tick-vestments.cyclic.app/users/${userId}`
    );
    return user.data;
  } catch (error) {
    console.log("getUser", error);
    return [];
  }
};

export default getUser;
