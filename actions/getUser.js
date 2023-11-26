import axios from "axios";

const getUser = async (email) => {
  try {
    const user = await axios.get(`http://localhost:3001/users/${email}`);
    console.log(user.data);
    return user.data;
  } catch (error) {
    console.log("getUser", error);
    return [];
  }
};

export default getUser;
