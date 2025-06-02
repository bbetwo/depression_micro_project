import { createContext, Dispatch } from "react";

type State = number;

type Action = {
    type: "increment" | "decrement",
    payload?: number
}

type contextType = {
    state: State,
    dispatch:  Dispatch<Action>
}

export const TestCont = createContext<contextType>({state: 0, dispatch: ()=>{}});
