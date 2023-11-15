import React from "react";
import SenderForm from "./senderForm";
import { createPortal } from "react-dom";
import RecipientForm from "./recipientForm";

export default function Modal({ type }: { type: string }) {
  console.log(type);

  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn bg-base-300 text-white border-2  transition-all duration-[30] hover:scale-[1.03] hover:bg-base-300 w-full mb-4"
      >
        {type === "sender" ? "Edit Sender Details" : "Edit Recipient Details"}
      </label>
    </div>
  );
}
