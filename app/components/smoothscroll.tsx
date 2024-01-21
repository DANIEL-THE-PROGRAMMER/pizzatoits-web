"use client"


import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Scrollbar as ScrollbarType } from 'smooth-scrollbar/scrollbar';

const SmoothScrollbar = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let scrollbar: ScrollbarType 

    if(container){
        scrollbar = Scrollbar.init(container, { damping: 0.1, delegateTo: document });

    }
    
    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100vw', minHeight: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollbar;