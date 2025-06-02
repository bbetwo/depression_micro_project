import { ReactNode, useReducer } from "react";
import { RedContext } from "../context/RedContext";
import { useIncDec } from "../hooks/useIncDec";

type props = {children: ReactNode};

type state = {
  count:number
};
type action = {
  type: string,
  payload?: number
}

export const IncDec = ({ children }: props) => {
  const initialState = {
    count: 0,
  };

  const reducer = (state:state, action:action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
        default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RedContext.Provider value={{ state, dispatch }}>
      {children}
    </RedContext.Provider>
  );
};

export const TestRedCon = () => {
  const { state, dispatch } = useIncDec();

  const handleClick = () => {
    dispatch({ type: "increment" });
  };

  return <button onClick={handleClick}>{state.count}</button>;
};


