import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function Pages() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".Text", {
      transform: "rotateX(-80deg)",
      duration: 2,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".Text",
        start: "top 50%",
        end: "top -270%",
        scrub: 1,
      },
    });
  });

  return (
    <div id="sectionThree" className="w-full h-full text-center my-4">
      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">helping</h1>
      </div>

      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase text-zinc-400">my</h1>
      </div>

      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">clients</h1>
      </div>

      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">to achieve</h1>
      </div>

      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase text-zinc-400">
          their
        </h1>
      </div>

      <div className="Text h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">dreams!</h1>
      </div>
    </div>
  );
}

export default Pages;
