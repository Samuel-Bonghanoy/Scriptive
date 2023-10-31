import FormalLetter from "@/components/letters/formalLetter";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-2 h-[120vh]">
      <div className="bg-main">page</div>
      <FormalLetter />
    </div>
  );
}
