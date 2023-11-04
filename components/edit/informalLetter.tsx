"use client";

import { LetterData } from "@/contexts/LetterContext";

function InformalLetter() {
  const { letterContent } = LetterData();

  return (
    <div className="flex h-[1056px] w-[816px] bg-white flex-col px-12 py-12 text-black gap-2 shadow-gray-700 shadow-md rounded-md">
      <div className="flex flex-col">
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold self-end">
            {letterContent.senderName}
          </h1>
          <div className="flex flex-col">
            <p className="text-[1rem] self-end">
              +{letterContent.senderContactNum}
            </p>
            <p className="text-[1rem] self-end">{letterContent.senderEmail}</p>
            <p className="text-[1rem] self-end">
              {letterContent.senderAddress}
            </p>
          </div>
        </div>

        <p className="text-[1rem] self-end pb-5">{letterContent.date}</p>
        <p className="text-[1rem] pb-2 font-semibold">
          Dear {letterContent.recipientName},
        </p>
        <p className="text-[1rem] pb-2">{letterContent.content}</p>

        <p className="text-[1rem] pb-5">Sincerely,</p>
        <p className="text-[1.15rem] pb-2 font-semibold">
          {letterContent.senderName}
        </p>
      </div>
    </div>
  );
}

export default InformalLetter;
