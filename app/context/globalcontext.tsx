"use client";

import React, { createContext, useState, useContext, useReducer } from "react";

type State = {
  cursorType: boolean;
  cursorStyles: Array<string>;
};

export const MouseContext = createContext<[State, React.Dispatch<any>]>([
  {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  },
  () => {},
]);

const globalReducer = (state: any, action: { type: any; cursorType: any }) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const MouseContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  const [cursorType, setCursorType] = useState("");

  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  });

  const cursorChangeHandler = (cursorType: React.SetStateAction<string>) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider value={[state, dispatch]}>
      {props.children}
    </MouseContext.Provider>
  );
};

export const useMouseHover = () => {
  const [state, dispatch] = useContext(MouseContext);
  return { state, dispatch };
};

export default MouseContextProvider;
