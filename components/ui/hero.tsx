import React from "react";
import { rubik } from "@/app/layout";

export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className={`${rubik.className} font-black text-5xl text-maindark`}>
        Scriptive
      </h1>
      <p>
        Scriptive Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, ratione.
      </p>
    </div>
  );
}
