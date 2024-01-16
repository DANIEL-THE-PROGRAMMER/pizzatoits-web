'use client'


import { useMouseHoverAndMenuContext } from "../context/globalcontext"
import Image from "next/image"

export const Preloader = () => {

    const {isPreloading} = useMouseHoverAndMenuContext()

    const style = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: isPreloading ? "translate3d(0px, 0px, 0px)" : "translateY(-100%)",
      };


    return (
        <div className="fixed w-[100vw] h-[100vh] top-0 bg-[#f2f1e4] flex justify-center items-center will-change-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]" style={style}>
            <Image src="/assets/load.gif" alt="load" width={300} height={300} />
        </div>
    )
}