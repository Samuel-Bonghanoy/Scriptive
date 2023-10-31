import React from "react";

export default function page() {
  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Business/Formal Letter
          </p>
          <div className="h-[95%] w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            {" "}
            yes
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Business/Formal Letter #2
          </p>
          <div className="h-[95%] w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            {" "}
            yes
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
          <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
            Informal Letter
          </p>
          <div className="h-[95%] w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
            {" "}
            yes
          </div>
        </div>
      </div>
    </>
  );
}
