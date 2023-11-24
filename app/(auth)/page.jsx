import Image from "next/image";
import React from "react";
import Input from "../components/Input";

const SignInPage = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-white w-full h-full lg:bg-opacity-30">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-lime-100 bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-green-800 text-4xl mb-8 font-semibold">
              Sign In
            </h2>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
