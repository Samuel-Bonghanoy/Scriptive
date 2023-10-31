"use client";

import { usePathname } from "next/navigation";
import FormalLetter from "@/components/edit/formalLetter";
import React from "react";

export default function Page() {
  const pathName = usePathname();

  const breadcrumbs = pathName.split("/").filter((b) => b !== "");

  console.log(breadcrumbs);
  return (
    <>
      <div className="bg-slate-50 pb-3 pl-[3%] text-sm text-black font-semibold breadcrumbs overflow-y-hidden ">
        <ul>
          <li>
            <a>Home</a>
          </li>
          {breadcrumbs.map((b) => (
            <li key={b}>
              <a>{b[0].toUpperCase() + b.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[40vw_1fr] py-10 justify-items-center bg-subyellow">
        <div className="bg-subyellow mb-10">page</div>
        <FormalLetter />
      </div>
    </>
  );
}
