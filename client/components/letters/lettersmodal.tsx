"use client";

import { LetterData } from "@/contexts/LetterContext";
import { UserData } from "@/contexts/UserContext";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LettersModal() {
  const { letters, letterContent, setLetterContent, setLetters } = LetterData();

  return (
    <>
      {createPortal(<ToastContainer />, document.body)}
      <button
        className="btn rounded-md w-fit font-semibold mt-4 bg-base-300 text-white px-10 pt-3 py-3 h-fit transition-all duration-200 hover:bg-yellow-600 hover:scale-[1.03]"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        use template
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col gap-3">
            {letters.map((li) => (
              <div key={li.recipientName} className="flex justify-between">
                <button onClick={() => setLetterContent(li)}>{li.topic}</button>
                <button
                  className="text-red-500"
                  onClick={() =>
                    setLetters(letters.filter((u) => u.topic !== li.topic))
                  }
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
