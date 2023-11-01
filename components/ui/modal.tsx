import React from "react";
import SenderForm from "./senderForm";

export default function Modal({ type }: { type: string }) {
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn bg-pink text-black border-2 transition-all duration-[30] hover:border-l-4 hover:border-b-4 hover:bg-pink"
      >
        {type === "sender" ? "Edit Sender Details" : "Edit Recipient Details"}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-base-300">
          {type === "sender" && <SenderForm />}
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
