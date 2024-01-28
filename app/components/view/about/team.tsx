import {  MotionTranslate } from "../../motion/motion";
import { AboutSlider } from "./aboutslider";

export const Team = () => {

    const TEAM:  Array<{ text: string, duration : number  }> = [
        { text: "T", duration: 0.1 },
        { text: "EA", duration: 0.18 },
        { text: "M", duration: 0.2 },
    ]

  return (
    <div>
      <div className="mx-auto w-[94vw]">
        <div className="mb-[40px] bg-accent h-[1px]"></div>
        <div className="flex justify-between font-neue text-[13px] text-textb  w-[94vw] mx-auto ">
          <div>
            <span>About</span>
          </div>
          <div>
            <span>{" "}</span>
          </div>
          <div>
            <span>About</span>
          </div>
        </div>
      </div>
      <div className="text-clamp text-textb font-dusk uppercase text-nowrap overflow-hidden whitespace-break-spaces flex justify-center">
        {TEAM.map((w, index) => {
            return (
                <MotionTranslate delay={w.duration} key={index}>
                    {w.text}
                </MotionTranslate>
            )
        })}
      </div>
      <AboutSlider />
    </div>
  );
};
