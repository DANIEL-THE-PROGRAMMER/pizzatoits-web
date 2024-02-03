"use client";

import { useEffect } from "react";
import { useRef } from "react";
import { ArrowRight } from "../../svgs/icon";
import { useMouseHoverAndMenuContext } from "../context/globalcontext";
import { Cursor } from "../styles/globalstyles";

const DotRing = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const { sectionName, cursorType, collabName } = useMouseHoverAndMenuContext();

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
    <Cursor
      className={`${cursorType ? cursorType : ""} mycursor ${
        sectionName ? "section" : ""
      } ${collabName ? "collab" : ""}`}
      ref={cursor}
    >
      <div className="arrowright w-[30px] h-[30px]">
        <ArrowRight />
      </div>
      <div className="section">{sectionName}</div>
      <div className="collab">{collabName}</div>
    </Cursor>
  );
};

export default DotRing;
