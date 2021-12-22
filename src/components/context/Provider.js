import { createContext, useReducer } from "react";

import auth from "./reducer/auth";
import stocks from "./reducer/stocks";
import ui from "./reducer/ui";

import authInitialState from "./initialStates/auth";
import stocksInitialState from "./initialStates/stocks";
import uiInitialState from "./initialStates/ui";

// Global Context
export const GlobalContext = createContext({});

// Custom GlobalProvider wapper component
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [stocksState, stocksDispatch] = useReducer(stocks, stocksInitialState);
  const [uiState, uiDispatch] = useReducer(ui, uiInitialState);
  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        stocksState,
        stocksDispatch,
        uiState,
        uiDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
