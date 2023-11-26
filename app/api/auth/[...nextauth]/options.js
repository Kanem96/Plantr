import getUser from "@/actions/getUser";
import { compare } from "bcrypt";
import Credentials from "next-auth/providers/credentials";

const options = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await getUser(credentials.email);

        console.log(user);
        if (!user || !user.passwordHash) {
          throw new Error("Email does not exist");
        }

        const passwordMatches = await compare(
          credentials.password,
          user.passwordHash
        );

        if (!passwordMatches) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default options;
