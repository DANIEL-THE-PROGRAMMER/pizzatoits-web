"use client";

import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Sleep } from "../utils/helper";

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

export const MenuContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isPreloading: boolean;
  setPreloading: Dispatch<SetStateAction<boolean>>;
  loadPage: boolean;
  setLoadPage: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  isLoading: Dispatch<SetStateAction<boolean>>;
  mypage: { index: string; name: string };
  changePage: Dispatch<SetStateAction<{ index: string; name: string }>>;
}>({
  isOpen: false,
  setOpen: () => {},
  isPreloading: true,
  setPreloading: () => {},
  loadPage: false,
  setLoadPage: () => {},
  loading: false,
  isLoading: () => {},
  mypage: { index: "001", name: "home" },
  changePage: () => {},
});

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
  const [isOpen, setOpen] = useState(false);
  const [isPreloading, setPreloading] = useState(true);
  const [loadPage, setLoadPage] = useState(false);
  const [loading, isLoading] = useState(false);

  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  });

  const [mypage, changePage] = useState({ index: "001", name: "home" });

  useEffect(() => {}, [loading]);

  useEffect(() => {
    setPreloading(true);
    async function CheckPreloading() {
      await Sleep(1000);
      setLoadPage(true);
      await Sleep(500);
      setPreloading(false);
    }

    CheckPreloading();
  }, []);

  const cursorChangeHandler = (cursorType: React.SetStateAction<string>) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider value={[state, dispatch]}>
      <MenuContext.Provider
        value={{
          isOpen,
          setOpen,
          isPreloading,
          setPreloading,
          loadPage,
          setLoadPage,
          loading,
          isLoading,
          mypage,
          changePage,
        }}
      >
        {props.children}
      </MenuContext.Provider>
    </MouseContext.Provider>
  );
};

export const useMouseHoverAndMenuContext = () => {
  const [state, dispatch] = useContext(MouseContext);
  const {
    isOpen,
    setOpen,
    isPreloading,
    loadPage,
    loading,
    isLoading,
    mypage,
    changePage,
  } = useContext(MenuContext);
  return {
    state,
    dispatch,
    isOpen,
    setOpen,
    isPreloading,
    loadPage,
    loading,
    isLoading,
    mypage,
    changePage,
  };
};

export default MouseContextProvider;
