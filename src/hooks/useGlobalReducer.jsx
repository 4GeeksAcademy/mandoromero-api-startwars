import React, { createContext, useReducer, useContext } from 'react';
import storeReducer from '../pages/store';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useGlobalReducer = () => {
  const { store, dispatch } = useContext(StoreContext);
  return { store, dispatch };
};