import { createContext, useReducer } from "react";
import reducer from "../store/reducer";
import store from "../store/store";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
