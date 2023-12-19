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

const defaultUserContent: user[] = [
  { name: "sethonne", password: "123", type: 10 },
  { name: "user", password: "123", type: 1 },
];

type user = {
  name: string;
  password: string;
  type: number;
};

type userContextType = {
  users: user[];
  setUsers: Dispatch<SetStateAction<user[]>>;
  user: user | null;
  setUser: Dispatch<SetStateAction<user | null>>;
};

const UserContext = createContext<userContextType>({
  users: defaultUserContent,
  setUsers: () => {},
  user: null,
  setUser: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<user[]>(defaultUserContent);
  const [user, setUser] = useState<user | null>(null);

  return (
    <UserContext.Provider value={{ user, users, setUsers, setUser }}>
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
