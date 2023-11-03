import React from "react";
import FormalLetter from "@/components/edit/formalLetter";
import FormalLetterv2 from "@/components/edit/formalLetterv2";
import InformalLetter from "@/components/edit/informalLetter";
import Link from "next/link";
import Form from "@/components/edit/form";
import { LetterData } from "@/contexts/LetterContext";

export default function Page() {
  const { currentLetter } = LetterData();

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
          <li>
            <Link href="/templates">Create</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-[40vw_1fr] py-10 justify-items-center bg-subyellow">
        <div className="bg-subyellow mb-10 w-[85%]">
          <Form />
        </div>
        <InformalLetter />
      </div>
    </>
  );
}
