import { Children, createContext } from "react";


export const FriendsContext = createContext()

const FriendsContextProvider = ({children}) => {
  const data = [
    {
      name: "siam",
      age: 11
    }
  ]
  return <FriendsContext.Provider value={data}>
           {children}
  </FriendsContext.Provider>
}

export default FriendsContextProvider

