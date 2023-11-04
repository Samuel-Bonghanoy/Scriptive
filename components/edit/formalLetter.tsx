"use client";

import { LetterData } from "@/contexts/LetterContext";

function FormalLetter() {
  const { letterContent } = LetterData();

  return (
    <div className="flex h-[1056px] w-[816px] bg-white flex-col px-12 py-12 text-black gap-2 shadow-gray-700 shadow-md rounded-md">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">{letterContent.senderName}</h1>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">{letterContent.senderTitle}</p>
          <div className="flex flex-col">
            <p className="text-[1.1rem] self-end">
              {letterContent.senderContactNum}
            </p>
            <p className="text-[1.1rem] self-end">
              {letterContent.senderEmail}
            </p>
            <p className="text-[1.1rem] self-end">
              {letterContent.senderAddress}
            </p>
          </div>
        </div>
        <hr className="border-[1.5px] border-black my-3" />
        <p className="text-[1.1rem] self-end">{letterContent.date}</p>
        <p className="text-[1.1rem] font-semibold">
          {letterContent.recipientName}
        </p>
        <p className="text-[1.1rem] font-semibold mb-2 max-w[30ch]">
          {letterContent.recipientTitle}
        </p>

        <p className="text-[1.1rem] ">{letterContent.recipientContactNum}</p>
        <p className="text-[1.1rem] ">{letterContent.recipientEmail}</p>
        <p className="text-[1.1rem] ">{letterContent.recipientAddress}</p>

        <p className="text-[1.35rem] uppercase py-5 font-semibold">
          {letterContent.topic}
        </p>
        <p className="text-[1rem] pb-5 whitespace-pre-line">
          Dear {letterContent.recipientName},
        </p>
        <div className="text-[1rem] pb-5  whitespace-pre-line">
          {letterContent.content.split("\n").map((sec) => (
            <p className="text-[1rem] pb-3" key={sec}>
              {sec}
              <br />
            </p>
          ))}
        </div>
        <p className="text-[1rem] pb-5">Sincerely,</p>
        <p className="text-[1rem] pb-5">{letterContent.senderName}</p>
      </div>
    </div>
  );
}

export default FormalLetter;
