import React from "react";
import FormalLetter from "@/components/letters/formalLetter";
import FormalLetterv2 from "@/components/letters/formalLetterv2";
import InformalLetter from "@/components/letters/informalLetter";
import StyleIcon from "@mui/icons-material/Style";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className="bg-slate-50 pb-3 pl-[3%] text-sm text-black font-semibold breadcrumbs overflow-y-hidden ">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/templates">Templates</Link>
          </li>
        </ul>
      </div>
      <h1 className="pl-[2.5%] bg-slate-50 font-bold text-5xl py-2 mb-2 text-black tracking-wider uppercase flex items-center">
        Choose a template{" "}
        <StyleIcon
          sx={{
            width: "5rem",
            height: "3.4rem",
            fill: "#000000",
            "&:hover": { fill: "#FFC24A" },
          }}
        />
      </h1>
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 h-screen bg-subyellow items-center justify-items-center">
        <div className="h-full w-full flex justify-center">
          <div className="h-[85%] w-fit ml-2 flex flex-col gap-5 mt-[2rem]">
            <p className="self-start bg-subyellow font-bold text-3xl  text-black ">
              Business/Formal Letter
            </p>
            <Link className="h-full" href="/templates/formal">
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
            <Link className="h-full" href="/templates/formal-logo">
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
            <Link className="h-full" href="/templates/informal">
              <div className="h-[100%] max-h-[40rem] duration-200 transition-all hover:scale-[1.03] hover:shadow-black w-[28rem] bg-white rounded-md shadow-gray-600 shadow-md">
                <InformalLetter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
