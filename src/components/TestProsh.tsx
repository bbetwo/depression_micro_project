import { ReactNode, useReducer } from "react";
import { TestCont } from "../context/TestCont";

type Props =  {
  children: ReactNode
}

export type state = number;

export type action = {
  type: "decrement" | "increment",
  payload?: number
  
}

export const TestBox = ({ children }:Props) => {
  const initialState = 0;

  const reducer = (state:state, action:action) => {
    switch (action.type) {
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TestCont.Provider value={{ state, dispatch }}>
      {children}
    </TestCont.Provider>
  );
};
