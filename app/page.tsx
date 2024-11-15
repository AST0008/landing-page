"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Social from "@/components/ui/social";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Algenius",
      className: "text-[#D387FF99] text-6xl lg:text-9xl font-bold  mb-12",
    },
  ];
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    console.log(email);
    router.push("/not-found");
  };

  return (
    <main className="flex font-mono bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-900 to-gray-950  min-h-screen p-10 text-[#D387FF99] flex-col items-center justify-center">
      <div className="absolute top-40 border border-2 border-fuchsia-400 rounded-lg w-10 h-10 ">
        <Image src="/favicon.png" width={40} height={40} alt="Favicon" />
      </div>
      <div className="flex items-center lg:pr-8 justify-center my-6">
        <div className="h-[1px] w-[150px]  bg-gradient-to-r from-transparent to-purple-500"></div>
        <span className="px-4 text-purple-500 text-lg font-semibold">
          Waitlist
        </span>
        <div className="h-[1px] w-[150px] bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      <h1 className="text-7xl 2xl:text-[100px] self-middle  font-bold lg:mb-6 ">
        <TypewriterEffect words={words} />
      </h1>
      <p className="mb-8 max-w-[600px] lg:text-xl bg-gradient-to-b from-fuchsia-500 to-fuchsia-100 bg-clip-text text-transparent">
        Be first in line to experience the future of AI with Algenius! Join our
        waitlist for exclusive access.
      </p>
      <div className="flex rounded-lg 2xl:w-2/5 justify-center md:w-1/2 items-center mb-4 bg-[#D387FF99] p-0 border border-slate-800">
        <form className="flex w-full items-center" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded-lg placeholder:text-fuchsia-600 text-lg  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-900 to-gray-950   m-1  px-4
             border border-slate-800 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          />
          <Button
            type="submit"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[#D387FF] bg-[length:200%_100%] hover:text-[#D387FF] px-6 font-medium text-[#230D37] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
      <div className="flex items-center mb-8">
        <img
          src="/img3.png"
          alt="User 1"
          className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2"
        />
        <img
          src="/img2.png"
          alt="User 2"
          className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2"
        />
        <img
          src="/img1.jpg"
          alt="User 2"
          className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2"
        />

        <span className="ml-4">Join 5,000+ already onboard</span>
      </div>
      <div className="absolute bottom-10">
        <Social />
      </div>
    </main>
  );
}
