import axios from "axios";

const getUserId = async ({email}) => {
  try {
    const res = await axios.get(`https://elegant-tick-vestments.cyclic.app/users/emails/${email}`)
    console.log(res.data)
    return res.data._id
  } catch (error) {
    console.log("getUserId", error);
    return [];
  }
};

export default getUserId;
