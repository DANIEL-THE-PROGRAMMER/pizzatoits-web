import { MotionTranslate } from "../../motion/motion";
import { AboutSlider } from "./aboutslider";

export const Team = () => {
  const TEAM: Array<{ text: string; duration: number }> = [
    { text: "T", duration: 0.1 },
    { text: "EA", duration: 0.18 },
    { text: "M", duration: 0.2 },
  ];

  return (
    <div className="mgbtm">
      <div className="mx-auto w-[94vw]">
        <div className="mb-[40px] bg-accent h-[1px]"></div>
        <div className="flex justify-between font-neue text-[13px] text-textb  w-[94vw] mx-auto ">
          <div>
            <span>About</span>
          </div>
          <div>
            <span> </span>
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
          );
        })}
      </div>
      <AboutSlider />
      <div className="p_container flex justify-end">
        <div className="w-[45%] ">
          <span className="mr-[120px] inline-flex items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-accent"></div>
          </span>
          <span className="font-neue text-[52px] text-textb">
            There I am in particular Three words That Everything is fine day
            they drive The our team Of experts: availability, experience And
            professionalism. From the reception, to the warehouse, to bathroom
            furnishings, There you find Always ready to listen to you And to
            find there solution improve For you!
          </span>
        </div>
      </div>
    </div>
  );
};
