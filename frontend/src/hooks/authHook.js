import { createContext, useContext, useReducer } from "react";

// store
const initailState = { jwt: null };

const authContext = createContext(initailState);

export function reducer(state, action) {
  if (action.type === "login") {
    return { jwt: action.jwt };
  }
  if (action.type === "logout") {
    return { jwt: null };
  }
}

export function AuthProvider({ children }) {
  const [jwt, setJwt] = useReducer(reducer, initailState);
  return (
    <authContext.Provider value={[jwt, setJwt]}>
      {children}
    </authContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(authContext);
}
