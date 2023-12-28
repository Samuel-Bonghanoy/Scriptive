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
  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit doloredeleniti est? Iste alias veritatis minus accusantium laudantium?Incidunt iure, eos porro a totam itaque reprehenderit aperiam eummaxime consequuntur! Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Est reprehenderit atque quis numquam officiisconsectetur eligendi assumenda ut saepe ea? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolore deleniti est? Iste alias veritatis minus accusantium laudantium?
  Incidunt iure, eos porro a totam itaque reprehenderit aperiam eum maxime consequuntur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est reprehenderit atque quis numquam officiis consectetur eligendi assumenda ut saepe ea?
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

const lettersz = [
  {
    senderName: "John Doe",
    senderAddress: "123 Main St",
    senderTitle: "Mr.",
    senderContactNum: "1234567890",
    senderEmail: "john.doe@example.com",
    recipientName: "Jane Smith",
    recipientAddress: "456 High St",
    recipientTitle: "Ms.",
    recipientContactNum: "0987654321",
    recipientEmail: "jane.smith@example.com",
    content: "Hello, this is a sample letter.",
    date: new Date().toISOString(),
    topic: "Sample Letter",
  },
  {
    senderName: "Alice Johnson",
    senderAddress: "789 Oak St",
    senderTitle: "Mrs.",
    senderContactNum: "9876543210",
    senderEmail: "alice.johnson@example.com",
    recipientName: "Bob Williams",
    recipientAddress: "567 Pine St",
    recipientTitle: "Mr.",
    recipientContactNum: "0123456789",
    recipientEmail: "bob.williams@example.com",
    content: "Greetings! Here's another sample letter.",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    topic: "Greetings Letter",
  },
  {
    senderName: "Charlie Brown",
    senderAddress: "246 Elm St",
    senderTitle: "Dr.",
    senderContactNum: "5556667777",
    senderEmail: "charlie.brown@example.com",
    recipientName: "Lucy Miller",
    recipientAddress: "135 Maple St",
    recipientTitle: "Miss",
    recipientContactNum: "3334445555",
    recipientEmail: "lucy.miller@example.com",
    content: "Dear Lucy, I hope this letter finds you well.",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    topic: "Friendly Letter",
  },
  {
    senderName: "David Lee",
    senderAddress: "111 Birch St",
    senderTitle: "Mr.",
    senderContactNum: "7778889999",
    senderEmail: "david.lee@example.com",
    recipientName: "Eva Taylor",
    recipientAddress: "222 Cedar St",
    recipientTitle: "Mrs.",
    recipientContactNum: "8889990000",
    recipientEmail: "eva.taylor@example.com",
    content: "Hey Eva, just dropping you a quick note.",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    topic: "Quick Note",
  },
  // Add more letters as needed
];

type LetterContextType = {
  letterContent: letter;
  setLetterContent: Dispatch<SetStateAction<letter>>;
  letters: letter[];
  setLetters: Dispatch<SetStateAction<letter[]>>;
};

const LetterContext = createContext<LetterContextType>({
  letterContent: defaultLetterContent,
  setLetterContent: () => {},
  letters: lettersz,
  setLetters: () => {},
});

export const LetterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [letterContent, setLetterContent] =
    useState<letter>(defaultLetterContent);

  const [letters, setLetters] = useState<letter[]>(lettersz);

  useEffect(() => {
    localStorage.setItem("letters", JSON.stringify(letters));
  }, [letters]);

  return (
    <LetterContext.Provider
      value={{ letters, setLetters, letterContent, setLetterContent }}
    >
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
