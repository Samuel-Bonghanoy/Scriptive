"use client";

import { LetterData } from "@/contexts/LetterContext";
import { UserData } from "@/contexts/UserContext";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UsersModal() {
  const { letters, letterContent, setLetterContent } = LetterData();
  const { users, setUsers } = UserData();

  return (
    <>
      {createPortal(<ToastContainer />, document.body)}
      <button onClick={() => document.getElementById("my_modal_5").showModal()}>
        users
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col gap-3">
            {users.map((li) => (
              <div className="flex justify-between" key={li.name}>
                <p className="text-white">{li.name}</p>
                <button
                  className="text-red-500"
                  onClick={() =>
                    setUsers(users.filter((u) => u.name !== li.name))
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
