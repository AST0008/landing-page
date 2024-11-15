"use client";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/social";
import { useRouter } from "next/navigation";
import React, { use } from "react";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  }
  return (
    <main className="flex font-mono bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-900 to-gray-950  min-h-screen p-10 text-[#D387FF99] flex-col items-center justify-center">
      <div className="flex items-center lg:pr-2 justify-center my-6">
        <div className="h-[1px] w-[100px]  bg-gradient-to-r from-transparent to-purple-500"></div>
        <span className="px-4 text-purple-500 text-lg font-semibold">
          Not Found
        </span>
        <div className="h-[1px] w-[100px] bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      <h1 className="text-7xl lg:text-[200px] 2xl:text-[200px] self-middle  font-bold lg:mb-6 ">
        404
      </h1>

      <Button
        onClick={handleClick}
        className="inline-flex h-12 animate-shimmer items-center mt-6 w-3/4 lg:w-2/5 lg:mt-0 justify-center rounded-md border border-fuchsia-400 bg-[#ad57df] bg-[length:200%_100%] hover:text-[#D387FF] px-6 font-medium text-[#230D37] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Back to Home
      </Button>

      <div className="absolute bottom-10">
        <Social />
      </div>
    </main>
  );
};

export default page;
