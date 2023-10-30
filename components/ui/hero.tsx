import React from "react";
import { rubik } from "@/app/layout";

export default function Hero() {
  return (
    <div className="flex flex-col gap-20 w-[50%]">
      <h1 className={`${rubik.className} font-black text-6xl mt-4 text-black`}>
        Scriptive
      </h1>
      <p className="text-white text-2xl max-w-[45ch]">
        Scriptive Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, ratione.
      </p>
    </div>
  );
}
