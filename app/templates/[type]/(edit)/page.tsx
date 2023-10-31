import FormalLetter from "@/components/edit/formalLetter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-slate-50 pb-3 pl-[3%] text-sm text-black font-semibold breadcrumbs overflow-y-hidden ">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Templates</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-[40vw_1fr] py-10 justify-items-center bg-subyellow">
        <div className="bg-subyellow mb-10">page</div>
        <FormalLetter />
      </div>
    </>
  );
}
