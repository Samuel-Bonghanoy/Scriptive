import React from "react";
import FormalLetter from "@/components/letters/formalLetter";
import FormalLetterv2 from "@/components/letters/formalLetterv2";
import InformalLetter from "@/components/letters/informalLetter";

export default function page() {
  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Business/Formal Letter
          </p>
          <div className="h-[95%] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            <FormalLetter />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Business/Formal Letter #2
          </p>
          <div className="h-[95%] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            <FormalLetterv2 />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Informal Letter
          </p>
          <div className="h-[95%] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            <InformalLetter />
          </div>
        </div>
      </div>
    </>
  );
}
