"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMouseHoverAndMenuContext } from "../context/globalcontext";
import { MenuLogo } from "./svgs/logos";

export const Loader = () => {
  const divRefs = useRef<HTMLDivElement[]>([]);
  const divFixed = useRef<HTMLDivElement | null>(null);
  const divAbsolute = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const path = pathname.split("/")[1];

  const router = useRouter();

  const { loading, isLoading, mypage } = useMouseHoverAndMenuContext();

  useEffect(() => {
    async function AnimateNow() {
      if (loading) {
        if (divFixed.current) {
          animate(divFixed.current, { y: "0%" });
        }
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
      }

      if (loading && path === mypage.name) {
        if (divFixed.current) {
          animate(divFixed.current, { y: "-100%" });
        }
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
      }
    }

    AnimateNow();
  }, [loading, pathname]);

  return (
    <motion.div
      initial={path === mypage.name ? { y:"0%" } :{ y: "100%" }}
      className="z-[40] overflow-hidden h-full w-full fixed grid grid-cols-4"
      ref={divFixed}
    >
      <motion.div
        initial={path === mypage.name ? { y:"0%" } :{ y: "100%" }}
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
            initial={{ y: "100%" }}
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
  );
};
