"use client";

import { LetterData } from "@/contexts/LetterContext";
import React from "react";
import { createPortal } from "react-dom";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export default function RecipientForm({ type }: { type: string }) {
  const { register, handleSubmit, reset } = useForm();
  const { setLetterContent, letterContent } = LetterData();

  function onSubmit(data: FieldValues) {
    setLetterContent({ ...letterContent, ...data });
    reset();
    console.log(data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-full"
      >
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text text-white font-semibold">
              What is {type === "sender" ? "your" : "the recipient's"} name?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            {...register("recipientName")}
            defaultValue={letterContent?.recipientName}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="label text-white">
            <span className="label-text text-white font-semibold">
              What is {type === "sender" ? "your" : "the recipient's"} address?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            {...register("recipientAddress")}
            defaultValue={letterContent?.recipientAddress}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="label text-white">
            <span className="label-text text-white font-semibold">
              What is {type === "sender" ? "your" : "the recipient's"} job
              title?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            {...register("recipientTitle")}
            defaultValue={letterContent?.recipientTitle}
          />
        </div>

        <div className="form-control w-full mt-[-1rem]">
          <label className="label text-white">
            <span className="label-text text-white font-semibold">
              What is {type === "sender" ? "your" : "the recipient's"} contact
              number?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            {...register("recipientContactNum")}
            defaultValue={letterContent?.recipientContactNum}
          />
        </div>
        <div className="form-control w-full mt-[-1rem]">
          <label className="label text-white">
            <span className="label-text text-white font-semibold">
              What is {type === "sender" ? "your" : "the recipient's"} email?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-white text-black"
            {...register("recipientEmail")}
            defaultValue={letterContent?.recipientEmail}
          />
        </div>
        <div className="flex justify-end items-end gap-3">
          <button
            onClick={() =>
              toast.success("Successfully applied changes", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
            }
            type="submit"
            className=" rounded-md w-fit font-semibold bg-subyellow text-black px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
          >
            Apply Changes
          </button>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn bg-pink hover:bg-red-600 text-black"
            >
              Close
            </label>
          </div>
        </div>
      </form>
      {createPortal(<ToastContainer />, document.body)}
    </>
  );
}
