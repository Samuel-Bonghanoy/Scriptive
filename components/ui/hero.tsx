import React from "react";
import { rubik } from "@/app/layout";

export default function Hero() {
  return (
    <div className="flex flex-col gap-6 w-[60%] items-start">
      <h1 className={`font-bold text-6xl mt-4 text-white tracking-wider`}>
        SCRIPTIVE
      </h1>
      <p className="text-black text-[2.8rem] font-bold max-w-[45ch] mt-4 leading-snug">
        Optimize your communication, streamline your thoughts with automated
        letter crafting.
      </p>
      <p className="text-white text-[1.35rem] font-bold max-w-[45ch] leading-snug">
        A web application engineered to automate the creation of personalized
        letters and documents.
      </p>
      <button className="mt-6 w-[20rem] border-2 text-xl border-black px-2 py-3 rounded-md bg-pink text-black font-bold transition-all duration-[30] hover:scale-[1.01] hover:border-l-[6px] hover:border-b-[6px]">
        Get Started
      </button>
    </div>
  );
}
