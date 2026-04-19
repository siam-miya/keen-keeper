import { Children, createContext, useState } from "react";


export const FriendsContext = createContext()

const FriendsContextProvider = ({children}) => {
  const [inerActive, setInertActive] = useState([])
  const data = [
    {
     inerActive,
      setInertActive
    }
  ]
  return <FriendsContext.Provider value={data}>
           {children}
  </FriendsContext.Provider>
}

export default FriendsContextProvider

