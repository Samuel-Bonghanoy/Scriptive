import FormalLetter from "@/components/edit/formalLetter";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-[40vw_1fr] py-10 justify-items-center bg-main">
      <div className="bg-main">page</div>
      <FormalLetter />
    </div>
  );
}
