import React, { createContext, useReducer, Dispatch } from "react";
import { ACTIONS, ICreditData, IMortgageData, StatusType } from './actions';
import { StateReducer } from "./reducers";

export interface IState {
    creditData: ICreditData;
    mortgageData: IMortgageData,
}

interface IStateContext {
    globalState: IState;
    globalDispatch: Dispatch<ACTIONS>;
};

const initialState: IState = {
    creditData: { price: 50000,
        interest: 0,
        numYears: 20},
    mortgageData: {
        monthlyValue: 0,
        status: StatusType.NONE,
        error: null
    }
};

const store = createContext<IStateContext> ({
    globalState: initialState,
    globalDispatch: () => null
});

const { Provider } = store;

const StateProvider = ({ children }: { children: JSX.Element }) => {
    const [globalState, globalDispatch] = useReducer(StateReducer, initialState);
    return <Provider value={{ globalState, globalDispatch }}>{children}</Provider>;
};
  
export { store, StateProvider };