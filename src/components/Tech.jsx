import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const gradients = [
  "from-purple-500 to-pink-500",
  "from-blue-500 via-purple-500 to-pink-500",
  "from-green-400 to-blue-500",
  "from-yellow-400 via-red-500 to-pink-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-rose-400 via-fuchsia-500 to-indigo-500"
];

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='flex flex-col items-center' key={technology.name}>
          <div
            className={`w-[130px] h-[160px] bg-gradient-to-br ${
              gradients[index % gradients.length]
            } rounded-full shadow-lg overflow-hidden p-2 flex items-center justify-center hover:scale-110 transition-transform duration-300`}
          >
            <BallCanvas icon={technology.icon} />
          </div>
          <p className='mt-2 text-white text-sm font-medium text-center'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
