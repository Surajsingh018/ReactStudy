import { createContext, useState } from "react";

export const usercontext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  return (
    <usercontext.Provider value={{ user, setUser }}>
      {props.children}
    </usercontext.Provider>
  );
};
export default UserContextProvider;
