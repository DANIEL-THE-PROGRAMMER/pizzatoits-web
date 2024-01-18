"use client";

import { Logo } from "./svgs/logos";
import { useMouseHoverAndMenuContext } from "../context/globalcontext";
import Link from "next/link";
import { GetPageNumber, Sleep } from "../utils/helper";

export const Navbar = () => {
  const { setOpen, changePage, isLoading } = useMouseHoverAndMenuContext();

  const handleClick = async (page: string) => {
    const pageNumber = GetPageNumber(page);
    changePage(pageNumber);
    isLoading(true);
  };

  return (
    <div className="">
      <div className="h-[123px] flex items-center justify-between px-[40px] relative z-10 ">
        <button
          className="group ouline-none flex items-center justify-center w-[111px] h-[47px] rounded-[10rem] text-textb font-neue border-[1px] border-accent bg-white text-2xl px-[3.5rem] transition-colors relative duration-[.5s] hover:bg-accent overflow-hidden ease-[cubic-bezier((.19,1,.22,1)]"
          onClick={() => setOpen(true)}
        >
          <span className="absolute h-full flex items-center group-hover:translate-y-[-100%] group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
            Menu
          </span>
          <span className="absolute h-full translate-y-[100%] group-hover:translate-y-0 flex items-center group-hover:transition-transform duration-[.5s] text-white ease-[cubic-bezier((.19,1,.22,1)]">
            Menu
          </span>
        </button>
        <button className="group ouline-none flex items-center justify-center w-[111px] h-[47px] rounded-[10rem] text-textb font-neue border-[1px] border-accent bg-white text-2xl px-[4.5rem] transition-colors relative duration-[.5s] hover:bg-accent overflow-hidden ease-[cubic-bezier((.19,1,.22,1)]">
          <span className="absolute h-full flex items-center group-hover:translate-y-[-100%] group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
            Contatti
          </span>
          <span className="absolute h-full translate-y-[100%] group-hover:translate-y-0 flex items-center group-hover:transition-transform duration-[.5s] text-white ease-[cubic-bezier((.19,1,.22,1)]">
            Contatti
          </span>
        </button>
      </div>
      <div className="absolute top-0 w-full py-[45px] flex justify-center leading-[17px] text-textb font-neue">
        <span className="text-center">
          FORNITURE IDRAULICHE E TERMOSANITARIE.
          <br />
          ARREDOBAGNO.
        </span>
      </div>
      <div className="mb-[28px] px-[40px]">
        <div className="bg-accent h-[1px]" />
      </div>
      <div onClick={(e) => handleClick("about")}>
        <Logo />
      </div>
    </div>
  );
};
