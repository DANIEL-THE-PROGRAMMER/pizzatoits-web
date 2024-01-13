export const Articles = () => {
  const Sentences: string[] = [
    "Bathroom furniture,",
    " plant engineering, ",
    "treatment of water ",
    "And ",
    "comfort ",
    "environment:",
    "self ",
    "that, ", 
    "That ",
    "circles ",
    "And ",
    "a ",
    "service, ",
    "business suit, ",
    "maximum quality ",
    "And ",
    "professionalism, ",
    "six ",
    "In the ",
    "place ",
    "Right. ",
    "In the ",
    "years ",
    "we are ",
    "become ",
    "The ",
    "point ",
    "Of ",
    "reference ",
    "For ",
    "private ",
    "And ",
    "professionals ",
    "That ",
    "they seek ",
    "solutions ",
    "personalized ",
    "reliable ",
    "For ",
    "the environment ",
    "domestic ",
    "And ",
    "corporate. ",
  ];

  return (
    <div className="flex font-neue   text-[52px] text-textb w-[94vw] mx-auto flex-wrap pb-[130px]">
      {Sentences.map((word, index) => {
        return (
          <span
            className="leading-[100%] pb-[5px] whitespace-break-spaces inline-block min-h-[10px]"
            key={index}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
