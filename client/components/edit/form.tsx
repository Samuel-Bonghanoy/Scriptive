"use client";

import React, { FormEvent } from "react";
import { useState } from "react";
import Modal from "../ui/modal";
import SenderForm from "../ui/senderForm";
import { FieldValues, useForm } from "react-hook-form";
import { LetterData } from "@/contexts/LetterContext";
import { createPDF } from "@/utils/createPDF";
import { ToastContainer, toast } from "react-toastify";
import LettersModal from "../letters/lettersmodal";

export default function Form() {
  const [type, setType] = useState("sender");

  const { register, handleSubmit, reset } = useForm();
  const { setLetterContent, letterContent, setLetters, letters } = LetterData();

  function onSubmit(data: FieldValues) {
    setLetterContent({ ...letterContent, ...data });
    reset();
    console.log(data.content.split("\n"));
  }

  return (
    <>
      <ToastContainer />
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
            className="textarea textarea-bordered h-[15rem] max-h-[15rem] bg-white text-black"
            placeholder="Enter your letter body"
            {...register("content")}
            defaultValue={letterContent?.content}
          ></textarea>
        </div>

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
          className=" rounded-md w-fit font-semibold mt-4 bg-green-500 text-black px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-green-600 hover:scale-[1.03]"
        >
          Apply Changes
        </button>
      </form>
      <div className="flex flex-col">
        <button
          onClick={(e) => createPDF(letterContent.senderName, "letter")}
          className=" rounded-md w-fit font-semibold mt-4 bg-base-300 text-white px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
        >
          Download PDF
        </button>
        <button
          onClick={() => {
            setLetters([...letters, letterContent]);
            toast.success("Successfully saved template", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
          className=" rounded-md w-fit font-semibold mt-4 bg-base-300 text-white px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
        >
          Save Template
        </button>

        <LettersModal />
      </div>
    </>
  );
}
