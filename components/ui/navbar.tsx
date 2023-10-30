import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full h-[5rem] navbar bg-mainwhite">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-6">
            <Image
              src="/logo.svg"
              alt="Next.js Logo"
              width={60}
              height={60}
              priority
            />{" "}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex gap-6 pr-10 text-black font-bold">
              {/* Navbar menu content here */}
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Help</a>
              </li>
              <li>
                <a>Contact Me</a>
              </li>
              <li className="border-2 border-black rounded-lg w-[6rem] text-center flex items-center">
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
