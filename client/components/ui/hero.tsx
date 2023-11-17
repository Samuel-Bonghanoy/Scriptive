"use client";

import React from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[100%] h-[70%] rounded-xl items-start  bg-[#1E1E1E]">
        <div className=" w-full h-[15%] rounded-t-xl flex items-center gap-2 px-[4%] bg-[#262931]  justify-self-start">
          <span className="bg-red-400 rounded-full h-4 w-4"></span>
          <span className="bg-subyellow rounded-full h-4 w-4"></span>
          <span className="bg-green-500 rounded-full h-4 w-4"></span>
        </div>
        <div className="flex flex-col gap-10 justify-center h-full">
          <h1 className={`px-8 font-bold text-8xl  text-main tracking-wider`}>
            SCRIPTIVE
          </h1>
          <p className="text-white px-8 text-[1.8rem] mb-10 font-bold max-w-[40ch] leading-snug">
            Streamline your messages with automated letter crafting.
          </p>
        </div>
      </div>
      <div className="flex h-[30%] gap-4 w-full justify-between">
        <p className="text-white mt-6 flex items-center px-8 text-[1.2rem] font-bold leading-snug w-[75%] bg-[#1E1E1E] rounded-lg">
          A web application engineered to automate the creation of personalized
          letters and documents.
        </p>
        <button
          onClick={() => router.push("/templates")}
          className="mt-6 w-[25%] border-2 text-xl border-black px-2 py-3 rounded-md bg-pink text-black font-bold transition-all duration-[30] hover:scale-[1.01] hover:border-l-[6px] hover:border-b-[6px]"
        >
          <SouthEastIcon
            sx={{
              width: "100%",
              height: "100%",
              fill: "black",
            }}
          />
        </button>
      </div>
    </div>
  );
}
