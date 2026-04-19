// FriendsContext.js
import { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendsContextProvider = ({ children }) => {
  const [interActive, setInterActive] = useState([]);
  const contextValue = {
    interActive,
    setInterActive
  };
  return (
    <FriendsContext.Provider value={contextValue}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsContextProvider;