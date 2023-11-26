import axios from "axios";

const getUser = async (email) => {
  try {
    const user = await axios.get(
      `https://elegant-tick-vestments.cyclic.app/users/emails/${email}`
    );
    return user.data;
  } catch (error) {
    console.log("getUser", error);
    return [];
  }
};

export default getUser;
