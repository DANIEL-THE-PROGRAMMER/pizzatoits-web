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
  onCusor: (cursorType: string | false) => void;
  sectionName: string;
  cursorType: string | undefined;
  collabName: string;
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
  onCusor: () => {},
  sectionName: "",
  cursorType: undefined,
  collabName: ""
});

const globalReducer = (
  state: any,
  action: { type: any; cursorType: any; sectionName?: any; collabName?: any }
) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    case "SECTION_NAME": {
      return {
        ...state,
        sectionName: action.sectionName,
      };
    }
    case "COLLAB_NAME": {
      return {
        ...state,
        collabName: action.collabName,
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
  const [isOpen, setOpen] = useState(false);
  const [isPreloading, setPreloading] = useState(true);
  const [loadPage, setLoadPage] = useState(false);
  const [loading, isLoading] = useState(false);

  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    sectionName: "",
    collabName: "",
    cursorStyles: [
      "link",
      "gallery",
      "contact",
      "Bathroom furniture",
      "Comfort Environment",
      "Water Treatment",
      "Plant engineering",
      "section",
    ],
  });

  const { sectionName, cursorType, collabName } = state;

  const [mypage, changePage] = useState({ index: "001", name: "home" });

  useEffect(() => {}, [loading]);

  const onCusor = (cursorType: string | false) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const body = document.querySelector("body");
    if (state.cursorType) {
      if (cursor) cursor.classList.add(`${state.cursorType}`);
    } else {
      if (cursor) cursor.classList.remove(cursor.classList[1]);
    }
    if (state.sectionName) {
      cursor?.classList.remove(cursor.classList[1]);

      if (body) {
        body.style.cursor = "none";
      }
    } else {
      if (body) body.style.cursor = "auto";
    }
  }, [state]);

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
          onCusor,
          sectionName,
          cursorType,
          collabName
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
    onCusor,
    sectionName,
    cursorType,
    collabName
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
    onCusor,
    sectionName,
    cursorType,
    collabName
  };
};

export default MouseContextProvider;
