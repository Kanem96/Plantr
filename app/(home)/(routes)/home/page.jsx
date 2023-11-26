import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row px-6 gap-4">
      <section className="h-screen pr-6 border-r pt-[100px] border-neutral-150">
        <div>
          <h3 className="text-2xl font-bold">Welcome Back!</h3>
          <p>Lets see how your plants are doing</p>
          <div className="flex w-[1000px] h-[250px] rounded-md">
            <Image
              src="/images/homeBanner.jpg"
              alt="page banner showing plants"
              width={1000}
              height={250}
              style={{ objectFit: "cover" }}
              className="overflow-hidden rounded shadow-md opacity-80 my-4"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Find a new plant</h3>
        </div>
      </section>
      <section className="pt-[100px]">Your Plants</section>
    </div>
  );
};

export default Home;
