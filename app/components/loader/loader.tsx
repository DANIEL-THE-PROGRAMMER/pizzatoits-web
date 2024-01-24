"use client";

import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMouseHoverAndMenuContext } from "@/app/context/globalcontext";
import { MenuLogo } from "../svgs/logos";
import { Sleep } from "@/app/utils/helper";

export const Loader = () => {
  const divRefs = useRef<HTMLDivElement[]>([]);
  const divFixed = useRef<HTMLDivElement | null>(null);
  const divAbsolute = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const path = pathname.split("/")[1];

  const [previous, setPrevious] = useState(path);

  const router = useRouter();

  const { loading, isLoading, mypage } = useMouseHoverAndMenuContext();
  const [y, setY] = useState("100%");

  useEffect(() => {
    async function AnimateNow() {
      if (loading) {
        console.log("i'm still being called");

        if (divFixed.current) {
          animate(divFixed.current, { y: "0%" });
          animate(
            divRefs.current[0],
            { y: "0%" },
            { ease: "easeInOut", delay: 0.1, duration: 0.5 }
          );
          animate(
            divRefs.current[1],
            { y: "0%" },
            { ease: "easeInOut", delay: 0.2, duration: 0.5 }
          );
          animate(
            divRefs.current[2],
            { y: "0%" },
            { ease: "easeInOut", delay: 0.25, duration: 0.5 }
          );
          await animate(
            divRefs.current[3],
            { y: "0%" },
            { ease: "easeInOut", delay: 0.3, duration: 0.5 }
          );

          const sequence: any = [[divAbsolute.current, { y: "0%" }]];

          await animate(sequence);

          router.push(`/${mypage.name}`);
          setY("0%");
        }
      }
    }

    AnimateNow();
  }, [loading]);

  useEffect(() => {
    async function AnimateNow() {
      await Sleep(1000);
      if (loading && previous !== path) {
        console.log("animate current page");
        if (divFixed.current) {
          animate(divFixed.current, { y: "-100%" });

          animate(
            divRefs.current[0],
            { y: "-100%" },
            { ease: "easeInOut", delay: 0.3, duration: 0.5 }
          );
          animate(
            divRefs.current[1],
            { y: "-100%" },
            { ease: "easeInOut", delay: 0.25, duration: 0.5 }
          );
          animate(
            divRefs.current[2],
            { y: "-100%" },
            { ease: "easeInOut", delay: 0.2, duration: 0.5 }
          );
          await animate(
            divRefs.current[3],
            { y: "-100%" },
            { ease: "easeInOut", delay: 0.1, duration: 0.5 }
          );

          const sequence: any = [[divAbsolute.current, { y: "-100%" }]];

          await animate(sequence);
          isLoading(false);
          setPrevious(`${mypage.name}`);
        }
      }
    }

    AnimateNow();
  }, [pathname]);



  return (
    <>
      <motion.div
        initial={{ y: y }}
        className="z-[40] overflow-hidden h-full w-full fixed grid grid-cols-4"
        ref={divFixed}
      >
        <motion.div
          initial={{ y:y }}
          className="absolute z-10 flex w-full h-full items-center justify-center"
          ref={divAbsolute}
        >
          <div className="flex w-full justify-between px-[40px] text-2xl text-white font-neue capitalize">
            <div>
              <span>{mypage.index}</span>
            </div>
            <div>
              <span>{mypage.name}</span>
            </div>
            <div>
              <span>Loading</span>
            </div>
          </div>
          <div className="absolute z-10 mx-auto w-[94vw] bottom-4">
            <MenuLogo />
          </div>
        </motion.div>
        {Array.from({ length: 4 }, (_, index) => {
          return (
            <motion.div
              initial={{ y: y }}
              ref={(el) => {
                if (el) {
                  divRefs.current[index] = el;
                }
              }}
              key={index}
              className="bg-accent h-full"
            ></motion.div>
          );
        })}
      </motion.div>
    </>
  );
};
