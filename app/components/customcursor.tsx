'use client'

import { MouseContext } from "../context/globalcontext";
import { useContext, useEffect, useState } from "react"
import { useRef, MouseEvent } from "react";





const DotRing = () => {



    const cursor = useRef<HTMLDivElement>(null)

    const onMouseMove = (event: any) => {
        const { clientX, clientY } = event
        if(cursor.current){
            cursor.current.style.left = `${clientX}px`;
            cursor.current.style.top = `${clientY}px`;
        }
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    },[])

    return (
        <div className="cursor" ref={cursor}></div>
    );
};

export default DotRing;
