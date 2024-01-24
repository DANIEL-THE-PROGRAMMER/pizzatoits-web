"use client";

import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useMouseHoverAndMenuContext } from "@/app/context/globalcontext";

export const FurnitureSection = ({
  name,
  video,
  number,
}: {
  name: string;
  video: string;
  number: number | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && ref2.current) {
    }
  });

  const { onCusor } = useMouseHoverAndMenuContext();

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.cursor')
    if(cursor){
      cursor.classList.remove(`${name}`)
    }
  }
  

  return (
    <div
      className=""
    >
      <div className="mx-auto w-[94vw]">
        <div className="mb-[40px] bg-accent h-[1px]"></div>
        <div className="flex justify-between font-neue text-[13px] text-textb  w-[94vw] mx-auto ">
          <div>
            <span>{name}</span>
          </div>
          <div>
            <span>{number}</span>
          </div>
          <div>
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className="text-clamp text-textb font-dusk uppercase text-nowrap overflow-hidden flex gap-[90px] whitespace-break-spaces">
        <Marquee
          speed={500}
          style={{
            overflow: "hidden",
          }}
        >
          <span className="" ref={ref}>
            <span>{name} — </span>
          </span>
          <span className="" ref={ref2}>
            <span>{name} — </span>
          </span>
        </Marquee>
      </div>
      <video className="mt-[-10%] mx-auto"></video>
    </div>
  );
};
