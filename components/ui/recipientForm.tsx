import React from "react";

export default function RecipientForm() {
  return (
    <form className="flex flex-col gap-7 w-full">
      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text text-black font-semibold">
            What is the recipient&apos;s name?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
        />
      </div>

      <div className="form-control w-full mt-[-1rem]">
        <label className="label text-black">
          <span className="label-text text-black font-semibold">
            What is the recipient&apos;s address?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
        />
      </div>

      <div className="form-control w-full mt-[-1rem]">
        <label className="label text-black">
          <span className="label-text text-black font-semibold">
            What is the recipient&apos;s job title?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
        />
      </div>

      <div className="form-control w-full mt-[-1rem]">
        <label className="label text-black">
          <span className="label-text text-black font-semibold">
            What is the recipient&apos;s contact number?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
        />
      </div>
      <div className="form-control w-full mt-[-1rem]">
        <label className="label text-black">
          <span className="label-text text-black font-semibold">
            What is the recipient&apos;s email?
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
