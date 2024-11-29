import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function Pages() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      duration: 2,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.rotateText',
        start: 'top 50%',
        end: 'top -270%',
        scrub: 2
      }
    });
  });

  return (
    <div id="sectionTwo" className="w-full h-full text-center my-4">
      <p className="text-xl">© anzo.studio 2024 | designed and developed</p>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">impactfui</h1>
      </div>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">design</h1>
      </div>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">is the</h1>
      </div>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">design</h1>
      </div>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">that</h1>
      </div>

      <div className="rotateText h-[30vw] leading-[40rem] mt-[3rem]">
        <h1 className="text-[42vw] font-[file5] uppercase">works</h1>
      </div>
    </div>
  );
}

export default Pages;
