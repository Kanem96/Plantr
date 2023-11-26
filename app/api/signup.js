"use server";
import postUser from "@/actions/postUser";
import bcrypt from "bcrypt";

const signUpHandler = async (data) => {
  try {
    const { email, name, password } = data;

    const hashedPassword = await bcrypt.hash(password, 12);
    const userId = Math.round(Math.random() * 1000);

    const user = await postUser({
      userId,
      name,
      email,
      hashedPassword,
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default signUpHandler;
