"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import Input from "../(components)/Input";
import signUpHandler from "../api/signup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("signin");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "signin" ? "signup" : "signin"
    );
  }, []);

  const logIn = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const signUp = useCallback(async () => {
    try {
      await signUpHandler({
        email,
        name,
        password,
      });

      logIn();
    } catch (error) {
      console.log(error.message);
    }
  }, [email, name, password, logIn]);

  return (
    <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-white w-full h-full lg:bg-opacity-30">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </nav>
        <div className="flex flex-col justify-center gap-20 lg:flex-row">
          <div className="flex px-16 py-8 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full pb-0 lg:py-16">
            <p className="text-5xl font-semibold tracking-wider">
              <span className="text-lime-600">Plantr</span> helping you, help
              your plants.
            </p>
          </div>
          <div className="bg-lime-100 bg-opacity-70 px-16 py-16 my-0 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full lg:my-16">
            <h2 className="text-green-800 text-4xl mb-8 font-semibold">
              {variant === "signin" ? "Sign In" : "Sign Up"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "signup" && (
                <Input
                  label="Name"
                  onChange={(event) => setName(event.target.value)}
                  id="name"
                  type="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              className="bg-green-800 py-3 text-white rounded-md w-full mt-10 hover:bg-green-900 transition"
              onClick={variant === "signin" ? logIn : signUp}
            >
              {variant === "signin" ? "Sign In" : "Create an account"}
            </button>
            <p className="text-lime-500 mt-12">
              {variant === "signin"
                ? "First time using Plantr?"
                : "Already have an account?"}
              <span
                className="text-green-800 ml-1 hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "signin" ? "Create an account" : "Sign in here"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
