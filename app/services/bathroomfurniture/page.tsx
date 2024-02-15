"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";

export default function BathRoomFurniture() {

  const [ percentage, setPercentage ] = useState(0)

  const np = 0

  const parent = useRef<HTMLDivElement | null>(null);
  const scrollsection =  useRef<HTMLDivElement | null>(null);

  

  useEffect(() => {

    

    const handleScroll = () => {
      const parentOffset = parent.current?.offsetTop as number
      console.log(scrollsection.current?.scrollWidth)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      let percentage = (((window.scrollY - parentOffset) / totalHeight) * 100)
      setPercentage(percentage)

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
       window.removeEventListener("scroll",handleScroll)
    }

  },[])

  return (
    <div className=""> 
      <div className="sticky top-0 text-[75px]">{percentage}</div>
      <div className="h-[100vh] border-2 border-red-400"></div>
      <div className="h-[10000px] border-2 border-blue-600" ref={parent}>
        <div className="sticky top-0 border-2 border-green-600 flex h-[400px] overflow-hidden">
          <div className="flex border-2 border-yellow-500" ref={scrollsection} style={{ 
            transform: `translateX(-${percentage}%)`
           }}>
            {Array.from({ length: 20 }, (_, i) => {
              return (
                <div
                  className="border-2 border-red-600 w-[400px] h-[400px] shrink-0 text-2xl text-center flex justify-center items-center"
                  key={i}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[100vh] border-2 border-yellow-600"></div>
    </div>
  );
}
