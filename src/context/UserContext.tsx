// src/context/UserContext.tsx

import React, { createContext, useState, useContext } from "react";

// pode colocar no src/types/global.d.ts
type User = {
  user: {
    id: number;
    username: string;
  },
  pokemons: Pokemon[];
}

type UserContextValue = {
  /** o usuário, undefined se não estiver logado */
  user?: User;
  /** setter do usuário */
  setUser: (user?: User) => void;
};

const UserContext = createContext<UserContextValue>({
  user: undefined,
  setUser: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}