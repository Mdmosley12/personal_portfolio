import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
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
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => {
            return (
              <div key={technology.name} className="flex flex-col items-center">
                <div className="w-32 h-32 ball flex flex-col items-center justify-center">
                  <img src={technology.icon} className="w-20 h-20" />
                </div>
                <p className="text-[#dfd9ff] font-bold lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]">
                  {technology.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
