import Navbar from "@/components/ui/navbar";
import React from "react";

export default async function page() {
  return (
    <div className="h-screen w-screen bg-mainwhite text-black">
      <Navbar theme="yellow" />
      <div className="flex flex-col justify-center items-center w-full gap-3">
        <h1 className="text-4xl">Steps to use Scriptive</h1>
        <ol className="flex flex-col gap-4">
          <li>Find a template that you want to use</li>
          <li>Fill up the Sender and Recipient Details</li>
          <li>Apply Changes</li>
          <li>Fill in Letter body and time of sending</li>
          <li>Apply changes</li>
          <li>Download your letter as PDF</li>
        </ol>

        <button className="px-3 py-3 w-[60%] bg-red-400">
          Get started with Scriptive
        </button>
      </div>
    </div>
  );
}
