import Image from "next/image";

export const Gallery = () => {

    const Articles : string[] = [
        "Bathroom furniture", "plant engineering," ,"treatment of water" ,"And", "comfort", "environment:" ,"self" ,"that,", "That" ,"circles", "And", "a", "service,", "business suit,", "maximum quality", "And", "professionalism," ,"six", "In the", "place", "Right.", "In the", "years", "we are",  "become", "The", "point", "Of", "reference", "For", "private", "And", "professionals", "That", "they seek", "solutions", "personalized", "reliable", "For", "the environment", "domestic", "And", "corporate."
    ]
    

  return (
    <>
      <div className="w-[95vw] mx-auto mb-[90px] flex gap-[40px] h-[916px] overflow-hidden border-b-[1px] border-accent">
        <div className="h-[916px] grow relative rounded-[20px] translate-y-[40%] overflow-hidden hover:translate-y-[20%] ease-[cubic-bezier((.19,1,.22,1)] duration-[.8s]">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-filter/55 hover:bg-transparent transition-all duration-[.5s] z-10"></div>
          <Image src="/assets/one.webp" alt="one" sizes="100%" fill={true} />
        </div>
        <div className="rounded-[20px] h-[916px] grow relative translate-y-[20%] overflow-hidden hover:translate-y-[20%]">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-filter/55 z-10 hover:bg-transparent transition-all duration-[.5s] "></div>
          <Image src="/assets/two.webp" alt="two" sizes="100%" fill={true} />
        </div>
        <div className="rounded-[20px] h-[916px] grow relative translate-y-[40%] overflow-hidden hover:translate-y-[20%] hover:bg-transparent transition-all duration-[.8s] ease-[cubic-bezier((.19,1,.22,1)] ">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-filter/55 hover:bg-transparent transition-all duration-[.5s] z-10"></div>
          <Image src="/assets/3.webp" alt="3" sizes="100%" fill={true} />
        </div>
      </div>
        <div className="flex fon">
            { Articles.map((word, index) => {
                return (
                    <div className="" key={index}></div>
                )
            }) } 
        </div>
    </>
  );
};
