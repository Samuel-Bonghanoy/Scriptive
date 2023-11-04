"use client";

import { LetterData } from "@/contexts/LetterContext";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import RecipientForm from "./recipientForm";

export default function SenderForm({ type }: { type: string }) {
  const { register, handleSubmit, reset } = useForm();
  const { setLetterContent, letterContent } = LetterData();

  function onSubmit(data: FieldValues) {
    setLetterContent({ ...letterContent, ...data });
    reset();
  }

  if (type === "recipient") return <RecipientForm type={type} />;

  return (
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
          {...register("senderName")}
          defaultValue={letterContent?.senderName}
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
          {...register("senderAddress")}
          defaultValue={letterContent?.senderAddress}
        />
      </div>

      <div className="form-control w-full mt-[-1rem]">
        <label className="label text-white">
          <span className="label-text text-white font-semibold">
            What is {type === "sender" ? "your" : "the recipient's"} job title?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
          {...register("senderTitle")}
          defaultValue={letterContent?.senderTitle}
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
          {...register("senderContactNum")}
          defaultValue={letterContent?.senderContactNum}
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
          {...register("senderEmail")}
          defaultValue={letterContent?.senderEmail}
        />
      </div>
      <div className="flex justify-end items-end gap-3">
        <button
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
  );
}
