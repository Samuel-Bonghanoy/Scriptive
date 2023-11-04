"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

const defaultLetterContent: letter = {
  senderName: "John Smith",
  senderAddress: "123 Anywhere St. Any City",
  senderTitle: "Software Engineer",
  senderContactNum: "123-456-7890",
  senderEmail: "johnsmith@scriptive.com",
  recipientName: "Recipient Name",
  recipientAddress: "123 Anywhere St. Any City",
  recipientTitle: "Software Engineer",
  recipientContactNum: "123-456-7890",
  recipientEmail: "johnsmith@scriptive.com",
  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
  deleniti est? Iste alias veritatis minus accusantium laudantium?
  Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum
  maxime consequuntur! Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Est reprehenderit atque quis numquam officiis
  consectetur eligendi assumenda ut saepe ea?
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
  deleniti est? Iste alias veritatis minus accusantium laudantium?
  Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum
  maxime consequuntur! Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Est reprehenderit atque quis numquam officiis
  consectetur eligendi assumenda ut saepe ea?
  `,
  date: "14th August 2026",
  topic: "Job Reference: Senior Developer",
};

type letter = {
  senderName: string;
  senderAddress: string;
  senderTitle: string;
  senderContactNum: string;
  senderEmail: string;
  recipientName: string;
  recipientAddress: string;
  recipientTitle: string;
  recipientContactNum: string;
  recipientEmail: string;
  content: string;
  date: string;
  topic: string;
};

type LetterContextType = {
  letterContent: letter;
  setLetterContent: Dispatch<SetStateAction<letter>>;
};

const LetterContext = createContext<LetterContextType>({
  letterContent: defaultLetterContent,
  setLetterContent: () => {},
});

export const LetterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [letterContent, setLetterContent] =
    useState<letter>(defaultLetterContent);

  return (
    <LetterContext.Provider value={{ letterContent, setLetterContent }}>
      {children}
    </LetterContext.Provider>
  );
};

export function LetterData() {
  const context = useContext(LetterContext);
  if (context === undefined)
    throw new Error("PassengerContext used outside of the provider");
  return context;
}
