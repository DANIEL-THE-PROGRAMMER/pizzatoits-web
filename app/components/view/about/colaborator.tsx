"use client";

import { useMouseHoverAndMenuContext } from "@/app/context/globalcontext";

export const Collaborators = () => {
  const { onCusor, dispatch } = useMouseHoverAndMenuContext();

  const collabs: Array<string> = [
    "Arbi Arredobagno",
    "Dolomite Ceramics",
    "Paffoni Taps",
    "Caleffi",
    "Eurotis",
    " Valsir",
    "Water Patents",
    "Locatelli",
    "Ecological Manta",
    "Vaillant",
    "Mitsubishi Electric",
    "Chaffoteaux",
  ];

  const handleMouseLeave = () => {
    dispatch({ type: "COLLAB_NAME", collabName: "" });
  };

  return (
    <div className="p_container mgbtm">
      <ul className="list mx-auto ">
        {collabs.map((collab, index) => {
          return (
            <li
              key={index}
              className="group flex items-start gap-[40px] py-[1.5rem] border-b-accent border-b-[1px] last:border-b-0"
              onMouseEnter={() =>
                dispatch({ type: "COLLAB_NAME", collabName: `${collab}` })
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[100px] group-hover:pl-[0.5rem] ease-[cubic-bezier((.19,1,.22,1)] duration-[0.75s] transition-[padding] flex text-sm font-neue text-textb">
                00{index + 1}
              </div>
              <div className="text-textb font-neue grow group text-[56px] relative  ease-[cubic-bezier((.19,1,.22,1)] overflow-hidden">
                <span className="group-hover:translate-y-[-110%] inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)]">
                  {collab}
                </span>
                <span className="absolute inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)] left-0 translate-y-[100%] group-hover:translate-y-[0%] font-dusk">
                  {collab}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
