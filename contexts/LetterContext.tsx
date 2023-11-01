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

type LetterContextType = {
  currentLetter: String;
  setCurrentLetter: Dispatch<SetStateAction<String>>;
};

const LetterContext = createContext<LetterContextType>({
  currentLetter: "",
  setCurrentLetter: () => {},
});

export const LetterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentLetter, setCurrentLetter] = useState<String>("");

  return (
    <LetterContext.Provider value={{ currentLetter, setCurrentLetter }}>
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
