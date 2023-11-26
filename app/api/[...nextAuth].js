import getUser from "@/actions/getUser";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

NextAuth({
  providers: [
    Credentials({
      id: "crendentials",
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
        if (credentials?.email || credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await getUser(credentials.email);

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
  secret: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});

export default NextAuth;
