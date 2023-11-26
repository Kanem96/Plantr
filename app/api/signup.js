import getUser from "@/actions/getUser";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, name, password } = req.body;

    const existingUser = await getUser(email);
    console.log("line 13");
    if (existingUser) {
      return res.status(422).json({ error: "Email taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const userId = Math.round(Math.random() * 1000);
    console.log(userId);

    const user = await postUser({
      userId,
      name,
      email,
      hashedPassword,
    });

    return user;
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};

export default handler;
