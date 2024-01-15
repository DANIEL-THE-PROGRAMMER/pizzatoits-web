'use client'

import { Gallery } from "./components/section/gallery"
import { Articles } from "./components/section/articles"
import { FurnitureSection } from "./components/section/furniture/components/f_section"
import { AsideMenu } from "./components/asidemenu/asidemenu";
import { Navbar } from "./components/navbar";
import { useMouseHoverAndMenuContext } from "./context/globalcontext";


export default function Home() {


  const { isOpen } = useMouseHoverAndMenuContext()

  const style = {
    translate: "none",
    rotate: "none",
    scale: "none",
    transform: isOpen ? "translate3d(0px, 100vh, 0px)" : "translate3d(0px, 0px, 0px)",
  };

  return (
    <>
      <AsideMenu />
      <div className="bg-[#f2f1e4] will-change-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]" style={style}>
        <Navbar />
        <Gallery />
        <Articles />
        <FurnitureSection name="Bathroom funrniture" number="001" video="" />
        <FurnitureSection name="Comfort Enviroment" number="002" video="" />
        <FurnitureSection name="Water Treatment" number="003" video="" />
        <FurnitureSection name="Plant Engineering" number="004" video="" />
      </div>
    </>
  );
}
