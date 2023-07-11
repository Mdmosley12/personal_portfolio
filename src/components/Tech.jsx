import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div
            className="w-32 h-32 flex flex-col items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-white text-[16px] font-bold">
              {technology.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
