"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function SenderForm({ type }: { type: string }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

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
          {...register("name")}
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
          {...register("address")}
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
          {...register("job title")}
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
          {...register("contactNum")}
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
          {...register("email")}
        />
      </div>
      <button type="submit">Apply Changes</button>
    </form>
  );
}
