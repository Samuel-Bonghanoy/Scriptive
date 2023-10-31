"use client";

import React from "react";
import { usePathname } from "next/navigation";
import FormalLetter from "@/components/edit/formalLetter";
import FormalLetterv2 from "@/components/edit/formalLetterv2";
import InformalLetter from "@/components/edit/informalLetter";
import Link from "next/link";
import Form from "@/components/edit/form";

export default function Page() {
  const pathName = usePathname();

  const breadcrumbs = pathName.split("/").filter((b) => b !== "");

  return (
    <>
      <div className="bg-slate-50 pb-3 pl-[3%] text-sm text-black font-semibold breadcrumbs overflow-y-hidden ">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {breadcrumbs.map((b) => (
            <li key={b}>
              <Link href="/templates">{b[0].toUpperCase() + b.slice(1)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[40vw_1fr] py-10 justify-items-center bg-subyellow">
        <div className="bg-subyellow mb-10 w-[85%]">
          <Form />
        </div>
        {breadcrumbs.at(-1) === "formal" && <FormalLetter />}
        {breadcrumbs.at(-1) === "formal-logo" && <FormalLetterv2 />}
        {breadcrumbs.at(-1) === "informal" && <InformalLetter />}
      </div>
    </>
  );
}
