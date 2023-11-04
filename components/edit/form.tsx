"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import Modal from "../ui/modal";
import SenderForm from "../ui/senderForm";
import { FieldValues, useForm } from "react-hook-form";
import { LetterData } from "@/contexts/LetterContext";

export default function Form() {
  const [type, setType] = useState("sender");

  const { register, handleSubmit, reset } = useForm();
  const { setLetterContent, letterContent } = LetterData();

  function onSubmit(data: FieldValues) {
    setLetterContent({ ...letterContent, ...data });
    reset();
    console.log(data.content.split("\n"));
  }

  // const completion = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       role: "user",
  //       content: "What is the most important thing to keep in mind in life?",
  //     },
  //   ],
  // });

  // console.log(completion.choices[0].message);

  return (
    <>
      <div className="flex flex-col">
        <button className="w-[60%]" onClick={() => setType("sender")}>
          <Modal type="sender" />
        </button>
        <button className="w-[60%]" onClick={() => setType("recipient")}>
          <Modal type="recipient" />
        </button>
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-base-300">
          <SenderForm type={type} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full"
      >
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text text-black font-semibold">
              What date will this letter be sent out on?
            </span>
          </label>
          <input
            type="text"
            placeholder="Date"
            className="input input-bordered w-full bg-white text-black"
            {...register("date")}
            defaultValue={letterContent?.date}
          />
        </div>
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text text-black font-semibold">
              What is the topic of your letter?
            </span>
          </label>
          <input
            type="text"
            placeholder="Topic"
            className="input input-bordered w-full bg-white text-black"
            {...register("topic")}
            defaultValue={letterContent?.topic}
          />
        </div>

        <div className="flex flex-col">
          <label className="label text-black">
            <span className="label-text text-black font-semibold">
              Type the body of your letter
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-[15rem] bg-white text-black"
            placeholder="Enter your letter body"
            {...register("content")}
            defaultValue={letterContent?.content}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="label text-black">
            <span className="label-text text-black font-semibold">
              Upload your logo (if applicable)
            </span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs bg-base-300"
          />
        </div>
        <button
          type="submit"
          className=" rounded-md w-fit font-semibold bg-green text-black px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
        >
          Apply Changes
        </button>
      </form>
    </>
  );
}
