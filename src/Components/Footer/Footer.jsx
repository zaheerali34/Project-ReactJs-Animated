import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Footer() {

  useGSAP(function (){
    gsap.to('.icone', {
      rotate: 360,
      duration: 7,
      ease: 'linear',
      repeat: -1,
    });
  })

  return (
    <div className="w-full h-screen py-8 px-4">
      <div className="w-full h-full flex items-center bg-[url('../images/Background.avif')] bg-center rounded-3xl shadow-2xl bg-no-repeat bg-cover">
        <div className="w-2/4 p-[5rem]">
          <div className="leading-[15rem]">
            <h1 className="text-white text-[18vw] font-[file5] uppercase">
              got <span className="text-zinc-400 ">an</span>
            </h1>
            <h1 className="text-white text-[18vw] font-[file5] uppercase">
              Idea
            </h1>
          </div>

          <p className="text-zinc-500 w-[70%] mt-14 ">
            T IS NOT JUST ABOUT SOLVING THE PROBLEM BUT
            <span className="font-semibold text-xl px-2 text-white">OFFERING THE TRANSFORMATION!</span>
          </p>
        </div>

        <div className="w-2/4 h-[50vh] flex items-center gap-8">
          <img src="../images/World.avif" alt="" className="icone w-[7rem]" />
          <div className="w-[3px] h-[7rem] bg-white"></div>
          <div>
            <h2 className="text-zinc-400 text-xl">WORLD SERVICE</h2>
            <h3 className="text-white font-bold text-[1.3rem]">I CAN COME TO WHEREVER YOU ARE.</h3>
            <h2 className="text-zinc-400 text-xl">+932222222222</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
