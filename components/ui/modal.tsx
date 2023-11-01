import React from "react";

export default function Modal({ type }: { type: string }) {
  return (
    <div>
      <label htmlFor="my_modal_6" className="btn">
        {type === "sender" ? "Edit Sender Details" : "Edit Recipient Details"}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
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
