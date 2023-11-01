import React from "react";

export default function SenderForm({ type }: { type: string }) {
  return (
    <form className="flex flex-col gap-7 w-full">
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
        />
      </div>
    </form>
  );
}
