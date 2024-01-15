
'use client'

import React, { createContext, useState, useContext, useReducer, Dispatch, SetStateAction } from "react";

type State = {
    cursorType: boolean,
    cursorStyles: Array<string>
}

export const MouseContext = createContext<[State, React.Dispatch<any>]>([
    {
        cursorType: false,
        cursorStyles: ["pointer", "hovered", "locked", "white"],
    },
    () => {}
]);

export const MenuContext = createContext<{isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>}>({
  isOpen: false,
  setOpen: () => {},
})

const globalReducer = (state: any, action: { type: any; cursorType: any; }) => {
    switch (action.type) {
      case "CURSOR_TYPE": {
        return {
          ...state,
          cursorType: action.cursorType,
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

const MouseContextProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  const [cursorType, setCursorType] = useState("");
  const [isOpen, setOpen] = useState(false);

  const [ state, dispatch ] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  })


  const cursorChangeHandler = (cursorType: React.SetStateAction<string>) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={[
        state,
        dispatch,
      ]}
    >
      <MenuContext.Provider value={{isOpen, setOpen}}>
        {props.children}
      </MenuContext.Provider>
    </MouseContext.Provider>
  );
};

export const useMouseHoverAndMenuContext = () => {
    const [ state, dispatch ] = useContext(MouseContext)
    const { isOpen, setOpen } = useContext(MenuContext)
    return { state, dispatch, isOpen, setOpen  }
}

export default MouseContextProvider;