import React from "react";

export default function SenderForm() {
  return (
    <form className="flex flex-col gap-7 w-full">
      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text text-black font-semibold">
            What is your name?
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
            What is your address?
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
            What is your job title?
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
            What is your contact number?
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
            What is your email?
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
