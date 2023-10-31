import React from "react";

export default function Form() {
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
            To whom are you sending this letter to?
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
            What is their address?
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full bg-white text-black"
        />
      </div>
      <div className="flex flex-col">
        <label className="label text-black">
          <span className="label-text text-black font-semibold">
            Type the body of your letter
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-white text-black"
          placeholder="Bio"
        ></textarea>
      </div>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs bg-base-300"
      />
    </form>
  );
}
