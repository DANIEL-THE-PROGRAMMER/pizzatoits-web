'use client'

import { MenuLogo } from "../svgs/logos";
import Link from "next/link";
import { MenuLinks } from "./meulink";
import { useMouseHoverAndMenuContext } from "@/app/context/globalcontext";
import { useEffect } from "react";

export const AsideMenu = () => {

  const { isOpen, setOpen, onCusor } = useMouseHoverAndMenuContext()

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.cursor')
    if(cursor){
      cursor.classList.add('asidemenu')
    }
  }

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.cursor')
    if(cursor){
      cursor.classList.remove('asidemenu')
    }
  }

  const style = {
    translate: "none",
    rotate: "none",
    scale: "none",
    transform: isOpen ? "translate3d(0px, 0px, 0px)" : "translateY(-100%)",
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if(isOpen) {
      body.style.overflow = "hidden"
    }else {
      body.style.overflow = "scroll"
    }
  },[isOpen])

  return (
    <aside
      style={style}
      className="fixed w-[100vw] h-[100vh] top-0 bg-accent flex flex-col justify-between will-change-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        <div className="h-[123px] flex items-center justify-between px-[40px] relative z-10 ">
          <button onClick={() => setOpen(false)} className="group ouline-none flex items-center bg-[hsla(0,0%,100%,.2)] justify-center w-[111px] h-[47px] rounded-[10rem] text-textw font-neue border-[1px] border-accent backdrop-blur-[20px] text-2xl px-[4rem] relative overflow-hidden">
            <span className="absolute h-full flex items-center group-hover:translate-y-[-100%] group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
              Close
            </span>
            <span className="absolute h-full translate-y-[100%] group-hover:translate-y-0 flex items-center group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
              Close
            </span>
          </button>
          <button className="group ouline-none flex items-center bg-[hsla(0,0%,100%,.2)] justify-center w-[111px] h-[47px] rounded-[10rem] text-textw font-neue border-[1px] border-accent backdrop-blur-[20px] text-2xl px-[4.5rem] relative overflow-hidden">
            <span className="absolute h-full flex items-center group-hover:translate-y-[-100%] group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
              Contact
            </span>
            <span className="absolute h-full translate-y-[100%] group-hover:translate-y-0 flex items-center group-hover:transition-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]">
              Contact
            </span>
          </button>
        </div>
        <div className="absolute top-0 w-full py-[45px] flex justify-center leading-[17px] text-textw font-neue">
          <span className="text-center">
            FORNITURE IDRAULICHE E TERMOSANITARIE.
            <br />
            ARREDOBAGNO.
          </span>
        </div>
        <div className="mb-[28px] px-[40px]">
          <div className="bg-textw h-[1px]" />
        </div>
        <MenuLogo />
      </div>
      <div className="w-[94vw] mx-auto flex flex-col gap-[50px]">
        <div className="flex gap-[40px]">
          <MenuLinks
            type="recap"
            name="recap"
            links={["About","Showroom","contacts"]}
            color="#184dc4"
          />
          <MenuLinks
            type="Services"
            name="Services"
            links={[
              "Bathroo furniture",
              "comfort environment",
              "Water Treatment",
              "Plant Engineering",
            ]}
            color="#184dc4"
          />
          <MenuLinks
            type="address"
            name="address"
            links={[
              "T. 045 545063",
              "M. pizzatoits@pizzatoits.it",
              "IG. pizzato_its",
            ]}
            last={true}
          />
        </div>
        <div className="py-[4rem] flex justify-between border-t-2 border-t-textw">
          <div className="text-textw">
            <small>© 2024</small>
          </div>
          <div className="text-textw">
            <small>Privacy Policy</small>
          </div>
        </div>
      </div>
    </aside>
  );
};
