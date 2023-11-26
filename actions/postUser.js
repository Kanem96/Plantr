import axios from "axios";

const postUser = async (data) => {
  try {
    const user = await axios.post(`http://localhost:3001/user`, data);
    return user;
  } catch (error) {
    console.log("postUser", error);
    return [];
  }
};

export default postUser;
