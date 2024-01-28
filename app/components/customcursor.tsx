"use client";

import { useEffect } from "react";
import { useRef } from "react";
import { ArrowRight } from "./svgs/icon";
import { useMouseHoverAndMenuContext } from "../context/globalcontext";

const DotRing = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const { sectionName } = useMouseHoverAndMenuContext();

  const sName = sectionName.length
    ? sectionName.split(" ")[0].toLowerCase()
    : "";


  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    if (cursor.current) {
      cursor.current.style.left = `${clientX}px`;
      cursor.current.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="cursor" ref={cursor}>
      <div className="arrowright">
        <ArrowRight />
      </div>
      <div className={`${sName && "section"}`}>{sName}</div>
    </div>
  );
};

export default DotRing;
