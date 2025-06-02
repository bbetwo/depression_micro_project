import { useReducer } from "react";
import { RedContext } from "../context/RedContext";
import { useIncDec } from "../hooks/useIncDec";

export const IncDec = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };
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


