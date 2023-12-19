"use client";
import React from "react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

const defaultUserContent: user = {
  name: "",
  password: "",
  type: 0,
};

type user = {
  name: string;
  password: string;
  type: number;
};

type userContextType = {
  userContent: user;
  setUserContent: Dispatch<SetStateAction<user>>;
};

const UserContext = createContext<userContextType>({
  userContent: defaultUserContent,
  setUserContent: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userContent, setUserContent] = useState<user>(defaultUserContent);

  return (
    <UserContext.Provider value={{ userContent, setUserContent }}>
      {children}
    </UserContext.Provider>
  );
};

export function UserData() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("PassengerContext used outside of the provider");
  return context;
}
