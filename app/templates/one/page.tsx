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
            <div className="flex flex-col px-5 py-5 text-black gap-2">
              <div>
                <h1 className="text-xl font-bold">John Smith</h1>
                <div className="flex justify-between">
                  <p className="text-xs font-semibold">Marketing Specialist</p>
                  <div>
                    <p className="text-[0.65rem]">+123-456-7890</p>
                    <p className="text-[0.65rem]">johnsmith@scriptive.com</p>
                    <p className="text-[0.65rem]">123 Anywhere St. Any City</p>
                  </div>
                </div>
                <hr className="border-1 border-black mt-3" />
              </div>
            </div>
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
