"use client";

import { motion } from "framer-motion";
import { useState, useRef, SetStateAction, MouseEventHandler } from "react";

export const AboutSlider = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const itemWidth = 300;
  const [isDragging, setIsDragging] = useState(false);

  /*const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!startX) return;

    const x = e.touches[0].clientX;
    const distance = x - startX;
    if(trackRef.current){
      trackRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    if(trackRef.current){
      setScrollLeft(trackRef.current.scrollLeft);
    }
  };*/

  const handleStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX);
    console.log("start");
  };

  const handleMove = (e: any) => {
    if (!isDragging) return;
    console.log("Moving..");

    const x = e.clientX;
    if (startX) {
      const distance = x - startX;
      if (trackRef.current) {
        const newDistance = scrollLeft - distance;
        setScrollLeft(newDistance);
        //trackRef.current.scrollLeft = scrollLeft - distance;
      }
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    console.log("Ended..");
    setStartX(null);
    if (trackRef.current) {
    }
  };

  const handleTransitionEnd = () => {
    if (trackRef.current) {
      const currentPosition = trackRef.current.scrollLeft;
      const totalWidth =
        trackRef.current.scrollWidth - trackRef.current.clientWidth;

      if (currentPosition === 0) {
        // Scrolled to the left end, move to the right end
        setScrollLeft(totalWidth);
      } else if (currentPosition === totalWidth) {
        // Scrolled to the right end, move to the left end
        setScrollLeft(0);
      }
    }
  };
  return (
    <>
      <div
        className="overflow-x-hidden relative w-full pt-[5rem] pb-[12rem] mt-[120px]"
        //onTouchStart={handleTouchStart}
        //onTouchMove={handleTouchMove}
        //onTouchEnd={handleTouchEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          ref={trackRef}
          className="flex ease-in-out border-2 border-black transition-transform"
          style={{ transform: `translateX(-${scrollLeft}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {Array.from({ length: 11 }, (arr, index) => {
            return (
              <div
                className="border-2 border-black grow basis-[281px] h-[355px] mx-[20px] shrink-0 flex justify-center items-center"
                key={index}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
