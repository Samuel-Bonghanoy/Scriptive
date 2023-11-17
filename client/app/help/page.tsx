import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Steps from "@/components/ui/steps";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  return (
    <>
      <Navbar theme="yellow" />
      <div className="h-[130vh] max-w-screen bg-mainwhite text-black">
        <div className="h-full bg-mainwhite">
          <div className="hero-content max-w-[80vw] mx-auto">
            <div className="flex justify-between gap-24 mt-5">
              <div className="h-[80%] w-[80%] flex justify-center bg-mainwhite border-[3px] hover:bg-pink text-xl border-black px-2 py-3 rounded-md text-black font-bold transition-all duration-[30] hover:scale-[1.01] hover:border-l-[7px] hover:border-b-[7px]">
                <Link href="/">
                  <Image
                    src="/astro.svg"
                    alt="Scriptive Graphic"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }} // optional
                    priority
                  />{" "}
                </Link>
              </div>
              <div className="w=[20vw] flex flex-col self-center">
                <h1 className="text-5xl font-bold">What is Scriptive?</h1>
                <p className="py-6 max-w-[100ch]">
                  Scriptive is a small side project created by a Computer
                  Science student in the Philippines named Samuel Bonghanoy. It
                  is a web application engineered to automate the creation of
                  personalized letters and documents.
                </p>
                <button className="mt-6 w-[55%] border-2 text-xl border-black px-2 py-3 rounded-md bg-pink text-black font-bold transition-all duration-[30] hover:scale-[1.01] hover:border-l-[6px] hover:border-b-[6px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-w-[80%] mx-auto">
            <div className="flex flex-col items-start w-[100%]  justify-between pl-4 gap-5 mt-10">
              <h1 className="text-5xl font-bold">How to use Scriptive</h1>
              <ul className="list-decimal flex flex-col  ml-8 text-lg gap-2">
                <li>Choose a template</li>
                <li>Edit Sender Details</li>
                <li>Edit Recipient Details</li>
                <li>Edit Letter Body and Subject</li>
                <li>Apply Changes</li>
                <li>Download as PDF</li>
              </ul>
            </div>
            <div className="mockup-browser border bg-base-300 text-white w-full mt-10">
              <div className="mockup-browser-toolbar">
                <div className="input">https://scriptive.com</div>
              </div>
              <div className="flex justify-center items-center h-full  bg-base-200">
                <p className="mb-14">Should be simple.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
