import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ theme }: { theme: string }) {
  return (
    <div className="drawer sticky top-0 z-30">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col shadow-gray-500 shadow-sm">
        {/* Navbar */}
        <div
          className={`w-full h-[12vh] navbar ${
            theme === "yellow" ? "bg-main" : "bg-mainwhite"
          }`}
        >
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
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Next.js Logo"
                width={60}
                height={60}
                priority
              />{" "}
            </Link>
          </div>
          <div className="flex-none hidden lg:block yes">
            <ul className="flex gap-4 pr-12 text-black font-bold items-center ">
              {/* Navbar menu content here */}
              <li>
                <Link
                  href="/"
                  className="hover:bg-subyellow rounded-md px-2 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:bg-subyellow rounded-md px-2 py-2"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:bg-subyellow rounded-md px-2 py-2"
                >
                  Contact Me
                </Link>
              </li>
              <li className="border-2 py-2 border-black rounded-md w-[5rem] transition-all duration-[30] hover:cursor-pointer hover:scale-[1.03] bg-subyellow hover:border-l-4 hover:border-b-4 text-center flex items-center justify-center">
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
