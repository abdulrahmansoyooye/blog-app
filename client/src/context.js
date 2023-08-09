import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ childeren }) {
  const [userInfo, setUUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUUserInfo }}>
      {childeren}
    </UserContext.Provider>
  );
}
