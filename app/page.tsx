"use client";

import { Gallery } from "./components/section/gallery";
import { Articles } from "./components/section/articles";
import { FurnitureSection } from "./components/section/furniture/components/f_section";
import { AsideMenu } from "./components/asidemenu/asidemenu";
import { Navbar } from "./components/navbar";
import { useMouseHoverAndMenuContext } from "./context/globalcontext";
import { Preloader } from "./components/preloader";
import { AnimatePresence, motion } from "framer-motion";
import { HomeMenuLinks } from "./components/asidemenu/meulink";

export default function Home() {
  const { isOpen, isPreloading, loadPage } = useMouseHoverAndMenuContext();

  const style = {
    translate: "none",
    rotate: "none",
    scale: "none",
    transform:
      isOpen || isPreloading
        ? "translate3d(0px, 100vh, 0px)"
        : "translate3d(0px, 0px, 0px)",
  };

  return (
    <>
      <div style={loadPage ? { display: "block" } : { display: "none" }}>
        <AsideMenu />
        <div
          className="bg-[#f2f1e4] will-change-transform duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)]"
          style={style}
        >
          <Navbar />
          <Gallery />
          <Articles />
          <FurnitureSection name="Bathroom furniture" number="001" video="" />
          <FurnitureSection name="Comfort Environment" number="002" video="" />
          <FurnitureSection name="Water Treatment" number="003" video="" />
          <FurnitureSection name="Plant engineering" number="004" video="" />
          <div className="flex w-[94vw] border-t-accent border-t-[1px] mx-auto border-b-accent border-b-[1px] py-[40px]">
            <HomeMenuLinks
              type="recap"
              name="recap"
              links={["About", "Showroom", "contacts"]}
              last
            />
            <HomeMenuLinks
              type="Services"
              name="Services"
              links={[
                "Bathroom furniture",
                "comfort environment",
                "Water Treatment",
                "Plant Engineering",
              ]}
              last
            />
            <HomeMenuLinks
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
          <div className="flex justify-between py-[40px] w-[94vw] mx-auto text-accent">
            <small>© 2024 Privacy Policy</small>
            <small>
              Pursuant to and for the purposes of the art. 3 quater paragraph 2
              of Legislative Decree 135/2018, state aid and de minimis aid
              recognized to the company can also be found in the specific
              Transparency section of the
            </small>
            <small>Credits</small>
          </div>
        </div>
      </div>
    </>
  );
}
