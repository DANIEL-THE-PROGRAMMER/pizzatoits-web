'use client'

import {  useEffect } from "react"
import { useRef } from "react";
import { ArrowRight } from "./svgs/icon";
import { useMouseHoverAndMenuContext } from "../context/globalcontext";
 


const DotRing = () => {
    const cursor = useRef<HTMLDivElement>(null)

    const onMouseMove = (event: any) => {
        const { clientX, clientY } = event
        if(cursor.current){
            cursor.current.style.left = `${clientX}px`;
            cursor.current.style.top = `${clientY}px`;
        }
    }

    const { state } = useMouseHoverAndMenuContext()

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    },[])

    return (
        <div className="cursor " ref={cursor}>
            <div className="arrowright"><ArrowRight /></div>
        </div>
    );
};

export default DotRing;
