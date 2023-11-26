import axios from "axios";

const postUser = async (data) => {
  try {
    const user = await axios.post(
      `https://elegant-tick-vestments.cyclic.app/users`,
      data
    );
    console.log(user, "in postUSER");
    return user;
  } catch (error) {
    console.log("postUser", error);
    return [];
  }
};

export default postUser;
