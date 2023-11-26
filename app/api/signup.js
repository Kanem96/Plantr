"use server";
import postUser from "@/actions/postUser";
import bcrypt from "bcrypt";

const signUpHandler = async (data) => {
  try {
    const { email, name, password } = data;

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await postUser({
      name,
      email,
      passwordHash,
    });

    console.log(user, "in signup");
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default signUpHandler;
