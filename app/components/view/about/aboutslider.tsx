export const AboutSlider = () => {
  return (
    <>
      <div className="my-[12rem] rotate-[-3deg] border-2 border-black flex overflow-hidden">
        {Array.from({ length: 11 }, (arr, index) => {
          return (
            <div
              className="border-2 border-black grow basis-[281px] h-[355px] mx-[20px] shrink-0"
              key={index}
            ></div>
          );
        })}
      </div>
    </>
  );
};
