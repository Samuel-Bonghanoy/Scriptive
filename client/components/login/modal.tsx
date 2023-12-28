"use client";

import { LetterData } from "@/contexts/LetterContext";
import { UserData } from "@/contexts/UserContext";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
  const { register, handleSubmit, reset } = useForm();
  const { user, users, setUsers, setUser } = UserData();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onSubmit(data: FieldValues) {
    const { name, password } = data;

    setUser(users.filter((u) => u.name === name)[0]);

    console.log(name);
    console.log(users[0].name);

    if (user === null) {
      toast.error("No such user is found", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Successfully logged in", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    reset();
  }
  return (
    <>
      {createPortal(<ToastContainer />, document.body)}
      <div>
        <button
          className=""
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Login
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-white mb-[-22px]">Login</h3>
            <div className="modal-action flex flex-col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 w-full"
              >
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-white font-semibold">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full bg-white text-black"
                    {...register("name")}
                  />
                </div>
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-white font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full bg-white text-black"
                    {...register("password")}
                  />
                </div>
                <button
                  type="submit"
                  className=" rounded-md w-fit font-semibold mt-4 bg-green-500 text-black px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-green-600 hover:scale-[1.03]"
                >
                  Login
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-red-400 text-black">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
