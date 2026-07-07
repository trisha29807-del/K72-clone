import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Video from "./Video";

const HomeHeroText = () => {
  const ellipseRef = useRef(null);

  useEffect(() => {
    const ellipse = ellipseRef.current;
    const length = ellipse.getTotalLength();

    gsap.set(ellipse, {
      strokeDasharray: `${length * 0.25} ${length}`,
      strokeDashoffset: 0,
    });

    gsap.to(ellipse, {
      strokeDashoffset: -length,
      duration: 3,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="font-[font1] pt-5 text-center">
      {/* Line 1 */}
      <div className="text-[8vw] flex justify-center items-center uppercase leading-[10vw]">
        THE SPARK FOR
      </div>

      {/* Line 2 */}
      <div className="text-[8vw] flex justify-center items-center uppercase leading-[10vw]">
        ALL
        <div className="mx-[1vw] h-[8vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        THINGS
      </div>

      {/* Line 3 */}
      <div className="flex justify-center items-center mt-2">
        <div className="relative inline-block">
          <h1 className="uppercase text-[8vw] leading-none relative z-10">
            CREATIVE
          </h1>

          <svg
            className="absolute left-1/2 top-1/2 w-[112%] h-[145%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] pointer-events-none"
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
          >
            <ellipse
              ref={ellipseRef}
              cx="250"
              cy="60"
              rx="235"
              ry="48"
              className="creativeStroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
