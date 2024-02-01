"use client";

import { MotionTranslate } from "../../motion/motion";

export const OurBrands = () => {
  const TEAM: Array<{ text: string; duration: number }> = [
    { text: "M", duration: 0.1 },
    { text: "A", duration: 0.18 },
    { text: "R", duration: 0.2 },
    { text: "C", duration: 0.28 },
    { text: "H", duration: 0.3 },
    { text: "I", duration: 0.38 },
  ];

  return (
    <div className="">
      <div className="mx-auto w-[94vw]">
        <div className="mb-[40px] bg-accent h-[1px]"></div>
        <div className="flex justify-between font-neue text-[13px] text-textb  w-[94vw] mx-auto">
          <div>
            <span>Our brands</span>
          </div>
          <div>
            <span> </span>
          </div>
          <div>
            <span>Our brands</span>
          </div>
        </div>
      </div>
      <div className="text-clamp text-textb font-dusk uppercase text-nowrap overflow-hidden whitespace-break-spaces flex justify-center">
        {TEAM.map((w, index) => {
          return (
            <MotionTranslate delay={w.duration} key={index}>
              {w.text}
            </MotionTranslate>
          );
        })}
      </div>
      <div className="mt-[120px] mb-[170px]">
        <div className="p_container flex justify-end ">
          <div className="w-[45%] ">
            <span className="mr-[120px] inline-flex items-center">
              <div className="w-[20px] h-[20px] rounded-full bg-accent"></div>
            </span>
            <span className="font-neue text-[52px] text-textb">
              Let{"'"}s collaborate from Always with the better brand names of
              the sector For guarantee you products And services Of high
              quality. Thank you at the our experience, we know advise you there
              best solution is from a point Of view aesthetic That practical
              That you will simplify there life.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
