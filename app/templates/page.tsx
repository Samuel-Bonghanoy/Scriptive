import React from "react";
import FormalLetter from "@/components/letters/formalLetter";
import FormalLetterv2 from "@/components/letters/formalLetterv2";
import InformalLetter from "@/components/letters/informalLetter";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Business/Formal Letter
          </p>
          <Link className="h-full" href="/formalv1">
            <div className="h-[100%] max-h-[40rem] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
              <FormalLetter />
            </div>
          </Link>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Formal Letter with Logo
          </p>
          <Link className="h-full" href="/formalv2">
            <div className="h-[100%] max-h-[40rem] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
              <FormalLetterv2 />
            </div>
          </Link>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Informal Letter
          </p>
          <Link className="h-full" href="/informal">
            <div className="h-[100%] max-h-[40rem] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
              <InformalLetter />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
