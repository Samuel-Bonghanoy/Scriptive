"use client";

import { LetterData } from "@/contexts/LetterContext";
import Image from "next/image";

function FormalLetterv2() {
  const { letterContent } = LetterData();

  return (
    <div className="flex h-[1056px] w-[816px] bg-white flex-col px-12 py-12 text-black gap-2 shadow-gray-700 shadow-md rounded-md letter">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">{letterContent.senderName}</h1>
              <p className="text-lg font-semibold">
                {letterContent.senderTitle}
              </p>
              <p className="text-[1.1rem] ">
                +{letterContent.senderContactNum}
              </p>
              <p className="text-[1.1rem] ">{letterContent.senderEmail}</p>
              <p className="text-[1.1rem] ">{letterContent.senderAddress}</p>
            </div>
            <div className="flex flex-col items-end">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={60}
                priority
              />
              <p className="text-[1.1rem] self-center">Scriptive</p>
            </div>
          </div>

          <p className="text-[1.35rem] uppercase py-7 font-semibold text-yellow-600">
            {letterContent.topic}
          </p>
          <div className="text-[1.1rem] font-semibold pb-5 flex text-yellow-600 justify-between">
            <p>Dear {letterContent.recipientName},</p>
            <p className="text-[0.9rem]">{letterContent.date}</p>
          </div>
          <div className="text-[1rem] pb-5">
            {letterContent.content.split("\n").map((sec) => {
              if (/\S/.test(sec))
                return (
                  <p className="text-[1rem] pb-3" key={sec}>
                    {sec}
                    <br />
                  </p>
                );
            })}
          </div>
          <p className="text-[1rem] pb-5">Sincerely,</p>
          <p className="text-[1rem] pb-5 font-semibold">
            {letterContent.senderName}
          </p>
        </div>
        <div className="justify-self-end">
          <hr className="border-1 border-black my-3" />
          <div className="flex justify-between">
            <div>
              <p className="text-[1.1rem] font-semibold">
                {letterContent.recipientName}
              </p>
              <p className="text-[1.1rem] font-semibold mb-2">
                {letterContent.recipientTitle}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.1rem] self-end">
                {letterContent.recipientContactNum}
              </p>
              <p className="text-[1.1rem] self-end">
                {letterContent.recipientEmail}
              </p>
              <p className="text-[1.1rem] self-end">
                {letterContent.recipientAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormalLetterv2;
