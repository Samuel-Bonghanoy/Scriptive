"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Steps from "@/components/ui/steps";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";
import SocialMedia from "@/components/ui/socialMedia";

export default function Page() {
  const [state, handleSubmit] = useForm("xdorbdze");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Navbar theme="yellow" />
      <div className="h-[80vh] text-black mt-10 flex flex-col">
        <h1 className="w-[80%] mx-auto text-4xl mb-[1rem] text font-bold">
          Send me an email
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[80%] h-fit flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              className="rounded-md px-3 py-2 bg-mainwhite border-2 border-black text-maindark"
              aria-label="Email"
              id="email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              className="rounded-md px-3 py-2 bg-mainwhite border-2 border-black  text-maindark"
              aria-label="Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col w-full gap-1 h-full">
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="font-semibold" htmlFor="Message">
              Message
            </label>
            <textarea
              className="rounded-md px-3 py-2 bg-mainwhite border-2 border-black  text-maindark h-[7em]"
              aria-label="Message"
              id="message"
              name="message"
              value={message}
              style={{ overflow: "hidden", resize: "none" }}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="self-end mt-2 bg-crimson md:w-[20%] bg-pink text-black font-semibold border-2 border-black rounded-md px-4 py-[0.6rem] transition-all duration-[30] hover:scale-[1.01] "
            type="submit"
            disabled={state.submitting || state.succeeded}
          >
            Submit
          </button>
        </form>
        <div className="h-fit">
          <div className="mt-3 flex w-[80%] mx-auto flex-col border-white">
            <div className="divider text-mainwhitefont font-semibold before:bg-black after:bg-black ">
              Or contact me via social media
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
      <Footer />
    </>
  );
}
