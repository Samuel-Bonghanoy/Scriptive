import React from "react";
import { rubik } from "@/app/layout";

export default function Hero() {
  return (
    <div className="flex flex-col gap-16 w-[60%]">
      <h1 className={`${rubik.className} font-black text-6xl mt-4 text-black`}>
        Scriptive
      </h1>
      <p className="text-white text-4xl max-w-[45ch]">
        Optimize your communication, streamline your thoughts with automated
        letter crafting.
      </p>
    </div>
  );
}
