import React from 'react' ;



const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-[#facc15] text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute items-center justify-center flex flex-col">
        <div className="text first absolute flex mt-8" aria-label="Coding Enthusiast">
          {produceSpans("Coding Aficionado", "animate-textRotate1")}
        </div>
        <div className="text second absolute flex mt-8" aria-label="Passionate Learner">
          {produceSpans("Passionate Learner", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position

