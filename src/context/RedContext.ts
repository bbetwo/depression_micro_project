import { createContext, Dispatch } from "react";

type state = {
    count: number
}

type action = {
    type: string,
    payload?: number
}

type contextType = {
    state: state,
    dispatch: Dispatch<action>
}

export const RedContext = createContext<contextType>({state: {count: 0}, dispatch: ()=>{}});
